# Le Form

> _Le **form**, avec du css et du script peut être changer, c'est a dire sa couleur et la façon qu'elle réagit lorsque le boutton "envoyé" est appuyé._

<br>

## L'utilisation

<br>

Voici les fonctions des méthodes appliqués dans le _java-script_:

| Les méthodes       | Fonctions                                                                                                  |
| ------------------ | :--------------------------------------------------------------------------------------------------------- |
| `onSubmit`         | Si les champs sont valide, elle appelle la méthode showConfirmation                                        |
| `validate`         | Detecte si tous les champ requis du formulaire est remplis                                                 |
| `validateInput`    | Si les champs ne sont pas valide, on appelle la fonction "addError", s'il l'est, on appelle "remove Error" |
| `addError`         | Ajoute l'erreur                                                                                            |
| `removeError`      | Enleve l'erreur                                                                                            |
| `showConfirmation` | Montre que le formulaire à été envoyé                                                                      |

<br>

## Le html

> _Le Javascript ne fonctionnera pas sans des datas components dans le html._

<br>

| Les data-components     | Fonctions                                  |
| ----------------------- | :----------------------------------------- |
| `data-component="Form"` | Marque c'est où le Form pour le javascript |

<br>

### Où le mettre?

> _Au début du form:_

```html
<form action="" class="form" autocomplete="off" data-component="Form">
  <div class="form__body">
    <h2>Contactez-nous</h2>
    <p>Nous répondrons dans les plus bref délais!</p>
    ...
  </div>
</form>
```

<br>

## Ensuite, le css

> _Dans le js, .is-sent est utlisé pour montré le message de la fin._

```css
.form__body {
  .is-sent & {
    display: none;
  }
}

.form__confirmation {
  text-align: center;
  display: none;
  .is-sent & {
    display: block;
  }
}
```
