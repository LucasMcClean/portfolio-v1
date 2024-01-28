"use strict";

/* Credit to https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
   for this code snippet */
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
