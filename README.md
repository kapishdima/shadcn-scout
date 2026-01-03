# shadcn/scout

![shadcn/scout](public/hero.png)

Stay up to date with **shadcn registries** — with **trusted registry tracking**, **commit-level diffs**, **MCP-powered safe upgrades**, **health signals**, and **GitHub PR automation**.

> shadcn/rss started as “RSS updates for registries”.  
> Now it’s a developer tool that helps you keep components from multiple registries **current without losing your local edits**.

---

## Why

Using multiple registries is awesome… until you ask:

- “Is our `Button` still up to date?”
- “What exactly changed upstream?”
- “Will updating overwrite our customizations?”
- “Is this registry even maintained?”
- “Who has time to manually migrate 12 components?”

shadcn/rss answers those questions with **global tracking + diffs + automation**.

---

## What it does

### 1) Updates for **ALL shadcn trusted registries**

No more “registry authors must set up RSS / tokens / links”.

shadcn/rss automatically tracks registries from **shadcn/directory** and ingests updates across the ecosystem.

### 2) File-level diffs between registry revisions

We fetch commits and compute a **diff per component file**, so you can see _exactly_ what changed.

### 3) MCP (AI agent upgrades without losing your edits)

Because we know what changed upstream, we can instruct your AI agent (Cursor / Claude / etc.) to **upgrade a component while preserving your local modifications**.

Example workflow:

- “Update `button` to the latest trusted revision”
- Keep your tweaks (styles, variants, added props, etc.)
- Get an explanation of what changed and why

### 4) Registry Health signals

There are many registries. Not all stay healthy.

We continuously evaluate registries for:

- availability
- schema validity
- integrity (expected files exist)
- suspicious changes (optional / future)

### 5) GitHub automation (PRs)

Connect a GitHub repo, and when a registry you use updates:

- shadcn/rss opens a **pull request**
- you only need to **review and merge**
