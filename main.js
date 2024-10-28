document.addEventListener("DOMContentLoaded", ()=>{
    
    peopleSelect.innerHTML += people.map(p=>`<option>${p.email}</option>`).join("");
    people.map(p => new Option(p.email)).forEach(o => peopleSelect2.appendChild(o));
    people.map(p => peopleSelect3.appendChild(new Option(p.email)));

});