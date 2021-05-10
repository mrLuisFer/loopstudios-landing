"use strict"

const iconBurguer = document.querySelector("#burguer")
const iconClose = document.querySelector("#close")
const body = document.querySelector("#body")
const menuMobile = document.querySelector("#menu-mobile")

const btnSeeAll = document.querySelector("#btn-SeeAll")

const footerLogo = document.querySelector("#footer-logo")

// Open the menu
iconBurguer.addEventListener("click", () => {
  console.log("click")

  body.classList.add("noOverflow")
  iconBurguer.classList.add("dNone")

  iconClose.classList.remove("dNone")
  menuMobile.classList.remove("dNone")
  body.classList.remove("yesOverflow")
})

// Close the menu
iconClose.addEventListener("click", () => {
  body.classList.remove("noOverflow")
  iconBurguer.classList.remove("dNone")

  iconClose.classList.add("dNone")
  menuMobile.classList.add("dNone")
  body.classList.add("yesOverflow")
})

btnSeeAll.addEventListener("click", () => {
  window.scrollTo(0, 0)
})

footerLogo.addEventListener("click", () => {
  window.scrollTo(0, 0)
})
