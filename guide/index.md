---
layout: guide
title: Something
---

View.js is a primitive low-level view layer. The vision starts off from first-principles: Taking an idea and deconstructing it into it's most atomic pieces.

The current landscape for client-side "frameworks" is extremely fragmented, monolithic, inconsistent &mdash; broken. We need to fix this.

## Modularize Everything

We need to move away from frameworks entirely. We need to move towards libraries. Libraries allow you to easily swap functionality by introducing an alternative module.

There's a problem with this approach. Things are too chaotic, non-composable, and fragmented. That's why you need to think in first-principles, and find an acceptable base.

View.js is just that. A single piece in the puzzle of the client-side (and server-side) landscape. View.js handles bringing the building block for reactive views and templates that are extremely extensible.

## Standardize

View.js uses [component(1)](https://github.com/component/component) as it's foundation. Component(1) is an opinionated client-side package manager and build tool. Unlike ad-hoc tools like Bower, where it leaves the building process to the end-user, component(1) handles this completely for you, because of it's process.

View.js is split up in several small, unix-like components. Each of these components can be used (*and tested*) in isolation. This allows an incredible amount of code re-use and flexibility.

## Distribution & Build System

Everything is run through component(1). This allows a *standard* and *consistent* experience.

Fetching a button UI view component is extremely easy.

```bash
component install ui/button --save
```

Wait, you can also build your app if you include another step:

```bash
component build
```

