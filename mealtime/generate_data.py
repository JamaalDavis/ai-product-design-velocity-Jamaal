"""
Generates synthetic Mealtime product data.
Run once: python3 generate_data.py
Embedded signals:
  H1 — Recipe Hoarder:        never created meal plan → ~4x churn ratio
  H2 — Billing Expectations:  billing ticket in month 1 → ~2.5x churn ratio
  H3 — Cold Start:            skipped taste profile → ~2.3x churn ratio
"""
import csv, random
from datetime import datetime, timedelta

random.seed(42)

SNAPSHOT_DATE = datetime(2024, 6, 1)
N_ACCOUNTS = 1800

PLAN_TIERS = ['free', 'premium', 'family']
PLAN_W     = [0.38, 0.47, 0.15]
PLAN_ACV   = {'free': 0.0, 'premium': 79.99, 'family': 129.99}

SEGMENTS = ['health_fitness', 'family_planning', 'foodie', 'budget_cooking', 'dietary_specific']
SEG_W    = [0.25, 0.22, 0.20, 0.18, 0.15]

PLATFORMS = ['ios', 'android', 'web']
PLAT_W    = [0.55, 0.35, 0.10]

CHANNELS = ['app_store_search', 'referral', 'social_media', 'influencer', 'organic_search', 'paid_social']
CHAN_W   = [0.30, 0.20, 0.18, 0.12, 0.12, 0.08]

COUNTRIES = ['AU', 'NZ', 'US', 'GB', 'CA']
COUNTRY_W = [0.45, 0.15, 0.20, 0.12, 0.08]

FEATURES = ['meal_plan_builder','recipe_browse','grocery_sync','collection_create',
            'dietary_filter','recipe_import','nutritional_info','meal_swap']
FEATURE_W = [0.20, 0.28, 0.10, 0.07, 0.12, 0.06, 0.10, 0.07]
GATED_FREE = {'grocery_sync','collection_create','recipe_import'}

MEAL_CATEGORIES = ['breakfast','lunch','dinner','snack','dessert']
MEAL_W          = [0.20, 0.25, 0.35, 0.10, 0.10]

ONBOARDING_STEPS = [
    'complete_taste_profile',
    'save_first_recipe',
    'create_first_meal_plan',
    'generate_grocery_list',
    'invite_family_member',
]

FIRST_NAMES = ['Smith','Johnson','Williams','Brown','Jones','Garcia','Miller',
               'Davis','Wilson','Taylor','Anderson','Thomas','Jackson','White',
               'Harris','Martin','Thompson','Moore','Young','Allen','Walker',
               'Hall','Lewis','Robinson','Clark','Rodriguez','Lee','King',
               'Wright','Scott','Green','Baker','Adams','Nelson','Carter']

def wc(items, weights=None): return random.choices(items, weights)[0]
def clamp(v, lo, hi): return max(lo, min(hi, v))

def rand_name():
    n = wc(FIRST_NAMES)
    m = wc(FIRST_NAMES)
    return random.choice([
        f"{n} Household", f"The {n}s", f"{n} & {m}", f"{n} Family", f"{n}-{m} Kitchen"
    ])

# --------------------------------------------------
# 1. Assign account risk profiles then set churn
# Four groups (mutually exclusive):
#   healthy       52% — churn  5%
#   skips_taste   15% — churn 22%
#   never_planned 18% — churn 35%
#   both_risky    15% — churn 48%
# --------------------------------------------------
GROUPS = ['healthy','skips_taste','never_planned','both_risky']
GROUP_W = [0.52, 0.15, 0.18, 0.15]
GROUP_CHURN = {'healthy': 0.05, 'skips_taste': 0.22, 'never_planned': 0.35, 'both_risky': 0.48}

