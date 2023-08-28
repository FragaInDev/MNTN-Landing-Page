var style = document.getElementById("style");
var icon = document.getElementById("icon");
var iconHiking = document.getElementById("icon-hiking");
var iconMountain = document.getElementById("icon-mountain");
var iconMap = document.getElementById("icon-map");

var horaAtual = new Date().getHours();

if (horaAtual >= 5 && horaAtual < 12) {
    style.href = "/css/manha.css";
    icon.style.color = "#FBD784";
    iconHiking.style.color = "#FBD784";
    iconMountain.style.color = "#FBD784";
    iconMap.style.color = "#FBD784";
  } else if (horaAtual >= 12 && horaAtual < 18) {
    style.href = "/css/tarde.css";
    icon.style.color = "#FD959E";
    iconHiking.style.color = "#FD959E";
    iconMountain.style.color = "#FD959E";
    iconMap.style.color = "#FD959E";
  } else {
    style.href = "/css/noite.css";
    icon.style.color = "#1AB1FF";
    iconHiking.style.color = "#1AB1FF";
    iconMountain.style.color = "#1AB1FF";
    iconMap.style.color = "#1AB1FF";
  }