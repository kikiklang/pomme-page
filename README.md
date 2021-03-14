<p align="center">
  <img width="100px" src="./assets/icons/logo/logo.svg">
</p>

<div align="center">
    <h1>Pomme Page</h1>
    <b>big buttons with easy click startpage for a browser</b>
</div>

<p align="center">
  <img width="700px"  src="./assets/images/screenshot.png">
</p>

<p align="center">
  <img height="330px"  src="./assets/images/screenshot2.png">
  <img height="330px"  src="./assets/images/screenshot3.png">
</p>

## Index
- [Pomme Page](#)
  - [Features](#features)
  - [Built With](#Built-with)
  - [Getting Started](#Getting-Started)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Modules](#Modules)
  - [Customization](#Customization)
    - [Layout](#Layout)
    - [Links](#links)
    - [Modules](#Modules)
    - [Colors](#Colors)
  - [Deploying](#Deploying)
  - [Contribution](#Contribution)
  - [Licence](#Licence)

## Features:
- **theming** Custom colors with css variables.
- **Responsive** Unpredictive layout thanks to CSS grid :)
- **Modules** for informations other than links.

## Built with
- [Parcel](https://parceljs.org/) Blazing fast, zero configuration web application bundler
- [Pug](https://pugjs.org/api/getting-started.html) Pug is a template engine for Node and for the browser. It compiles to HTML and has a simplified syntax.

## Getting Started
To get a local copy up and running, you will need:

- [git](https://git-scm.com/downloads)
- [nodejs](https://nodejs.org/en/)- Node.js® is a JavaScript runtime that will help running javascript code   outside your browser

## Installation
1. Once nodeJs is installed, install Parcel globally on your machine.
    ```sh
    npm install -g parcel-bundler
    ```
2. Paste this command in your terminal to clone the repository inside the folder of your choice 
    ```sh
    git clone git@github.com:kikiklang/pomme-page.git
    ```
3. Still in your terminal, move into pomme-page freshly created folder and run this command to install all project dependencies
    ```sh
    npm install
    ```
4. To finish the installation, you will have to provide a `.env` file where you can place your configuration variables like API keys. Put this file at the root of pomme-page folder. see example with the `.env.example` file.

## Usage
 You can now open the project in your IDE and run this project locally
  ```sh
  npm run dev
  ```

  To bundle your code - ready to ship, cleaned and lightweight
  ```sh
  npm run build
  ```

  To test your production build locally
  ```sh
  npm run serve
  ```

  To delete development, build and cache folders
  ```sh
  npm run clean
  ```

  To prettify and fix your code
  ```sh
  npm run format
  ```

## Modules
Pomme Page use modules to display informations other than links. Currently, there is: 
- **clock** time & date
- **search** use duckduckgo or google search engines
- **binance** past and current crypto currencies data
- **openweather** current weather (needs API key: [openweather](https://openweathermap.org/unsplash)) 
- **unsplash** random image display (needs API key: [unsplash](https://unsplash.com/developers))
- **stormglass** sea condition (needs API key: [stormglass](https://stormglass.io/)) [free up to 50 requests per day]

## Customization

### Layout
Layout is made with CSS grid, you can simply move things around in `src/index.pug` file

### Links
Links images work in svg format. To add a link, go to `src/index.pug` and make a myrtille. It's a pug function that takes 3 parameters:
- domain
- svg viewBox
- svg path

### Modules
To remove a module, you have to delete the corresponding folder in src and then remove all imports found in the 3 index files (pug, css, js).

### Colors
You can make your theme with the css variables found in `index.css`

## Contribution
Please feel free to give what you have in this project if you like it and have some time to spare.

## Deploying
After the build process, you'll find a `dist` folder that parcel just created. We still have API Keys in the code. In my case, i deploy this behind a caddy reverse proxy and limit/filter access to this static files only from my personal computer IP.

## License

Distributed under the MIT License. See `LICENSE` for more information.
