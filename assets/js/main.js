"use strict";

const projects = document.querySelectorAll(".project");

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

function selectProject(projId) {
  const selProj = document.getElementById(projId);
  console.log(selProj.classList);
  if (selProj.classList.contains("inactive")) {
    selProj.setAttribute("class", "project active");
  } else {
    selProj.setAttribute("class", "project inactive");
  }
}
