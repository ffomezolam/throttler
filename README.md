Throttler
=========

Basic utility functions for throttling and debouncing high-frequency invocations.

+ `throttle(func, ms, [context])` Throttle invocation of function `func` to once every `ms` milliseconds with optional `context`.
+ `debounce(func, ms, [context])` Call function `func` only if it hasn't been called for `ms` milliseconds with optional `context`.
