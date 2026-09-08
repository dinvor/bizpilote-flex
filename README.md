# 📘 **Bizpilote Flex — Framework CSS Utility‑First 100% Flexbox**

Bizpilote Flex est un framework CSS **Utility‑First**, **moderne**, **rapide**, **responsive**, basé à 100% sur **Flexbox**, conçu pour créer des interfaces propres, cohérentes et performantes.

Il inclut :

- un système de **thèmes dynamiques** (Dark, Light, Neon, Warm, Custom)  
- des **utilitaires flex** puissants  
- une **grid simplifiée**  
- des **spacing utilities**  
- une **typographie complète**  
- des **couleurs**, **ombres**, **radius**, **display**, **overflow**, **position**, **animations**  
- des **composants prêts à l’emploi** (Hero, Cards, Pricing, Features, Gallery…)  
- un **Playground**, un **Builder Drag & Drop**, un **Générateur de classes & composants**  

Bizpilote Flex est pensé pour être **simple**, **lisible**, **rapide**, et **productif**.

---

## 🚀 **Installation**

### CDN (recommandé)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ton-user/bizpilote-flex/src/bizpilote-flex.min.css">
```

### Fichier local

```html
<link rel="stylesheet" href="src/bizpilote-flex.min.css">
```

---

## 🎨 **Thèmes disponibles**

Bizpilote Flex inclut 5 thèmes :

- `dark`
- `light`
- `neon`
- `warm`
- `custom`

### Activer un thème

```html
<html data-theme="dark">
```

### Changer de thème en JavaScript

```js
document.documentElement.setAttribute("data-theme", "neon");
```

---

## 🧩 **Utilitaires principaux**

### Flex

```html
flex
row / col
wrap / nowrap
j-start / j-center / j-end / j-between / j-around
a-start / a-center / a-end
gap-sm / gap-md / gap-lg
grow / shrink
basis-1-3 / basis-1-2 / basis-full
```

### Grid

```html
grid
grid-cols-1 / 2 / 3 / 4
gap-2 / gap-4 / gap-8 / gap-16
```

### Spacing

```html
m-0 / m-2 / m-4 / m-8 / m-16
p-0 / p-2 / p-4 / p-8 / p-16
```

### Typographie

```html
text-xs → text-4xl
font-thin → font-black
leading-none → leading-loose
tracking-tight → tracking-widest
```

### Couleurs

```html
text-white / text-black / text-gray / text-primary / text-light / text-dark
bg-white / bg-black / bg-gray / bg-primary / bg-light / bg-dark
```

### Images

```html
img-responsive
img-cover / img-contain / img-center
img-rounded-sm → img-rounded-full
img-shadow-sm → img-shadow-xl
img-blur / img-dark / img-light / img-gray / img-sepia / img-contrast
img-zoom
ratio-16-9 / ratio-4-3 / ratio-1-1
```

---

## 🧱 **Composants inclus**

Bizpilote Flex inclut des composants prêts à l’emploi :

- Hero  
- Navigation responsive  
- Cards  
- Pricing  
- Features  
- Gallery  
- CTA  
- Footer  
- Sections génériques  

---

## 🧪 **Playground interactif**

Un environnement complet pour tester Bizpilote Flex :

👉 `builder/playground-bizpilote-flex.html`

Fonctionnalités :

- éditeur HTML  
- éditeur CSS custom  
- preview live  
- snippets Hero / Card / Pricing / Features / Gallery  
- export HTML  
- reset  
- theme switch  

---

## 🧱 **Générateur de classes & composants**

👉 `builder/generator-bizpilote-flex.html`

Fonctionnalités :

- sélection des utilitaires  
- génération automatique de la string de classes  
- preview live  
- génération de composants complets (Hero, Card, Pricing, Feature, Section, Button, Container)  
- copie du code HTML  

---

## 🏗️ **Builder Drag & Drop (comme Webflow / Tailwind Play)**

👉 `builder/builder-bizpilote-flex.html`

Fonctionnalités :

- drag & drop de sections  
- Hero, Features, Pricing, FAQ, Testimonials, CTA, Footer  
- génération de pages complètes (Landing, Dashboard, Blog)  
- export HTML  
- theme switch  
- code viewer  

---

## 📚 **Documentation officielle**

👉 `docs/documentation-bizpilote-flex.html`

Inclut :

- installation  
- thèmes  
- utilitaires  
- composants  
- responsive  
- exemples  
- bonnes pratiques  

---

## 🏠 **Homepage officielle**

👉 `docs/homepage.html`

---

## 📦 **Structure du projet**

```
bizpilote-flex/
│
├── src/
│   ├── bizpilote-flex.css
│   ├── bizpilote-flex.min.css
│   └── components/
│
├── builder/
│   ├── builder-bizpilote-flex.html
│   ├── playground-bizpilote-flex.html
│   └── generator-bizpilote-flex.html
│
├── docs/
│   ├── documentation-bizpilote-flex.html
│   └── homepage.html
│
├── images/
│
├── README.md
├── LICENSE
└── package.json
```

---

## 🛣️ **Roadmap**

- [ ] Publication NPM  
- [ ] CDN officiel jsDelivr  
- [ ] Version SASS  
- [ ] Version React + Vue + Svelte  
- [ ] Builder en mode application (Electron / Web App)  
- [ ] API pour sauvegarder les pages générées  
- [ ] Templates premium Bizpilote Flex  

---

## 🤝 **Contribuer**

Pull requests bienvenues !

---

## 📄 **Licence**

MIT License

---
