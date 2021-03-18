"use strict"

let iconBurguer = document.querySelector("#burguer")
let iconClose = document.querySelector("#close")
let body = document.querySelector("#body")
let menuMobile = document.querySelector("#menu-mobile")

iconBurguer.addEventListener("click", function () {
  console.log("click")

  body.classList.add("noOverflow")
  iconBurguer.classList.add("dNone")

  iconClose.classList.remove("dNone")
  menuMobile.classList.remove("dNone")
  body.classList.remove("yesOverflow")
})

iconClose.addEventListener("click", function () {
  body.classList.remove("noOverflow")
  iconBurguer.classList.remove("dNone")

  iconClose.classList.add("dNone")
  menuMobile.classList.add("dNone")
  body.classList.add("yesOverflow")
})
