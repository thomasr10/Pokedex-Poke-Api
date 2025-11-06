# TP - Pokédex avec l'API DOM et fetch

## 📋 Objectifs pédagogiques

Ce TP vous permettra de maîtriser :

- La manipulation du DOM avec JavaScript vanilla
- Les appels API asynchrones avec `fetch` et `async/await`
- La séparation entre structure HTML et logique JavaScript
- Les bonnes pratiques de développement web moderne

## 🎯 Contexte

Vous allez créer un Pokédex interactif qui affiche des informations sur les Pokémon en utilisant l'API publique [PokéAPI](https://pokeapi.co/).

## 🚀 Mise en place

1. Créez un projet
2. Ouvrez le dossier dans votre éditeur de code
3. Lancez un serveur local (ex: Live Server sur VS Code)
4. Ouvrez `index.html` dans votre navigateur

## 📝 Consignes

### Partie 1 : Structure HTML (5 points)

✅ **Objectif** : Créer la structure HTML de base dans `index.html`

Votre HTML doit contenir :

- Un conteneur principal `#app`
- Un élément de chargement `.loading` (affiché pendant les requêtes API)
- Un conteneur `#pokemonContainer` avec :
  - Une image `#pokemonImage`
  - Une div `#pokemonInfo` contenant :
    - Un paragraphe `#pokemonId` pour l'ID du Pokémon
    - Un paragraphe `#pokemonName` pour le nom
    - Une div `#pokemonTypes` pour les types
  - Une div `.button-container` avec deux boutons :
    - `#prevButton` (Précédent)
    - `#nextButton` (Suivant)

**Critères d'évaluation :**

- Structure sémantique et complète (2 pts)
- IDs et classes correctement nommés (2 pts)
- Code propre et bien indenté (1 pt)

### Partie 2 : Récupération des données (5 points)

✅ **Objectif** : Implémenter la fonction `getPokemon()` dans `index.js`

```javascript
async function getPokemon() {
  // À compléter
  // URL de base : https://pokeapi.co/api/v2/pokemon/{id}
  // Utiliser la variable currentPokemon pour l'ID
}
```

**Critères d'évaluation :**

- Utilisation correcte de `fetch` (2 pts)
- Utilisation de `async/await` (2 pts)
- Retour de l'objet JSON (1 pt)

### Partie 3 : Affichage des données (6 points)

✅ **Objectif** : Implémenter la fonction `renderPokemon(pokemon)`

Cette fonction doit mettre à jour le DOM avec les informations du Pokémon :

- Afficher l'image (sprite officiel ou par défaut)
- Afficher l'ID du Pokémon
- Afficher le nom (avec la première lettre en majuscule)
- Afficher tous les types du Pokémon (créer un élément par type)

**Critères d'évaluation :**

- Sélection correcte des éléments DOM (1 pt)
- Mise à jour de l'image avec `src` et `alt` (1 pt)
- Affichage de l'ID et du nom formaté (2 pts)
- Création dynamique des badges de type (2 pts)

### Partie 4 : Navigation (4 points)

✅ **Objectif** : Implémenter les fonctions de navigation

```javascript
function goPrev() {
  // À compléter
  // Empêcher de descendre en dessous de 1
}

function goNext() {
  // À compléter
  // Empêcher de dépasser 893 (nombre total de Pokémon)
}
```

**Critères d'évaluation :**

- Validation des limites (min: 1, max: 893) (2 pts)
- Mise à jour de `currentPokemon` et rechargement (2 pts)

## 🎨 Bonus (facultatif, +2 points)

- **CSS personnalisé** : Styliser l'application pour la rendre attractive
- **Gestion d'erreurs** : Afficher un message en cas d'erreur API

## 📚 Bonnes pratiques à respecter

### ✅ À FAIRE

- Utiliser `textContent` plutôt que `innerText` (plus performant)
- Créer la structure HTML statique dans le fichier HTML
- Utiliser JavaScript uniquement pour le contenu dynamique
- Sélectionner les éléments DOM une seule fois (en haut du fichier)
- Utiliser des noms de variables et fonctions explicites
- Commenter le code si nécessaire

### ❌ À ÉVITER

- Créer des éléments HTML statiques avec JavaScript
- Utiliser `innerHTML` pour du simple texte (préférer `textContent`)
- Faire des requêtes API inutiles
- Créer/détruire des éléments DOM à chaque changement

## 🔍 Ressources

- [Documentation PokéAPI](https://pokeapi.co/docs/v2)
- [MDN - Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
- [MDN - DOM](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model)
- [MDN - async/await](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function)

## 📊 Barème

| Partie                   | Points |
| ------------------------ | ------ |
| Structure HTML           | 5      |
| Récupération des données | 5      |
| Affichage des données    | 6      |
| Navigation               | 4      |
| **Total**                | **20** |
| Bonus                    | +2     |

## ✍️ Rendu

**Date limite :** [À définir]

**Format :**

- Archive ZIP contenant tous les fichiers du projet
- Nommage : `NOM_Prenom_Pokedex.zip`

**Modalités :**

- Travail individuel
- Code personnel (pas de copier-coller intégral)
- Clarté et propreté du code valorisées

---

Bon courage ! 🎓✨
