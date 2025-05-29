---
layout: post
title:  "Career Debt: A Hidden Cost of Delivery-Obsessed Engineering Teams"
date:   2025-04-21 12:00:00 -0400
categories: engineering management
draft: false
---

In engineering, we’re used to the idea of technical debt. We accept that
sometimes we make tradeoffs for the sake of speed or simplicity - knowing we’re
taking on some future cost that we’ll need to pay down eventually. Currently,
we even bake this into out planning; we carve out 20% of our time for paying
down tech debt and I often wonder if this is enough. Still though, there’s some
acknowledgment that if you never address tech debt it eventually grinds
progress to a halt.

But there’s another kind of debt I’ve been thinking about lately - one that
doesn’t show up in code reviews or sprint retros. I’m calling it **career debt**.

Career debt is what builds up when engineers go too long without doing
something that excites them, challenges them or helps them grow. It’s what
happens when work is always safe, repetitive, or product-first with no room for
exploration or personal development.

Just like technical debt, career debt isn’t immediately catastrophic. In fact,
on paper, everything might look great: features shipped, bugs squashed,
deadlines met. But underneath the surface your top engineers are starting to
feel stuck. Bored. Maybe even resentful. Eventually, that shows up in ways
you can’t ignore: disengagement, low morale, slower iteration and attrition.

I had a recent example of this on my team. We needed to build a temporary event
queue to solve a specific business problem. The simplest, most pragmatic answer
was to use a Redis based solution - something we’ve used before, something the
team is fluent in and something that would’ve gotten us a working solution the
fastest.

But two of our strongest engineers had a different idea. They’d been wanting to
learn Kafka, and they saw this as a chance to dig in and build something real
with it.

Now, let’s be honest: Kafka is not the ideal tool for a simple event queue.
It’s complex. It’s operationally heavier. And it likely wasn’t the “right”
technical decision for the problem at hand. But here’s the thing - it wasn’t a
high-stakes, time-sensitive project. We had some breathing room. And more
importantly, this was a chance to invest in those engineers.

So I let them run with it. Build a Proof of Concept. Explore Kafka. Make the
case, do the integration, and see where it led.

Was it slower than going with Redis? Yeah. Did they eventually realize that
Kafka wasn’t the right fit for our use case? Absolutely. But the process? It was
worth every minute. They learned something new. They led the conversation. They
came to their own conclusion. And they felt trusted and empowered along the
way.

That’s what paying down career debt looks like.

It’s not about throwing out the roadmap or turning every sprint into a
hackathon. It’s about recognizing that if you only ever prioritize the
immediate product outcome, you risk slowly draining the long-term health of
your team.

So how do you manage career debt? You make space. Space for exploration. Space
for growth. Space for engineers to do something for no other reason than that
they’re curious or excited about it. That might look like:

* Spikes or POCs for non-roadmap technologies

* “Innovation” weeks where people pick their own projects

* Internal talks, mentorship, or time to write and share what they’ve learned

The best teams I’ve seen don’t just manage technical debt, they manage
motivation and engagement. They make sure their engineers don’t spend years
stuck in legacy code or support rotations without a clear path forward. They
understand that career satisfaction is a flywheel for delivery speed, not a
distraction from it.

So next time you’re in a planning meeting, think beyond just story points and
roadmap goals. Ask yourself: are we also allocating time to pay down career
debt? Because if you’re not—sooner or later - you’re going to feel it.
