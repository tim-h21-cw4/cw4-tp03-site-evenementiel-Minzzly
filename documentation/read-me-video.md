# Le Header

> _Les vidéos sont simplement des urls de Youtube intégré dans le site web avec un poster et un icone. Le javascript fait en sorte que les videos ne jouent pas en même temps_

<br>

## L'utilisation

<br>

Voici les fonctions des méthodes appliqués dans le _java-script_:

| Les méthodes | Fonctions                                                                                                 |
| ------------ | :-------------------------------------------------------------------------------------------------------- |
| `loadScript` | le script commence que lorsque les scripts des videos on fini de charger dans la page                     |
| `initPlayer` | Commence la video et quand elle et terminer, elle recommence du debut (cherche le lien de la video aussi) |
| `watch`      | Quand l'utilisateur scroll et que la video sort de l'écran, elle se met sur pause                         |
| `initAll`    | ajoute la classe is-video-ready quand les videos ont fini de charger                                      |
| `pauseAll`   | Faire pause au atres videos quand un autres et joué                                                       |

<br>

## Le html

> _Le Javascript ne fonctionnera pas sans des datas components dans le html._

<br>

| Les data-components      | Fonctions                                 |
| ------------------------ | :---------------------------------------- |
| `data-component="Video"` | La vidéo va être charger sur cette balise |
| `data-video-id`          | Le fini du lien de la video Youtube       |

<br>

### Où le mettre?

> _sur une balise html:_

```html
<div
  class="video video--full wrapper"
  data-component="Video"
  data-video-id="U7L-3VXAkSA"
  data-scrolly="FlipfromBottom"
>
  <div class="video__media js-video">
    <img
      class="js-poster"
      src="assets/images/poster/poster1.png"
      alt="Spectacle de musique"
    />
    <svg class="icon icon--xxl">
      <use xlink:href="#icon-play"></use>
    </svg>
  </div>
</div>
```

<br>

## Les classes

<br>

Le `header` est la composante qui a le plus de classes à ajouter dans `l'html` et que le `java-script` ajoute. Ces classes sont utilisé pour cacher le _`header`_, fonctionner le _`menu`_ et faire des _`animations`_.

| Les classes      | Balise HTML | Utilité        |
| ---------------- | :---------: | :------------- |
| `is-video-ready` |    HTML     | Ajoute l'icone |

<br>

## Les animations

<br>

> _Tous les animations sont fait dans le css avec des modifications et des transitions:_

1. Lorsque `l'html` reçoit la classe `is-video-ready`.

```css
.is-video-ready & {
  opacity: 1;
}
```
