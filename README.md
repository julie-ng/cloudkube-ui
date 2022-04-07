# cloudkube-ui

Shared CSS styles for various demos I build. 

And example of how to share stylesheets across multiple projects for a unified look - while keeping CSS in its own repo here.

## Local Development

For local development, we'll leverage [npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link)


#### Step 1 - Establish Link

First in _this repo_, run

```
npm link
```


#### Step 2 - Use Link

In the repo that should _integrate_ this project, install via local path, e.g.

```
npm install ./../cloudkube-ui
```

Then run 

```
npm link @cloudkube/ui
```

## Builds

Generates CSS file from all the Sass files.

### Dev Builds 

Poll regularly for changes and re-build. See [`webpack.dev.js`](./webpack.dev.js)

```
npm run dev
```

### Production Builds

Generates a minified CSS build. See [`webpack.config.js`](./webpack.config.js)

```
npm run build
```