# Canvas Image Editor

**Version** - 1.0.0

**Author** - Abhay Rohit

**License** - \_Copyright (c) 2022

# Table of contents

1. [Quick Setup](#quick-setup)
   1. [Prerequisite](#qs1)
   2. [Install Packages](#qs2)
   3. [Development](#qs3)
2. [Packages Used](#packs-used)
   1. [Core Packages](#pu1)
   2. [Frontend Packages](#pu2)
   3. [VSCode Extensions](#pu3)
3. [Advanced Configuration](#ad-conf)
   1. [File Structure](#a-c1)
   2. [Languages](#a-c2)
   3. [Responsive Design](#a-c3)

## 1. Quick Setup <a name="quick-setup"></a>

### (I) Prerequisite <a name="qs1"></a>

Install Node.js 12 or Above (https://nodejs.org/en/)

Install Yarn Package Manager (https://classic.yarnpkg.com/lang/en/docs/install/)

### (II) Install Packages <a name="qs2"></a>

```bash
yarn
```

### (III) Development <a name="qs3"></a>

Deploy the app and start Webpack 5 Server:

```bash
yarn start
```

## 2. Packages used <a name="packs-used"></a>

### (I) Core dependencies <a name="pu1"></a>

- ReactJS (https://reactjs.org/)

- ReactDOM (https://reactjs.org/docs/react-dom.html)

### (II) Front-end dependencies <a name="pu1"></a>

- Sass (https://sass-lang.com/)

### (III) VS Code Extensions <a name="pu3"></a>

- Better Comments (https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments/)

- Color Highlight (https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight/)

- Import Cost (https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost/)

- Prettier Code Formatter (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode/)

## 3. Advanced configuration <a name="ad-conf"></a>

### (I) File structure <a name="a-c1"></a>

```

├── /node_modules/              # NodeJS Packages
├── /src/                       # Source Code
    ├── blocks                  # Full Page Reusable Components
    ├── components              # Functional Display Components
    ├── effects                 # SpecialFX and Animation Data
    ├── math                    # Javascript and Math Calculations
    ├── menu                    # Site Navigation Menu
    ├── pageData                # Dynamic Site Generation JSON
    ├── seo                     # NextJS Head and SEO Tags
    ├── tools                   # Utilities and Tools
    ├── /styles/                # SCSS styles
└── /public/                    # Static Public Directory
    ├── /icons/                 # SVG and other icons
    ├── /locales/               # JSON localizations strings
    ├── /static/                # Static files (fonts, images, videos, etc..)
    ├── manifest.json           # NextPWA Config
    ├── robots.txt              # Google Web Crawler Config
├── .babelrc                    # Babel config
├── .env                        # Environment variables
├── .eslintrc.json              # ESLint Config
├── .gitignore                  # Ignored Files for Github
├── jsconfig.json               # Absolute Import Paths
├── package.json                # Project meta and dependencies
├── README.md                   # Instructions and Usage
├── yarn.lock                   # Yarn Lockfile

```

### (II) Languages <a name="a-c2"></a>

All locales should be stored in `./src/locales/{LANG}/*.json`.

### (III) Responsive Design <a name="a-c3"></a>

Style Library Used [Sass preprocessor](https://sass-lang.com/).

By default entrypoint is [`./src/scss/main.scss`](styles/main.scss)

#### Media Query

Breakpoints :

| Device    |   Size   | Description        |
| :-------- | :------: | :----------------- |
| `phone`   | `361px`  | Phone Size         |
| `tablet`  | `767px`  | Tablet Size        |
| `crt`     | `1023px` | CRT Square Monitor |
| `laptop`  | `1280px` | Laptop Size        |
| `desktop` | `1600px` | Desktop Size       |
| `tv`      | `1920px` | 4K TV Size         |
| `split`   | `3840px` | Multiple Monitors  |

Usage in SASS File :

```javascript
@include media('<=phone') { content: "I'm Tiny Phone" } // Query for Devices Smaller Than a Phone
@include media('>phone', '<=tablet') { content: "I'm Average Phone"} // Device Between Phone and Tablet Size
@include media('>tablet', '<=crt') { content: "I'm Small Tablet"} // Between Tablet and CRT Monitor
@include media('>crt', '<=laptop') {content: "I'm Big Tablet and also CRT" } // Between CRT and Laptop Size
@include media('>laptop', '<=desktop') { content: "I'm Small Laptop"} // Between Laptop and Desktop Size
@include media('>desktop', '<=tv') {content: "I'm Small Desktop" } // Between Desktop and TV Size
@include media('>tv','<=split') { content: "I'm Large Desktop and Big TV" } // Greater Than TV but not as much as Split Monitor
@include media('>split') { content: "I'm 4x4 Gaming Setup" } // All Devices Larger than 4K are Covered
```

### (IV) SoundFX <a name="a-c4"></a>

Sound Library used is [HowlerJS](https://howlerjs.com/).

All Sound Effects are stored in [`public/static/sounds/`](public/static/sounds/)

### (V) JS <a name="a-c6"></a>

All javascript is processed with [webpack](https://webpack.js.org/) + [Babel](https://babeljs.io/).

Webpack config is stored in [`next.config.js`](next.config.js)

Babel config is stored in [`.babelrc`](.babelrc)

By default, entry point is [`pages/_app.js`](pages/_app.js)

- [Read webpack docs](https://webpack.js.org/concepts/).

- [Read Babel docs](https://babeljs.io/docs/en/).
