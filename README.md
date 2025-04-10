# JSLightGallery & Vite  & GitHub Pages

[JSLightGallery](https://www.lightgalleryjs.com/) s webserverem Vite.

Procvičení nasazení na **GitHub Pages**, kde je v branch

+ main = zdrojový kód projektu
+ gh-pages = build obsah dist s aktivní GitHub Pages

=== [náhled webu](https://stepanhalir.github.io/JSLightGallery/) ===

&nbsp;

## Postup

### Založení Vite Vanilla JS projektu

```
npm create vite@latest js-lightgallery
```

&nbsp;

### Instalace balíčku LightGallery

Postup dle [dokumentace JSLightGallery](https://github.com/sachinchoolur/lightGallery?tab=readme-ov-file#installation)

```
npm install lightgallery
```

&nbsp;

### Vložení obsahu galerie

#### index.html

Dokument _index.html_ přehrajeme HTML obsahem galerie.

```
<main id="gallery" class="thumbnails">
  <figure class="info ratio3to2">
      <a href="images/big/Sk2014_01.JPG">
        <img src="images/Sk2014_01.JPG" alt="Kanál v Amsterodamu">
        <div>Kanál v Amsterodamu</div>
      </a>
    </figure>
    ...
</main>
```

Před zakončením <body> naimportujeme modul _main.js_

```
<script type="module" src="/src/main.js"></script>
```

#### main.js

Do souboru _main.js_ uvnitř adresáře _src_ vložíme import a konfiguraci LightGallery, viz [dokumentace JSLightGallery](https://github.com/sachinchoolur/lightGallery?tab=readme-ov-file#installation)

```
import lightgallery from 'lightgallery';
import	"./css/main.css"
import "./css/grid-responsive.css";
import "./css/infopoint.css";
import 'lightgallery/css/lightgallery-bundle.min.css';

import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgPager from 'lightgallery/plugins/pager';

lightgallery(document.querySelector('.thumbnails'),
{
  selector: '.thumbnails a',
  plugins: [lgAutoplay, lgZoom, lgThumbnail, lgPager],
  slideShowAutoplay: true,
  slideShowInterval: 2000
});
```


#### multimediální soubory

Do adresáře _public_ vložíme statický obsah –  v tomto případě **fotografie načítané galerií**.

&nbsp;

### Build projektu

Spustíme build proces
```
npm run build
```
čímž vznikne adresář _/dist_ s obsahem aplikace připravený k nasazení

&nbsp;

### Deploy GitHub Pages

1. Založíme repozitář na GitHub.
1. Do repozitáře do branch **main** pushneme veškerý obsah (zdrojový kód) projektu.
1. Nainstalujeme modul GitHub Pages, který bude součástí _devDependencies_ unvnitř _package.json_
```
npm install gh-pages --save-dev
```
1. V _package.json_ do větve _"Scripts"_ doplníme klíč **deploy**
```
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "vite build --base=/nazev-vaseho-repozitare/ && gh-pages -d dist"
  },
```
a to s hodnotou
```
"vite build --base=/nazev-vaseho-repozitare/ && gh-pages -d dist"
```

+ **vite build**
  - Spustí build Vite projektu do složky _/dist_.
+ **--base=/nazev-vaseho-repozitare/**
  - Určuje základní URL cestu, která je potřeba pro správné načítání souborů na GitHub Pages (kde je web dostupný pod https://vas-username.github.io/nazev-vaseho-repozitare/)
+ **gh-pages -d dist**
  - Nasadí obsah složky dist na gh-pages větev v GitHub repozitáři. Díky tomu se web zobrazí na GitHub Pages.
   
