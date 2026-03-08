# Syncing two GitHub repositories (`light` and `lightway`)

If both repositories should stay identical, you have two common options:

## Option 1: One-time sync (quickest)

Use this when you only need to copy current changes from `light` into `lightway` once.

```bash
# In your local clone of lightway
cd /path/to/lightway

# Add light as another remote (only once)
git remote add light https://github.com/<your-user>/light.git

# Get latest commits from both repos
git fetch origin
git fetch light

# Merge light's main branch into lightway's main branch
git checkout main
git merge light/main

# Resolve conflicts if prompted, then push
git push origin main
```

## Option 2: Keep both repos mirrored continuously

Use this when you want every push to `light` to automatically update `lightway`.

1. Keep `light` as the source repository.
2. In `light`, add a GitHub Action that pushes to `lightway` after each push to `main`.

Example workflow (`.github/workflows/mirror-to-lightway.yml` in `light`):

```yaml
name: Mirror to lightway

on:
  push:
    branches: [main]

jobs:
  mirror:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Push mirror to lightway
        run: |
          git remote add mirror https://x-access-token:${{ secrets.LIGHTWAY_PAT }}@github.com/<your-user>/lightway.git
          git push --force mirror main
```

### Required secret

Create a Personal Access Token that can push to `lightway`, then add it in `light` as:

- **Repository secret name:** `LIGHTWAY_PAT`

## Important notes

- If histories differ a lot, do a one-time manual sync first.
- `--force` in mirroring overwrites target history to match source exactly.
- If you *don't* want overwrite behavior, remove `--force` and handle merges manually.

## Recommended setup for you

Since you said you already made changes in `light` and want them reflected in `lightway`:

1. Do **Option 1 now** to sync immediately.
2. Add **Option 2** only if you want this to happen automatically in the future.
