# link-to-bug

A small reproduction of a bug with `link-to` from Ember 3.10+. (Uses Ember 3.15 w/Glimmer component for convenience, but that doesn't matter for this bug.)

To reproduce the error, `yarn serve` and visit `localhost:4200`. You will see an error in your console:

> TypeError: setting getter-only property "routeName"
