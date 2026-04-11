"""
Clearpath — Synthetic Data Generator
Generates 5 CSV files matching the Clearpath data dictionary schema.
Run: python generate_data.py
"""

import csv
import random
import math
from datetime import datetime, timedelta

random.seed(42)

# ── Config ────────────────────────────────────────────────────────────────────

NUM_ACCOUNTS = 600
SNAPSHOT_MONTHS = 15  # months of history per account
BASE_DATE = datetime(2025, 3, 1)  # snapshot anchor date

VERTICALS = ["financial_services", "healthcare", "legal", "construction", "professional_services", "mixed"]
VERTICAL_WEIGHTS = [0.25, 0.15, 0.15, 0.10, 0.25, 0.10]

COMPANY_SIZES = ["small", "mid", "large"]
COMPANY_SIZE_WEIGHTS = [0.45, 0.40, 0.15]

PLAN_TIERS = ["starter", "pro", "enterprise"]
PLAN_WEIGHTS = [0.40, 0.45, 0.15]

ACQ_CHANNELS = ["paid_search", "referral", "outbound", "organic", "partner"]
ACQ_WEIGHTS = [0.25, 0.20, 0.25, 0.20, 0.10]

COUNTRIES = ["AU", "NZ", "SG", "GB", "US"]
COUNTRY_WEIGHTS = [0.40, 0.10, 0.15, 0.20, 0.15]

ROLES = ["admin", "manager", "learner"]

TRAINING_TYPES = ["compliance", "onboarding", "safety", "skills"]

FEATURES = [
    "course_builder",
    "bulk_assign",
    "reminder_automation",
    "audit_report",
    "hris_sync",
    "certification_tracker",
    "sso_login",
    "custom_branding",
]

GATED_ABOVE_STARTER = {"bulk_assign", "reminder_automation", "audit_report", "hris_sync"}
GATED_ABOVE_PRO = {"sso_login", "custom_branding"}

ONBOARDING_STEPS = [
    "publish_first_course",
    "assign_first_team",
    "configure_reminders",
    "sync_employee_directory",
    "generate_first_report",
]

CONTRACT_RANGES = {
    "starter": (2_000, 8_000),
    "pro": (8_000, 28_000),
    "enterprise": (28_000, 90_000),
}

USERS_PER_ACCOUNT = {
    "small": (2, 6),
    "mid": (4, 12),
    "large": (8, 25),
}

# Synthetic company name parts
NAME_PARTS_A = [
    "Apex", "Meridian", "Crest", "Summit", "Vantage", "Argent", "Nexus",
    "Prism", "Solano", "Ridgeway", "Sterling", "Halcyon", "Tandem", "Sable",
    "Concord", "Harvest", "Orion", "Pacific", "Trellis", "Westbrook",
]
NAME_PARTS_B = [
    "Group", "Partners", "Consulting", "Advisory", "Solutions", "Services",
    "Associates", "Holdings", "Capital", "Management", "Health", "Legal",
    "Contractors", "Professional", "Alliance",
]

FIRST_NAMES = [
    "Harris", "O'Brien", "Patel", "Nguyen", "Thompson", "Clarke", "Reyes",
    "Kim", "Murphy", "Jensen", "Okafor", "Leung", "Costa", "Fischer",
]

LAST_NAMES = [
    "& Associates", "& Partners", "& Co.", "Pty Ltd", "Ltd", "Inc.",
]

def random_company_name():
    style = random.random()
    if style < 0.5:
        return f"{random.choice(NAME_PARTS_A)} {random.choice(NAME_PARTS_B)}"
    else:
        return f"{random.choice(FIRST_NAMES)} {random.choice(LAST_NAMES)}"

def weighted_choice(options, weights):
    return random.choices(options, weights=weights, k=1)[0]

def random_date_between(start: datetime, end: datetime) -> datetime:
    delta = end - start
    return start + timedelta(seconds=random.randint(0, int(delta.total_seconds())))

