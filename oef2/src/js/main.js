//import van custom css
import '../scss/styles.scss'
//import all of bootstrap zijn js
import * as bootstrap from 'bootstrap'

//EIGEN JS
let people = []


function showPeople() {

    const list = document.getElementById("ex2_list");

    list.innerHTML = people
        .map((p) => `
      <li class="list-group-item d-flex justify-content-between align-items-center">
      <p>${p.naam}</p>
      <p>${p.age}</p>
      </li>`)
        .join("");

    console.log(people)
}

function voegToe(){
    const level = document.getElementById("ex2_type").value
    const naam = document.getElementById("ex2_name").value
    const age = document.getElementById("ex2_age").value
    const dep = document.getElementById("ex2_dep").value
    const ts = document.getElementById("ex2_team").value
    const status = document.getElementById("ex2_feedback")

    console.log(level)

    if(!naam || !age || !dep){
        status.className = "alert alert-danger"
        status.innerText = "vul alle nodige velden in"
    }

    const result = ({naam, age, dep, ts})
    people.push(result)

    showPeople()

}

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("ex2_btn")?.addEventListener("click", voegToe)
})