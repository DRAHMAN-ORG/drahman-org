# Security Policy

## Supported Versions

This repository does not publish releases: it has no tags and no versioned
branches. The supported state is the current `main` branch. Security fixes are
applied there; older commits are not maintained.

| Branch | Supported          |
| ------ | ------------------ |
| `main` | :white_check_mark: |

## Scope

Drahmán is a static site built with Jekyll. The code maintained in this
repository is:

- Templates, includes and content pages — `_layouts/`, `_includes/`, `_pages/`,
  `_personajes/`
- Stylesheets — `_sass/`
- Client-side JavaScript — `assets/js/`
- Build configuration — `_config.yml`, `_config_production.yml`, `Gemfile`

In scope: vulnerabilities in that code, in the build, or in data committed to
the repository (for example, an exposed credential or personal data).

Out of scope: vulnerabilities in Jekyll itself, in its plugins, or in
third-party services embedded in the site — including the Google Forms iframe
used for subscriptions. Report those to the upstream project or service.

## Reporting a Vulnerability

Report privately through GitHub's private vulnerability reporting, from the
repository's **Security** tab:

https://github.com/DRAHMAN-ORG/drahman-org/security/advisories/new

Do not open a public issue, or comment on a public thread, about a security
problem: that exposes it before it is fixed.

A useful report says what the issue is, where it lives (file or URL), how to
reproduce it, and the impact you expect. A report without a full reproduction
is still welcome.

## What to expect

This repository is maintained by a single maintainer on a best-effort basis.

- **Acknowledgement** within 7 days of the report.
- **Assessment** — accepted, more information needed, or declined — within 14
  days.
- **Fix** — the timeline follows severity and effort; accepted reports get a
  target date and an update when the status changes.

## Disclosure

- Accepted reports are handled in a **private** GitHub security advisory while
  a fix is prepared.
- **Public disclosure happens when a fix is available**, in a published
  advisory that credits the reporter unless they prefer otherwise.
- If no fix is ready **90 days after the assessment**, the reporter may
  disclose publicly; we coordinate the timing instead of blocking it.
- If a report is declined as out of scope, we say so and explain why, and the
  reporter is free to disclose from that point.