# ── Build accounts ─────────────────────────────────────────────────────────────

accounts = []
account_ids = [f"acc_{str(i).zfill(6)}" for i in range(NUM_ACCOUNTS)]

for acc_id in account_ids:
    plan = weighted_choice(PLAN_TIERS, PLAN_WEIGHTS)
    vertical = weighted_choice(VERTICALS, VERTICAL_WEIGHTS)
    size = weighted_choice(COMPANY_SIZES, COMPANY_SIZE_WEIGHTS)
    channel = weighted_choice(ACQ_CHANNELS, ACQ_WEIGHTS)
    age = random.randint(30, 900)

    # Integration count: correlated with plan tier and age
    max_integrations = {"starter": 1, "pro": 4, "enterprise": 8}[plan]
    integration_count = random.randint(0, max_integrations)
    if age > 180 and integration_count < 2:
        integration_count = random.randint(0, max_integrations)  # second roll, skews higher for older

    lo, hi = CONTRACT_RANGES[plan]
    contract_value = round(random.uniform(lo, hi), 2)

    # Churn & upgrade logic — encodes the product's retention dynamics
    # High churn risk: low integrations, only compliance vertical users, old account
    churn_base = 0.10
    upgrade_base = 0.08

    if integration_count == 0:
        churn_base += 0.18
    elif integration_count == 1:
        churn_base += 0.08

    if plan == "starter":
        churn_base += 0.10
        upgrade_base += 0.12
    elif plan == "enterprise":
        churn_base -= 0.05
        upgrade_base -= 0.04

    if vertical in ("financial_services", "healthcare", "legal"):
        churn_base -= 0.05  # regulated = stickier

    if size == "large":
        churn_base -= 0.05

    if channel == "referral":
        churn_base -= 0.06
        upgrade_base += 0.05
    elif channel == "paid_search":
        churn_base += 0.04

    churned = random.random() < max(0.02, min(churn_base, 0.60))
    # Can't upgrade if churned
    upgraded = (not churned) and (random.random() < max(0.01, min(upgrade_base, 0.35)))

    accounts.append({
        "account_id": acc_id,
        "account_name": random_company_name(),
        "plan_tier": plan,
        "vertical": vertical,
        "company_size": size,
        "acquisition_channel": channel,
        "integration_count": integration_count,
        "account_age_days": age,
        "contract_value_aud": contract_value,
        "churned_90d": churned,
        "upgraded_90d": upgraded,
    })

# Build lookup maps
account_map = {a["account_id"]: a for a in accounts}

# ── Build users ────────────────────────────────────────────────────────────────

users = []
account_user_ids = {}  # acc_id -> [user_ids]
user_counter = 0

for acc in accounts:
    lo, hi = USERS_PER_ACCOUNT[acc["company_size"]]
    num_users = random.randint(lo, hi)
    uid_list = []
    for i in range(num_users):
        uid = f"usr_{str(user_counter).zfill(7)}"
        user_counter += 1
        role = "admin" if i == 0 else weighted_choice(ROLES[1:], [0.35, 0.65])
        country = weighted_choice(COUNTRIES, COUNTRY_WEIGHTS)
        # Churned accounts tend to have more inactive users
        if acc["churned_90d"]:
            days_inactive = random.randint(30, 200)
        else:
            days_inactive = random.randint(0, 60)
        users.append({
            "user_id": uid,
            "account_id": acc["account_id"],
            "role": role,
            "country": country,
            "days_since_last_active": days_inactive,
        })
        uid_list.append(uid)
    account_user_ids[acc["account_id"]] = uid_list

# ── Build onboarding ──────────────────────────────────────────────────────────

onboarding_rows = []

