<div align="center">

# <a href="https://elegant-khorana-6044ac.netlify.app/" target="_blank" rel="noopener noreferrer">Bootstrap Portfolio</a>

</div>

<div align="center">

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/somoy99/gatsby-theme-bootstrap-portfolio.svg?color="brightgreen"&style=flat-square)](https://github.com/somoy99/gatsby-theme-bootstrap-portfolio)
[![GitHub forks](https://img.shields.io/github/forks/somoy99/gatsby-theme-bootstrap-portfolio.svg?color="success"&style=flat-square)](https://github.com/somoy99/gatsby-theme-bootstrap-portfolio)
[![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/somoy99/gatsby-theme-bootstrap-portfolio.svg?color="orange"&style=flat-square)]() 
<a href="https://coveralls.io/github/chartjs/Chart.js?branch=master"><img src="https://img.shields.io/coveralls/chartjs/Chart.js.svg?&style=flat-square&maxAge=600" alt="Coverage"></a>
<a href="https://github.com/chartjs/awesome"><img src="https://awesome.re/badge-flat2.svg?&style=flat-square" alt="Awesome"></a>
![license](https://img.shields.io/badge/license-MIT-blue.svg?&style=flat-square)
</div>

<div align="center">

![Product Gif](https://s6.gifyu.com/images/bootstrapportfolio.gif)

</div>

**Bootstrap Portfolio** - A Developer Portfolio Theme with Separate Work and Blog Section with MDX.
it's based on *react-bootstrap* and comes with all the goodies such as SEO and gatsby sharp.

## Demo
https://elegant-khorana-6044ac.netlify.app/

## Quick Start

```shell
mkdir my-site
cd my-site
yarn init
# install @somoykhan/gatsby-theme-bootstrap-portfolio and it's dependencies
yarn add gatsby react react-dom @somoykhan/gatsby-theme-bootstrap-portfolio
```

Then add the theme to your `gatsby-config.js`. We'll use the long form
here for education purposes.

```javascript
module.exports = {
  plugins: [
    {
      resolve: "@somoykhan/gatsby-theme-bootstrap-portfolio",
      options: {},
    },
  ],
}
```

That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```

To add your portfolio create mdx files in `'./work` folder inside your gatsby site root directly.
Required frontmatter example:
```s
---
title: Project Name
date: "2019-05-01T22:12:03.284Z"
description: "project description"
backgroundColor: "#white"
---
```

To add blog posts create mdx files in `./blog` folder inside your gatsby site root directly.
Required frontmatter example:
```s
---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Let's dive in to the era of hello world examples!"
slug: "slug"
---
```

## Doing more with this theme

Learn component shadowing if you want to modify further.

## Technical Support or Questions

If you have questions or need help integrating the theme please [contact me](mailto:k.somoykhan@gmail.com) instead of opening an issue.
