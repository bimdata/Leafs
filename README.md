# front-template

A template with rollup configurations for vuejs + eslint/prettier + tests (jest/cypress).

## Development

Build on change for development and serve:

```
npm run dev
```

## Tests

To run all tests:

```
npm run test
```

### Unit tests:

```
npm run test:unit
```

### E2e tests:

```
npm run build:prod
npm run test:e2e
```

To e2e test on development (Runs a build in production mode and opens a chromium window instead of a headless run):

```
npm run test:e2e-dev
```

## Lint:

```
npm run lint
```