for acc in accounts:
    age = acc["account_age_days"]
    is_churned = acc["churned_90d"]
    integrations = acc["integration_count"]
    plan = acc["plan_tier"]

    # Completion probabilities per step
    # High-churn accounts more likely to have skipped steps, esp. sync_employee_directory
    step_probs = {
        "publish_first_course": 0.95,
        "assign_first_team": 0.88,
        "configure_reminders": 0.72 if plan != "starter" else 0.30,
        "sync_employee_directory": 0.75 if integrations > 0 else 0.18,
        "generate_first_report": 0.65 if plan != "starter" else 0.28,
    }

    if is_churned:
        step_probs = {k: max(0.05, v * 0.55) for k, v in step_probs.items()}

    account_created = BASE_DATE - timedelta(days=age)

    for step in ONBOARDING_STEPS:
        completed = random.random() < step_probs[step]
        if completed:
            # Completed within first 30 days, usually
            days_offset = random.randint(0, 30)
            completed_at = account_created + timedelta(days=days_offset)
            completed_at_str = completed_at.strftime("%Y-%m-%d %H:%M:%S")
        else:
            completed_at_str = ""

        onboarding_rows.append({
            "account_id": acc["account_id"],
            "step_name": step,
            "completed": completed,
            "completed_at": completed_at_str,
        })

# ── Build monthly snapshots ───────────────────────────────────────────────────

monthly_rows = []
ticket_categories = ["billing", "product", "integration", "none"]

