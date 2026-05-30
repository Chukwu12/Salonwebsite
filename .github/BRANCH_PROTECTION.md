# Branch Protection Setup

Use these GitHub settings to enforce pull requests on `master`.

## Recommended Rules For `master`

1. Open your repository settings:
   - GitHub -> Salonwebsite -> Settings -> Branches
2. Under **Branch protection rules**, click **Add rule**.
3. Branch name pattern: `master`
4. Enable these options:
   - Require a pull request before merging
   - Require approvals: 1
   - Dismiss stale pull request approvals when new commits are pushed
   - Require conversation resolution before merging
   - Require status checks to pass before merging (enable after CI is added)
   - Do not allow bypassing the above settings
5. Save changes.

## Optional: GitHub CLI / API

If you want to automate this later, you can apply branch protection with `gh api` using repository admin permissions.

## Why This Helps

- Prevents direct pushes to `master`
- Adds a review checkpoint before merge
- Reduces accidental regressions