print("Generating accounts...")
accounts = []
for i in range(N_ACCOUNTS):
    plan    = wc(PLAN_TIERS, PLAN_W)
    segment = wc(SEGMENTS, SEG_W)
    platform = wc(PLATFORMS, PLAT_W)
    channel  = wc(CHANNELS, CHAN_W)
    age_days = random.randint(14, 730)
    recipe_saves = random.randint(0, 180)

    group = wc(GROUPS, GROUP_W)
    skips_taste   = group in ('skips_taste', 'both_risky')
    never_planned = group in ('never_planned', 'both_risky')

    # H2: billing ticket in month 1 — 14% of accounts, adds churn premium
    billing_ticket_m1 = (random.random() < 0.14) and (group != 'both_risky')

    # Base churn from group
    churn_p = GROUP_CHURN[group] + random.gauss(0, 0.02)

    # H2 adjustment: billing-ticket accounts churn more (expectations mismatch)
    if billing_ticket_m1:
        churn_p += 0.18

    # Plan adjustments
    if plan == 'free':
        churn_p *= 1.20
    elif plan == 'family':
        churn_p *= 0.65

    churn_p = clamp(churn_p, 0.01, 0.90)
    churned  = random.random() < churn_p

    upgrade_p = 0.0
    if plan in ('free','premium') and not churned:
        upgrade_p = 0.06
        if plan == 'premium':
            upgrade_p *= 0.7
    upgraded = random.random() < upgrade_p

    acv = PLAN_ACV[plan]
    if acv > 0:
        acv = round(clamp(acv + random.gauss(0, 7), 40, 200), 2)

    accounts.append({
        'account_id':          f"acc_{i:06d}",
        'account_name':        rand_name(),
        'plan_tier':           plan,
        'user_segment':        segment,
        'device_platform':     platform,
        'acquisition_channel': channel,
        'recipe_saves':        recipe_saves,
        'account_age_days':    age_days,
        'contract_value_aud':  acv,
        'churned_90d':         churned,
        'upgraded_90d':        upgraded,
        '_group':              group,
        '_skips_taste':        skips_taste,
        '_never_planned':      never_planned,
        '_billing_ticket_m1':  billing_ticket_m1,
    })

csv_cols = [c for c in accounts[0] if not c.startswith('_')]
with open('data/mealtime_accounts.csv', 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=csv_cols)
    w.writeheader()
    for a in accounts:
        w.writerow({k: v for k, v in a.items() if not k.startswith('_')})
print(f"  {len(accounts)} accounts")

# --------------------------------------------------
# 2. Users
# --------------------------------------------------
print("Generating users...")
users = []
uid = 0
user_by_account = {}
for acc in accounts:
    plan = acc['plan_tier']
    n = random.randint(2, 5) if plan == 'family' else (random.randint(1, 2) if plan == 'premium' else 1)
    acc_users = []
    for j in range(n):
        role = 'primary' if j == 0 else wc(['family_member','viewer'], [0.78, 0.22])
        last_active = random.randint(30, 110) if acc['churned_90d'] else random.randint(0, 40)
        uid_str = f"usr_{uid:07d}"
        users.append({'user_id': uid_str, 'account_id': acc['account_id'],
                      'role': role, 'country': wc(COUNTRIES, COUNTRY_W),
                      'days_since_last_active': last_active})
        acc_users.append(uid_str)
        uid += 1
    user_by_account[acc['account_id']] = acc_users

with open('data/mealtime_users.csv', 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=['user_id','account_id','role','country','days_since_last_active'])
    w.writeheader()
    w.writerows(users)
print(f"  {len(users)} users")

# --------------------------------------------------
# 3. Monthly snapshots
# --------------------------------------------------
print("Generating monthly snapshots...")
snapshots = []
for acc in accounts:
    n_months = clamp(int(acc['account_age_days'] / 30), 1, 18)
    start_m  = SNAPSHOT_DATE - timedelta(days=30 * n_months)
    for m in range(n_months):
        month_str = (start_m + timedelta(days=30 * m)).strftime('%Y-%m-01')
        churning_period = acc['churned_90d'] and m >= n_months - 2

        if churning_period:
            active_days = clamp(int(random.gauss(5, 3)), 1, 18)
            cooked = clamp(int(random.gauss(3, 2)), 0, 15)
            saved  = clamp(int(random.gauss(2, 2)), 0, 10)
        elif acc['_never_planned']:
            active_days = clamp(int(random.gauss(9, 4)), 1, 22)
            cooked = clamp(int(random.gauss(1, 1)), 0, 8)
            saved  = clamp(int(random.gauss(10, 5)), 1, 35)
        else:
            active_days = clamp(int(random.gauss(19, 5)), 1, 31)
            cooked = clamp(int(random.gauss(24, 8)), 0, 60)
            saved  = clamp(int(random.gauss(13, 5)), 0, 40)

        missed = clamp(int(random.gauss(1, 1)), 0, cooked) if cooked > 0 else 0
        seats = clamp(int(random.gauss(1.9, 0.8)), 1, 5) if acc['plan_tier'] == 'family' else 1

        tix = 0
        cat = 'none'
        # H2: billing-ticket accounts always have a billing ticket in month 1
        if m == 0 and acc['_billing_ticket_m1']:
            tix = random.randint(1, 2)
            cat = 'billing'
        elif random.random() < 0.10:
            tix = random.randint(1, 3)
            cat = wc(['billing','product','account','none'], [0.08, 0.52, 0.20, 0.20])

        snapshots.append({'account_id': acc['account_id'], 'month': month_str,
                          'active_days': active_days, 'recipes_cooked': cooked,
                          'recipes_saved': saved, 'missed_meal_plans': missed,
                          'seats_used': seats, 'support_tickets': tix,
                          'support_ticket_category': cat})

