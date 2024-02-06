"use strict";

// Array of project cards
const projects = document.querySelectorAll(".project");

/* !-----Call on load-----! */

// Assign each project an ID
for (let i = 0; i < projects.length; i++) {
  projects[i].setAttribute("id", `proj${i}`);
  projects[i].addEventListener(
    "click",
    function () {
      selectProject(projects[i].id);
    },
    false
  );
}

// Set a project as active on load
selectProject(projects[0].id);

/* Credit to https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
   for this code snippet */
window.addEventListener(
  "scroll",
  function () {
    document.body.style.setProperty(
      "--scroll",
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

/* !-----End of call on load-----! */

// Called on click to set project state to active
function selectProject(projId) {
  const selProj = document.getElementById(projId);
  console.log(selProj.classList);
  if (selProj.classList.contains("inactive")) {
    selProj.setAttribute("class", "project active");
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].classList.contains("active") && projects[i] !== selProj) {
        projects[i].setAttribute("class", "project inactive");
      }
    }
  } else {
    selProj.setAttribute("class", "project inactive");
  }
}