for acc in accounts:
    age = acc["account_age_days"]
    plan = acc["plan_tier"]
    is_churned = acc["churned_90d"]
    integrations = acc["integration_count"]

    months_available = min(SNAPSHOT_MONTHS, age // 30)
    if months_available < 2:
        months_available = 2

    # Base engagement level
    base_assigns = {
        "small": random.randint(10, 40),
        "mid": random.randint(30, 120),
        "large": random.randint(80, 300),
    }[acc["company_size"]]

    base_completion_rate = 0.72 + (integrations * 0.04) - (0.15 if is_churned else 0)
    base_completion_rate = max(0.20, min(base_completion_rate, 0.98))

    for m in range(months_available):
        month_offset = months_available - 1 - m
        month_date = BASE_DATE - timedelta(days=30 * month_offset)
        month_str = month_date.strftime("%Y-%m-01")

        # Simulate audit seasonality: spike every ~6 months
        audit_spike = 1.0
        month_in_year = month_date.month
        if month_in_year in (3, 4, 9, 10):  # common audit months
            audit_spike = random.uniform(1.3, 1.8)

        # Churned accounts show decay in final 2 months
        decay_factor = 1.0
        if is_churned and m >= months_available - 2:
            decay_factor = random.uniform(0.2, 0.5)

        assigned = max(1, int(base_assigns * audit_spike * decay_factor * random.uniform(0.8, 1.2)))
        completion_rate = min(0.99, base_completion_rate * random.uniform(0.85, 1.15))
        completed = max(0, int(assigned * completion_rate))

        overdue_base = max(0, int(assigned * random.uniform(0.02, 0.15)))
        if is_churned:
            overdue_base = int(overdue_base * random.uniform(1.5, 3.0))

        num_users = len(account_user_ids[acc["account_id"]])
        seats_used = max(1, int(num_users * random.uniform(0.5, 1.0) * decay_factor))

        # Support tickets
        ticket_prob = 0.30 if is_churned else 0.15
        support_tickets = 1 if random.random() < ticket_prob else 0
        if support_tickets:
            if m == 0 and random.random() < 0.30:
                category = "billing"
            else:
                category = weighted_choice(["product", "integration", "none"], [0.4, 0.3, 0.3])
        else:
            category = "none"

        monthly_rows.append({
            "account_id": acc["account_id"],
            "month": month_str,
            "courses_assigned": assigned,
            "courses_completed": completed,
            "overdue_certifications": overdue_base,
            "seats_used": seats_used,
            "support_tickets": support_tickets,
            "support_ticket_category": category,
        })

# ── Build feature events ──────────────────────────────────────────────────────

feature_events = []
event_counter = 0

for acc in accounts:
    plan = acc["plan_tier"]
    is_churned = acc["churned_90d"]
    integrations = acc["integration_count"]
    age = acc["account_age_days"]
    user_ids = account_user_ids[acc["account_id"]]

    # Number of events per account
    base_events = random.randint(30, 80)
    if is_churned:
        base_events = int(base_events * random.uniform(0.3, 0.6))
    if plan == "enterprise":
        base_events = int(base_events * 1.5)

    account_created = BASE_DATE - timedelta(days=age)

    for _ in range(base_events):
        user_id = random.choice(user_ids)
        user_role = next(u["role"] for u in users if u["user_id"] == user_id)

        # Feature selection: learners mostly use certification_tracker; admins use everything
        if user_role == "learner":
            feature = weighted_choice(["certification_tracker", "course_builder"], [0.85, 0.15])
        elif user_role == "manager":
            feature = weighted_choice(FEATURES, [0.15, 0.15, 0.15, 0.15, 0.10, 0.15, 0.05, 0.10])
        else:
            feature = weighted_choice(FEATURES, [0.15, 0.12, 0.12, 0.15, 0.15, 0.10, 0.11, 0.10])

        # Determine event_type based on gating
        if feature in GATED_ABOVE_STARTER and plan == "starter":
            event_type = weighted_choice(["blocked", "abandoned"], [0.70, 0.30])
        elif feature in GATED_ABOVE_PRO and plan in ("starter", "pro"):
            event_type = weighted_choice(["blocked", "abandoned"], [0.80, 0.20])
        else:
            if is_churned:
                event_type = weighted_choice(["used", "abandoned"], [0.65, 0.35])
            else:
                event_type = weighted_choice(["used", "abandoned"], [0.88, 0.12])

        # training_type: only set for course-related features
        course_features = {"course_builder", "bulk_assign", "certification_tracker", "audit_report"}
        if feature in course_features:
            training_type = weighted_choice(TRAINING_TYPES, [0.40, 0.25, 0.20, 0.15])
        else:
            training_type = ""

        ts = random_date_between(account_created, BASE_DATE)
        event_id = f"evt_{str(event_counter).zfill(8)}"
        event_counter += 1

        feature_events.append({
            "event_id": event_id,
            "user_id": user_id,
            "account_id": acc["account_id"],
            "feature_name": feature,
            "training_type": training_type,
            "event_type": event_type,
            "timestamp": ts.strftime("%Y-%m-%d %H:%M:%S"),
        })

# ── Write CSVs ────────────────────────────────────────────────────────────────

OUTPUT_DIR = "data"

def write_csv(filename, rows, fieldnames):
    path = f"{OUTPUT_DIR}/{filename}"
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    print(f"  wrote {len(rows):>7,} rows → {path}")

print("Generating Clearpath synthetic data...")

write_csv("clearpath_accounts.csv", accounts, [
    "account_id", "account_name", "plan_tier", "vertical", "company_size",
    "acquisition_channel", "integration_count", "account_age_days",
    "contract_value_aud", "churned_90d", "upgraded_90d",
])

write_csv("clearpath_users.csv", users, [
    "user_id", "account_id", "role", "country", "days_since_last_active",
])

write_csv("clearpath_monthly_snapshots.csv", monthly_rows, [
    "account_id", "month", "courses_assigned", "courses_completed",
    "overdue_certifications", "seats_used", "support_tickets",
    "support_ticket_category",
])

write_csv("clearpath_feature_events.csv", feature_events, [
    "event_id", "user_id", "account_id", "feature_name", "training_type",
    "event_type", "timestamp",
])

write_csv("clearpath_onboarding.csv", onboarding_rows, [
    "account_id", "step_name", "completed", "completed_at",
])

print("Done.")
