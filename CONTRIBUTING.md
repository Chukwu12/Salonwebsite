# Contributing Guide

Use this workflow to avoid pushing directly to `master`.

## Branch Workflow

1. Sync local `master`:

```bash
git checkout master
git pull origin master
```

2. Create a feature branch:

```bash
git checkout -b feat/short-description
```

Examples:
- `feat/update-homepage-hero`
- `fix/contact-form-spacing`
- `docs/readme-badges`

3. Make your changes and commit:

```bash
git add .
git commit -m "feat: short clear description"
```

4. Push your branch:

```bash
git push -u origin feat/short-description
```

5. Open a pull request on GitHub into `master`.

6. After merge, clean up locally:

```bash
git checkout master
git pull origin master
git branch -d feat/short-description
```

## Pull Request Expectations

- Keep PRs focused on one topic.
- Add screenshots for visual changes.
- Verify links and responsive layout.
- Update `README.md` when behavior or setup changes.
