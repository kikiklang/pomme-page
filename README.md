<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">pomme page</h1>
  <p align="center">
    A start page for a browser
    <br />
    <br />
    <br />
  </p>
</p>



<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



## About The Project

[![Pomme page Screen Shot]](./src/assets/images/screenshot.png)

I found a pretty cool [r/startpages](https://www.reddit.com/r/startpages/) that motivated me to make my own browser homepage. This project was also a good opportunity to test new stuff so it's probably over complicated for a simple homepage :).

The crypto chart is cool. the line of the graph represents the evolution of the value of the selected currency for the last 7 days (if I read correctly the binance API documentation).

### Built With

* [Parcel](https://parceljs.org/) Blazing fast, zero configuration web application bundler

* [apexcharts](https://apexcharts.com/) Modern & Interactive Open-source Charts

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

* git - [git](https://git-scm.com/downloads)
* Node - Node.js® is a JavaScript runtime that will help running javascript code outside your browser. download from here -> [nodejs.org](https://nodejs.org/en/)
* parcel - once you have installed node, use this command in a terminal to install this package globally on your machine
  ```sh
  npm install -g parcel-bundler
  ```

### Installation

1. Sign in and get a free API Key at [openweathermap](https://openweathermap.org/api).
2. Paste this command in your terminal to clone the repository inside the folder of your choice 
   ```sh
   git clone git@github.com:kikiklang/pomme-page.git
   ```
3. Still in your terminal, move into freshly copied repo and run this command to install all project dependencies
   ```sh
   npm install
   ```
4. You can now open the project in your IDE and go straight to src/js/weather.js to paste you openweather API key. ALso, add the city of your choice to the line above.
   ```JS
   const city = 'xxxxxxxxxxxxxx';
   const apikey = 'PASTE YOUR API KEY';
   ```
5. Now change city name in the template "src/html/weather.pug"
   ```html
    city-name your place
   ```


## Usage

To run this project locally and open the page at http://localhost:3000
```sh
  npm run dev
```

To bundle your code - ready to ship, cleaned and lightweight
```sh
  npm run build
```

To test locally your production build
```sh
  npm run serve
```

To delete development , build and cache folders
```sh
  npm run clean
```

To check and fix your errors in code
```sh
  npm run lint
```

To lint and prettify your code
```sh
  npm run format
```

## Customize

### Crypto chart
If you want to change currencies choice, head to "src/html/chart.pug" and simply change currencies symbols to desired ones. But always keep the first one with the type attribute to 'active'. I'm not sure how much you can fit in there until it overlap or break.

### Pomme
check "/src/html/index.pug" . simply type "pomme"  anywhere to add a decorative green square. :)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
