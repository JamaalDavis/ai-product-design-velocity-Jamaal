# Mealtime — Product Context Statement

> This document is provided to AI models analysing Mealtime product data. It gives the model the product context needed to interpret data signals as product problems, not just data problems. Read this before analysing any Mealtime dataset.

---

## What Mealtime Is

Mealtime is a recipe and meal planning app built for home cooks who want to eat better without spending hours deciding what to cook. It lets users discover recipes matched to their taste profile, plan their week's meals in a drag-and-drop calendar, and automatically generate a consolidated grocery list — all in one place.

**The core job-to-be-done:** take the daily cognitive load of "what's for dinner?" off the user's plate, and turn healthy eating intentions into a repeatable weekly habit.

---

## Who It's For

**Primary user:** a health-conscious adult — typically 25–45 years old — who wants to eat better, reduce food waste, and spend less time thinking about meals. They're not a chef. They know roughly what they like, but struggle to turn that into a consistent, varied weekly plan.

**Secondary users:** family members on a shared Family plan — partners, older children — who contribute to or follow the household's shared meal plan.

**Typical sign-up trigger:** a life event that prompts a fresh start around food (new year, new fitness goal, new household, dietary change) or a referral from someone already using the app.

---

## The Five Core Features

| Feature | What it does | Plan |
|---|---|---|
| `meal_plan_builder` | Drag-and-drop weekly meal planner — assign recipes to breakfast, lunch, dinner, snack, and dessert slots | All tiers |
| `recipe_browse` | Browse and search Mealtime's recipe library filtered by cuisine, dietary preference, prep time, and ingredients | All tiers |
| `grocery_sync` | Aggregates ingredients from the week's meal plan into a shared, live grocery list (syncs to iOS Reminders, Android Tasks, or the in-app list) | Premium & Family |
| `collection_create` | Save recipes into named personal collections (e.g. "Quick Weeknights", "Date Night") for quick re-use | Premium & Family |
| `recipe_import` | Import a recipe from any URL and add it to Mealtime's library | Premium & Family |
| `dietary_filter` | Filter the recipe library by dietary preference (vegan, keto, gluten-free, dairy-free, etc.) | All tiers |
| `nutritional_info` | View per-recipe macro and calorie breakdown | All tiers |
| `meal_swap` | Swap a planned meal for an alternative that matches the same dietary profile and prep time | All tiers |

---

## Pricing Tiers

| Tier | Users | Key feature access | Price |
|---|---|---|---|
| `free` | 1 | Recipe browse, meal plan builder, dietary filter, nutritional info, meal swap. 5 saved recipes max. | $0 |
| `premium` | 1 | All features. Unlimited saves. Grocery sync, collections, recipe import. | $7.99/month or $79.99/year |
| `family` | Up to 5 | All premium features. Shared meal plan, collaborative grocery list, individual taste profiles per member. | $12.99/month or $129.99/year |

A `blocked` event in the feature_events table means a free-tier user attempted to use a premium-gated feature.

---

## What a Healthy, Retained Subscriber Looks Like

A retained Premium or Family subscriber at month 3+ typically has **all** of the following:

- Using the **meal plan builder at least 3 weeks per month**
- **Cooking (logging) at least 10 recipes per month**
- **Completing their taste profile** during onboarding
- On Family plans: **at least 2 active users** in the household

Accounts that browse recipes heavily but never create a meal plan have not yet formed the core habit. These are the **highest churn risk** regardless of plan tier — they're using Mealtime as a recipe catalogue, not a planning tool.

---

## What Good Onboarding Looks Like

Mealtime's onboarding has 5 steps. Accounts that complete all 5 within 14 days activate at a significantly higher rate.

| Step | Description |
|---|---|
| `complete_taste_profile` | User answers a short questionnaire about dietary preferences, allergies, cuisine likes, and cooking time budget |
| `save_first_recipe` | User saves their first recipe to their library |
| `create_first_meal_plan` | User assigns at least one recipe to a day in the meal plan calendar |
| `generate_grocery_list` | User generates a grocery list from their meal plan (or attempts to — blocked for free tier) |
| `invite_family_member` | Primary user invites at least one other household member (Family plan only; tracked but not mandatory for other tiers) |

The most commonly skipped step is `complete_taste_profile`. Skipping it means recipe recommendations are generic, the user sees meals that don't match their preferences, and they disengage before experiencing the product's core value.

---

## Known Friction Points

- **Taste profile skippers see the wrong recipes.** Without a completed taste profile, the recommendation engine surfaces generic popular recipes rather than personalised matches. Users who skip see low relevance, don't save or cook anything, and disengage within 2 weeks.
- **Recipe hoarders are not active users.** A user who saves 50 recipes but never creates a meal plan has not formed a habit — they're treating Mealtime like Pinterest. These users churn silently: they stop opening the app rather than cancelling loudly.
- **Grocery sync is the stickiest feature but gated from free.** Users who actively use grocery sync almost never churn. Free users who discover this feature and hit the paywall either upgrade (a minority) or disengage.
- **Billing tickets in month 1 are an expectations mismatch signal.** Users who contact support about billing in their first month typically misunderstood what was included in the free tier or didn't realise a trial had ended. These users churn at 2x+ the rate of users who contact support about product or account issues.
- **Family plans with only one active user lose their stickiness.** The Family plan's value proposition — shared meal planning, collaborative grocery list — only delivers if multiple household members are active. Single-user Family accounts behave more like solo Premium accounts and are at elevated churn risk.

---

## How to Use This Document

When analysing Mealtime data, use this context to:

1. **Interpret behavioural signals as habit signals** — don't just describe what the data shows, explain what it means for whether the user is forming or failing to form the core meal planning habit
2. **Propose interventions that are specific** — reference actual features, onboarding steps, and plan tiers when suggesting mechanisms
3. **Segment before concluding** — aggregate patterns in Mealtime data frequently mask segment-specific effects. Always check whether a signal holds across user segments, device platforms, and acquisition channels before drawing conclusions
4. **Distinguish intent from habit** — saving recipes is intent; cooking them is habit. Look for usage patterns that cross the intent-to-habit threshold when evaluating retention risk
