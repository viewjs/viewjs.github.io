---
template: main.jade
---

View.js is a primitive low-level view layer. The vision starts off from first-principles: Taking an idea and deconstructing it into it's most atomic pieces.

The current landscape for client-side "frameworks" is extremely fragmented, monolithic, inconsistent &mdash; broken.


## Monolithic

---

With massive projects like Rails, Ember, and Angular, we're faced with a world filled with monolithic software. They make it hard to reason about, hard to contribute, hard to understand &mdash; hard to cope with the complexity.

Above all that, there's minimal code reuse outside the original project. Some have started to separate common functionality out, but the majority is still stuck, completely tied to the original purpose.

While this might not be directly tied to monolithism, most frameworks have amounted to a large number of globals. Distribution is a likely cause, which is discussed further, but globals are a code-smell. They're hacky, unhealthy and hard to maintain.

> Have you ever gone into the Ember.js' source code? Pick a file; now can you explain where stuff is coming from?

## Fragmented

---

Angular has dirty-checking and it's HTML-based templates; Ember has it's run-loop and handlebars; React has it's virtual-dom and JSX.

When a new framework comes along, a new approach to rendering, what can we do? If you want it, you'll have to move your app to said framework. Why? Because *these frameworks are lock-ins*.