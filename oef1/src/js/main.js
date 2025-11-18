//import van custom css
import '../scss/styles.scss'
//import all of bootstrap zijn js
import * as bootstrap from 'bootstrap'

//EIGEN JS
let oefening = []


function maakLijst(){
    const lijst = document.getElementById("ex1_list")

    lijst.innerHTML = oefening.map((sport) => `
      <li class="list-group-item d-flex justify-content-between align-items-center">
      <p>${sport.sport}</p>
      <p>${sport.tijd} minuten</p>
      </li>
    `)
        .join("");
    console.log(oefening)
}

function voegToe(){
    const sport = document.getElementById("ex1_ex").value
    const tijd = Number(document.getElementById("ex1_min").value)
    const status = document.getElementById("ex1_feedback")
    const count = document.getElementById("ex1_total")

    if(!sport || !tijd){
        status.className = "alert alert-danger"
        status.innerText = "Gelieve beide velden in te vullen"
    }

    const length = oefening.length + 1

    status.className = "alert alert-success"
    status.innerText = `goed zo, ze hebt al ${length} oefening(en) ingevuld`

    const result = ({sport, tijd})

    let totaal = tijd

    count.innerText = totaal

    oefening.push(result);

    maakLijst()
}

document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("ex1_btn")?.addEventListener("click", voegToe)

})