with open('data/mealtime_monthly_snapshots.csv', 'w', newline='') as f:
    cols = ['account_id','month','active_days','recipes_cooked','recipes_saved',
            'missed_meal_plans','seats_used','support_tickets','support_ticket_category']
    w = csv.DictWriter(f, fieldnames=cols)
    w.writeheader()
    w.writerows(snapshots)
print(f"  {len(snapshots)} snapshot rows")

# --------------------------------------------------
# 4. Onboarding
# --------------------------------------------------
print("Generating onboarding...")
onboarding_rows = []
BASE_COMPLETE = {
    'complete_taste_profile': 0.90,
    'save_first_recipe':      0.88,
    'create_first_meal_plan': 0.90,
    'generate_grocery_list':  0.55,
    'invite_family_member':   0.28,
}
for acc in accounts:
    age = acc['account_age_days']
    start_d = SNAPSHOT_DATE - timedelta(days=age)
    for step in ONBOARDING_STEPS:
        base = BASE_COMPLETE[step]
        # H3 — skippers always skip taste profile
        if step == 'complete_taste_profile' and acc['_skips_taste']:
            base = 0.0
        # H1 — never_planned always skips meal plan creation
        if step == 'create_first_meal_plan' and acc['_never_planned']:
            base = 0.0
        # family plans invite more
        if step == 'invite_family_member' and acc['plan_tier'] == 'family':
            base = 0.70
        # free plans complete grocery list less (blocked)
        if step == 'generate_grocery_list' and acc['plan_tier'] == 'free':
            base *= 0.50

        completed = random.random() < base
        ts = ''
        if completed:
            day_off = random.randint(0, min(14, age))
            ts = (start_d + timedelta(days=day_off)).strftime('%Y-%m-%d %H:%M:%S')

        onboarding_rows.append({'account_id': acc['account_id'], 'step_name': step,
                                'completed': completed, 'completed_at': ts})

with open('data/mealtime_onboarding.csv', 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=['account_id','step_name','completed','completed_at'])
    w.writeheader()
    w.writerows(onboarding_rows)
print(f"  {len(onboarding_rows)} onboarding rows")

# --------------------------------------------------
# 5. Feature events
# --------------------------------------------------
print("Generating feature events...")
events = []
evt_id = 0
for acc in accounts:
    acc_users = user_by_account.get(acc['account_id'], [])
    if not acc_users:
        continue
    plan = acc['plan_tier']
    n_events = random.randint(10, 55) if (acc['_never_planned'] or acc['churned_90d']) else random.randint(55, 200)
    age = acc['account_age_days']
    start_ts = SNAPSHOT_DATE - timedelta(days=age)

    for _ in range(n_events):
        feat = random.choices(FEATURES, FEATURE_W)[0]
        user_id = random.choice(acc_users)

        # free users get blocked on gated features
        if feat in GATED_FREE and plan == 'free':
            event_type = wc(['blocked','abandoned'], [0.80, 0.20])
        elif acc['churned_90d']:
            event_type = wc(['used','abandoned'], [0.52, 0.48])
        else:
            event_type = wc(['used','abandoned'], [0.86, 0.14])

        meal_cat = wc(MEAL_CATEGORIES, MEAL_W) if feat in ('meal_plan_builder','meal_swap','recipe_browse') else ''

        day_off = random.randint(0, age)
        ts = (start_ts + timedelta(days=day_off)).replace(
            hour=random.randint(6,22), minute=random.randint(0,59),
            second=random.randint(0,59))

        events.append({'event_id': f"evt_{evt_id:08d}", 'user_id': user_id,
                       'account_id': acc['account_id'], 'feature_name': feat,
                       'meal_category': meal_cat, 'event_type': event_type,
                       'timestamp': ts.strftime('%Y-%m-%d %H:%M:%S')})
        evt_id += 1

with open('data/mealtime_feature_events.csv', 'w', newline='') as f:
    w = csv.DictWriter(f, fieldnames=['event_id','user_id','account_id','feature_name',
                                      'meal_category','event_type','timestamp'])
    w.writeheader()
    w.writerows(events)
print(f"  {len(events)} feature events")
print("\nDone.")
