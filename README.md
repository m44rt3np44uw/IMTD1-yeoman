# IMTD1-portfolio

Beste Robbert Winkel,

Hier volgt een kleine toelichting hoe de opgeleverde zip in elkaar zit. In de zip zijn 3 mappen te vinden. De drie mappen worden hieronder uitgelegd.

Ik hoop dat onderstaande informatie voldoende is. Zo niet, dan kunt u mijn altijd mailen.

Met vriendelijke groet,

Maarten Paauw
s1094220

## Mappenstructuur

### Opdrachten

In de zip is er een map te vinden met de naam opdrachten. In deze map zijn alle gemaakte opdrachten te vinden.

- De opdracht zelf als PNG.
- De geschreven essay als PDF.
- De geschreven en ontvangen peer review als PDF.
- Extra afbeeldingen als PNG (mockup).

 De map ziet er als volgt uit.

```shell
├── opdracht-1
│   ├── essay
│   │   └── opdracht-1-essay.pdf
│   ├── images
│   │   └── opdracht-1-mockup.png
│   ├── opdracht
│   │   └── opdracht-1.png
│   └── peer-review
│       ├── inkomend
│       │   └── opdracht-1-peer-review-inkomend.pdf
│       └── uitgaand
│           └── opdracht-1-peer-review-uitgaand.pdf
├── opdracht-2
│   ├── essay
│   │   └── opdracht-2-essay.pdf
│   ├── images
│   │   └── opdracht-2-mockup.png
│   ├── opdracht
│   │   └── opdracht-2.png
│   └── peer-review
│       ├── inkomend
│       │   ├── opdracht-2-peer-review-inkomend-gerson.pdf
│       │   └── opdracht-2-peer-review-inkomend-zowie.pdf
│       └── uitgaand
│           └── opdracht-2-peer-review-uitgaand.pdf
├── opdracht-3
│   ├── essay
│   │   └── opdracht-3-essay.pdf
│   ├── images
│   │   └── opdracht-3-mockup.png
│   ├── opdracht
│   │   └── opdracht-3.png
│   └── peer-review
│       ├── inkomend
│       │   └── opdracht-3-peer-review-inkomend.pdf
│       └── uitgaand
│           └── opdracht-3-peer-review-uitgaand.pdf
└── opdracht-4
    ├── essay
    │   └── opdracht-4-essay.pdf
    ├── images
    │   ├── opdracht-4-slide-1.png
    │   ├── opdracht-4-slide-2.png
    │   ├── opdracht-4-slide-3.png
    │   ├── opdracht-4-slide-4.png
    │   ├── opdracht-4-slide-5.png
    │   └── opdracht-4-slide-6.png
    └── opdracht
        └── opdracht-4.pdf
```

### Porfolio (eindopdracht)

In deze map is mijn eindopdracht te vinden. Dit is een gebouwde versie. Dit betekent dat alle JS, CSS en HTML tot een bestand zijn gevoegd en geminimaliseerd zodat de laadtijd sneller is. Ook deze map bevat de map 'opdrachten' zodat er op de portfolio website naar toe gelinkt kan worden. 

De map ziet er alsvolgt uit. 

```shell
├── 1.html
├── 2.html
├── 3.html
├── 4.html
├── CNAME
├── apple-touch-icon.png
├── favicon.ico
├── fonts
│   ├── fontawesome-webfont.eot
│   ├── fontawesome-webfont.svg
│   ├── fontawesome-webfont.ttf
│   ├── fontawesome-webfont.woff
│   ├── fontawesome-webfont.woff2
│   ├── glyphicons-halflings-regular.eot
│   ├── glyphicons-halflings-regular.svg
│   ├── glyphicons-halflings-regular.ttf
│   ├── glyphicons-halflings-regular.woff
│   └── glyphicons-halflings-regular.woff2
├── images
│   └── ik.jpeg
├── index.html
├── opdrachten
│   ├── opdracht-1
│   │   ├── essay
│   │   │   └── opdracht-1-essay.pdf
│   │   ├── images
│   │   │   └── opdracht-1-mockup.png
│   │   ├── opdracht
│   │   │   └── opdracht-1.png
│   │   └── peer-review
│   │       ├── inkomend
│   │       │   └── opdracht-1-peer-review-inkomend.pdf
│   │       └── uitgaand
│   │           └── opdracht-1-peer-review-uitgaand.pdf
│   ├── opdracht-2
│   │   ├── essay
│   │   │   └── opdracht-2-essay.pdf
│   │   ├── images
│   │   │   └── opdracht-2-mockup.png
│   │   ├── opdracht
│   │   │   └── opdracht-2.png
│   │   └── peer-review
│   │       ├── inkomend
│   │       │   ├── opdracht-2-peer-review-inkomend-gerson.pdf
│   │       │   └── opdracht-2-peer-review-inkomend-zowie.pdf
│   │       └── uitgaand
│   │           └── opdracht-2-peer-review-uitgaand.pdf
│   ├── opdracht-3
│   │   ├── essay
│   │   │   └── opdracht-3-essay.pdf
│   │   ├── images
│   │   │   └── opdracht-3-mockup.png
│   │   ├── opdracht
│   │   │   └── opdracht-3.png
│   │   └── peer-review
│   │       ├── inkomend
│   │       │   └── opdracht-3-peer-review-inkomend.pdf
│   │       └── uitgaand
│   │           └── opdracht-3-peer-review-uitgaand.pdf
│   └── opdracht-4
│       ├── essay
│       │   └── opdracht-4-essay.pdf
│       ├── images
│       │   ├── opdracht-4-slide-1.png
│       │   ├── opdracht-4-slide-2.png
│       │   ├── opdracht-4-slide-3.png
│       │   ├── opdracht-4-slide-4.png
│       │   ├── opdracht-4-slide-5.png
│       │   └── opdracht-4-slide-6.png
│       └── opdracht
│           └── opdracht-4.pdf
├── robots.txt
├── scripts
│   ├── detail-opdracht4.js
│   ├── detail.js
│   ├── homepage.js
│   ├── plugins.js
│   └── vendor.js
└── styles
    ├── detail.css
    ├── homepage.css
    └── vendor.css
```

