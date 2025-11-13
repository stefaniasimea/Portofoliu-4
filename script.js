//Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var asteptari = document.getElementById("asteptari")
var educatie = document.getElementById("educatie")
var img = document.querySelector("img")
var body = document.querySelector("body")
var an =  document.getElementById("anNastere")


//Add event listener
button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)

const d = new Date()
var year = d.getFullYear()
//Define function
function displayAge() {
      an.innerHTML = year - an.innerHTML
}

function altaViata(){
      nume.innerHTML="Software Engineer"
      prenume.innerHTML="gogu"
      asteptari.innerHTML="fara asteptari, ma las surprinsa"
      educatie.innerHTML="<ul><li>Workshops</li><li>Internship</li></ul>"

img.src = "images/babuin.jpg"
img.style.opacity = "70%"
img.style.height = "300px"
img.style.width = "400px"
img.style.border = "3px solid purple"

body.style.backgroundColor = "green"
body.style.backgroundImage = "url('images/verde.jpg')"

}