# proof.md

A chronological log of things I've built to deeply understand software engineering. Each entry is code I've shipped — not just concepts I've studied.

---

## [today's date] — mini-lodash

Shipped my first real GitHub artifact: a utility library with 13 functions built from scratch. Combines closures (debounce, throttle, memoize), higher-order functions (map, filter, reduce, find, every, some), and recursion (flatten, deepClone).

- **Repo:** https://github.com/x/mini-lodash
- **Key learning:** reduce can implement almost any array transformation. The accumulator pattern is universal.
- **Gap I closed:** Reduce callbacks must return the accumulator on every iteration — got stuck on this multiple times before it clicked.
- **Build time:** First Saturday ship day