### Development

Deze map is een kopie, met sommige bestanden en mappen weggelaten (zoals .git, .idea, enz.) die niet relevant zijn, van de omgeving waarin ik mijn portfolio heb gemaakt. Hier zijn alle JS, CSS en HTML bestanden niet samengevoegd en ook niet geminimaliseerd. In deze map wordt door middel van het Gulp commando `gulp build` de portfolio website gemaakt. Dit is de map portfolio. 

De map ziet er als volgt uit (sommige folders zijn hier niet in opgenomen, deze zijn niet relevant). 

```shell
├── README.md
├── app
│   ├── 1.html
│   ├── 2.html
│   ├── 3.html
│   ├── 4.html
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── fonts
│   ├── images
│   │   └── ik.jpeg
│   ├── index.html
│   ├── opdrachten
│   │   ├── opdracht-1
│   │   │   ├── essay
│   │   │   │   └── opdracht-1-essay.pdf
│   │   │   ├── images
│   │   │   │   └── opdracht-1-mockup.png
│   │   │   ├── opdracht
│   │   │   │   └── opdracht-1.png
│   │   │   └── peer-review
│   │   │       ├── inkomend
│   │   │       │   └── opdracht-1-peer-review-inkomend.pdf
│   │   │       └── uitgaand
│   │   │           └── opdracht-1-peer-review-uitgaand.pdf
│   │   ├── opdracht-2
│   │   │   ├── essay
│   │   │   │   └── opdracht-2-essay.pdf
│   │   │   ├── images
│   │   │   │   └── opdracht-2-mockup.png
│   │   │   ├── opdracht
│   │   │   │   └── opdracht-2.png
│   │   │   └── peer-review
│   │   │       ├── inkomend
│   │   │       │   ├── opdracht-2-peer-review-inkomend-gerson.pdf
│   │   │       │   └── opdracht-2-peer-review-inkomend-zowie.pdf
│   │   │       └── uitgaand
│   │   │           └── opdracht-2-peer-review-uitgaand.pdf
│   │   ├── opdracht-3
│   │   │   ├── essay
│   │   │   │   └── opdracht-3-essay.pdf
│   │   │   ├── images
│   │   │   │   └── opdracht-3-mockup.png
│   │   │   ├── opdracht
│   │   │   │   └── opdracht-3.png
│   │   │   └── peer-review
│   │   │       ├── inkomend
│   │   │       │   └── opdracht-3-peer-review-inkomend.pdf
│   │   │       └── uitgaand
│   │   │           └── opdracht-3-peer-review-uitgaand.pdf
│   │   └── opdracht-4
│   │       ├── essay
│   │       │   └── opdracht-4-essay.pdf
│   │       ├── images
│   │       │   ├── opdracht-4-slide-1.png
│   │       │   ├── opdracht-4-slide-2.png
│   │       │   ├── opdracht-4-slide-3.png
│   │       │   ├── opdracht-4-slide-4.png
│   │       │   ├── opdracht-4-slide-5.png
│   │       │   └── opdracht-4-slide-6.png
│   │       └── opdracht
│   │           └── opdracht-4.pdf
│   ├── robots.txt
│   ├── scripts
│   │   ├── main.js
│   │   └── opdracht4.js
│   └── styles
│       ├── _breadcrumb.scss
│       ├── _colors.scss
│       ├── _footer.scss
│       ├── _header.scss
│       ├── _me.scss
│       ├── _opdracht-detail.scss
│       ├── _opdracht.scss
│       ├── _photo.scss
│       ├── index.scss
│       ├── main.scss
│       └── opdracht-pagina.scss
├── bower.json
├── bower_components
│   ├── bootstrap-sass
│   ├── chai
│   ├── font-awesome
│   ├── jquery
│   └── mocha
├── gulpfile.js
├── node_modules
│   └── *
└── package.json
```
