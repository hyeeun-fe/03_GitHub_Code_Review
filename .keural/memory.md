# Project Memory

## Git / GitHub connectivity
- `origin` points to a session-scoped code-cloud URL (`https://dev-api.keural.ai/auth/code-cloud/runner/sessions/<session-id>/git`), not a public GitHub URL.
- No GitHub connector is installed (only Notion); no `gh` CLI, no `GH_TOKEN`/`GITHUB_TOKEN`, no SSH keys, no credential helper.
- `git ls-remote origin` fails with "could not read Username" — remote reads require session auth that is not present at the moment of a manual call; `origin/main` ref is available from the session-setup fetch.
- The runtime pushes the session branch automatically when a turn completes; remote git commands (`git push/pull/fetch`) must not be run manually.
