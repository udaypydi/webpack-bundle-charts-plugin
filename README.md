# Webpack Cli Bundle Analyzer

A webpack plugin for analysing the bundle sizes in terminal. Provides a graphical representation of the bundle sizes in command line. Just install and add the plugin to the webpack plugins and check out the magic!

`npm i --save webpack-bundle-analysis-cli`

## Examples:

1. Default Options
```
const WebpackBundleAnalyzer = require('webpack-bundle-analysis-cli');

plugins: [new WebpackBundleAnalyzer()]
```

2. Passing options to the plugin
```
const WebpackBundleAnalyzer = require('webpack-bundle-analysis-cli');

plugins: [new WebpackBundleAnalyzer({
            height: 20,
            width: 40,
            color: 'cyan'
            })]
```
## Output:

![](https://i.imgur.com/mT1LG2m.png)

## Limitations:

- Bundle Sizes are plotted in `bytes`.
- Only numberic legends support.
- Support for only `height`, `width` and `color` option.
