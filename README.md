# Frontend Mentor - Huddle landing page with curved sections solution

This is a solution to the [Huddle landing page with curved sections challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshots/screenshot1.png)
![](./screenshots/screenshot2.png)


### Links

- Solution URL: [Solution](https://github.com/andyjv1/Huddle-Landing-Page-With-Curved-Sections-Master-.git)
- Live Site URL: [Live]([https://your-live-site-url.com](https://rad-twilight-0322c7.netlify.app/))

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- React



### What I learned

This project is a great frontend project. I learned a lot in this project. First i learn how to use <picture></picture> for Responsive Images. I also learn how to use filter to change the color of svg element. Finally, i leaned how to use ::placeholder and :focus for the error handle portion.

```html
 <picture>
    <source srcset={bottomdesktop2}
        media="(min-width: 376px)" />
    <source srcset={bottommobile2} />
    <img src={bttommobile2} alt="" />
  </picture>
```
```css
.footercont svg:nth-of-type(1):hover {
  filter: invert(66%) sepia(78%) saturate(7171%) hue-rotate(202deg)
    brightness(98%) contrast(94%);
}
::placeholder {
  color: white;
}

input:focus::placeholder {
  color: #00252e;
}

input:focus {
  outline: none;
}
```
```js
    const validateEmail = (mail) => {
        setEmail(mail)
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            setEmailValidation(true)
        } else {
            setEmailValidation(false)
        }
    }
```


### Useful resources

- [filter](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter) - It helped me learn how to use filter to change the color of svg element when we hover over them.
- [How to Use HTML5 “picture”, “srcset”, and “sizes” for Responsive Images](https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-use-html5-picture-for-responsive-images--cms-21015) - It helped me learn how to use picture for Responsive Images when we change between mobile and desktop screens.
- [:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) - It helped me learn how to use focus to change the css when the input is focused.

## Author

- Frontend Mentor - [@andyjv1](https://www.frontendmentor.io/profile/andyjv1)

