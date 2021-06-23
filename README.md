<!-- ABOUT THE PROJECT -->
## About The Project

![Binance Wallpaper](https://github.com/maxi1kiano/binance/blob/master/screenshot.png?raw=true)

Este proyecto utiliza la api pública de [binance](https://academy.binance.com/en) para mostrar la cotización actual de BTCUSDT en fullscreen.

Como no encontre nada gratuito por internet decidí hacerlo por mi cuenta.

* Es una simple página en html

### Built With

Este proyecto fue desarrollado con las siguientes tecnologias:

* HTML
* CSS
* AngularJs
* jQuery


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

AngularJS version 1.8 en adelante.
* [AngularJs Offcial](https://angularjs.org/)
* [CDN JS](https://cdnjs.com/libraries/angular.js)

jQuery version 3.6 en adelante.
* [jQuery](https://jquery.com/download/)


### Installation

Clone the repo
   ```sh
   git clone https://github.com/maxi1kiano/binance_wallpaper.git
   ```

<!-- USAGE EXAMPLES -->
## Usage

```html
<!DOCTYPE html>
<html lang="es-AR" ng-app="App" ng-controller="AppCtrl as vm">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />  
  <title>{{ price | number:0 }} | BTCUSDT</title>
  <link rel="stylesheet" href="assets/css/styles.css" />  
  <link rel="stylesheet" href="assets/css/progress.css" />   
  <link rel="icon" type="image/x-icon" href="favicon.ico" />
  <script language="javascript" src="assets/js/angular.min.js"></script>  
  <script language="javascript" src="assets/js/jquery.min.js"></script>   
</head>
<body>
  <div class="progress-bar">
    <div id="in" class="progress-bar-in"></div>
  </div>

  <div id="container">		
    <div id="center-screen" class="center-screen">
	{{ price | number:0 }}
    </div>
  </div>	
</body>

<script language="javascript" src="assets/js/controller.js"></script>
<script language="javascript" src="assets/js/init.js"></script>
</html>
```
En Chrome y Firefox F11 fullscreen.

Para mas información, ingresar a la academia binance [Documentacion](https://academy.binance.com/es/articles/binance-api-series-pt-1-spot-trading-with-postman)

<!-- DOWNLOAD -->
## Download
- <a href="https://github.com/maxi1kiano/binance_wallpaper/releases">Releases</a>

<!-- CONTACT -->
## Contact

Maximiliano Nuñez - [@massi1kiano](https://twitter.com/massi1kiano) - mnuniez@gmail.com

Project Link: [https://github.com/maxi1kiano/binance_wallpaper](https://github.com/maxi1kiano/binance_wallpaper)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)