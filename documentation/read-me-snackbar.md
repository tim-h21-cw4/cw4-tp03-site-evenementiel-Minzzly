# Le Header

> _Le **snackbar** est utilisé pour ._

<br>

## L'utilisation

<br>

Voici les fonctions des méthodes appliqués dans le _java-script_:

| Les méthodes       | Fonctions                                                                              |
| ------------------ | :------------------------------------------------------------------------------------- |
| `snackbarDown`     | Commence avec le snack bar en bas pour ensuite partir le reste du code dans 2 secondes |
| `onScroll`         | Montre le snack bar quand l'utilisateur est en haut du site et le cache que il scroll  |
| `setSnackbarState` | ajoute les classes pour cacher et remontrer le snackbar                                |
| `fermerSnackbar`   | Ferme le snackbar quand le button est appuyé                                           |
| `checkCache`       | Cherche les cookies pour garder le snackbar fermer si le boutton a été appuyé          |

<br>

## Le html

> _Le Javascript ne fonctionnera pas sans des datas components dans le html._

<br>

| Les data-components         | Fonctions                                      |
| --------------------------- | :--------------------------------------------- |
| `data-component="Snackbar"` | Marque c'est où le Snackbar pour le javascript |

<br>

### Où le mettre?

> _Sur une balise html:_

```html
<div class="snackbar" data-component="Snackbar">
  <div class="wrapper">
    <p class="snackbar__text">
      Vous aimez cet évènement? <a href="pageContact.html">clicker ici!</a>
    </p>
    <svg class="icon icon--lg js-button">
      <use xlink:href="#icon-close"></use>
    </svg>
  </div>
</div>
```

### Les options Snackbar

<br>

Quatres **options** sont permit dans le `html` pour changer la façon que le `snackbar` marche:

| Les options                  | Fonctions                                                                           |
| ---------------------------- | :---------------------------------------------------------------------------------- |
| `data-snackbar-hide`         | Si le snackbar se cache ("true") ou non ("false")                                   |
| `data-snackbar-delay`        | Le delay avant que le snackbar se montre                                            |
| `data-snackbar-scroll-limit` | Mets une limit (px ou %) que l'utilisateur peut scroll avant que le header se cache |
| `data-id`                    | L'id du message pour ne pas qu'elle se montre quand l'utilisateur l'a fermer        |

<br>

```html
<div
  class="snackbar"
  data-component="Snackbar"
  data-snackbar-hide="true"
  data-snackbar-delay="2000"
  data-snackbar-scroll-limit="0.1"
  data-id="1"
>
  <div class="wrapper">
    <p class="snackbar__text">
      Vous aimez cet évènement? <a href="pageContact.html">clicker ici!</a>
    </p>
    <svg class="icon icon--lg js-button">
      <use xlink:href="#icon-close"></use>
    </svg>
  </div>
</div>
```

<br>

## Les classes

<br>

Le `header` est la composante qui a le plus de classes à ajouter dans `l'html` et que le `java-script` ajoute. Ces classes sont utilisé pour cacher le _`header`_, fonctionner le _`menu`_ et faire des _`animations`_.

|   Les classes   |      Utilité      |
| :-------------: | :---------------: |
| `snackbar-down` | Cache le snackbar |

<br>

## Les animations

<br>

> _Tous les animations est fait dans le css avec des modifications et des transitions:_

1. Lorsque `l'html` reçoit la classe `snackbar-down`, il y a une animations qui part pour ouvrir ou fermer le snackbar.

```css
.snackbar-down & {
  transform: translateY(100%);
}
```
