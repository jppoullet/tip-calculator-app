# Frontend Mentor - Tip calculator app

![Design preview for the Tip calculator app coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/tip-calculator--kWxtoKIg3](https://www.frontendmentor.io/solutions/tip-calculator--kWxtoKIg3)
- Live Site URL: [https://jppoullet.github.io/tip-calculator-app/](https://jppoullet.github.io/tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Good project to practice using grid for the tip selection options as well as splitting the main container into 2 columns. I struggled a bit with the javascript and getting the total amounts calculated and re-updating as the bill and people inputs were changed (without getting NaN error). addeventlistener("input") solved updating as input field was updated.

```css
.people_input {
  background-image: url(images/icon-person.svg);
  background-repeat: no-repeat;
  background-position: 12px 9px;
}

grid-template-columns: repeat(2, minmax(100px, 1fr));
```

```js
billInput.addEventListener("input", billInputFunc);
parsefloat(number);
toFixed(number);
```
