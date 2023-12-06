
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const UlEl = document.getElementById("ul-el")
const dateEl = document.getElementById("date")


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '1'); 
let yyyy = today.getFullYear();



today = yyyy + '-' + mm + '-' + dd;




inputBtn.addEventListener("click", function() {
    if (inputEl.value == ""){

    } else {

        let li = document.createElement("div")
        if (today == dateEl.value || dateEl.value == ""){
            li.innerHTML = `<li>${inputEl.value} <br /><br /> Due By: Today</li>`
        } else if (today.substring(0,7) == dateEl.value.substring(0,7) && parseInt(dd) + 1 == parseInt(dateEl.value.substring(8))) {
            li.innerHTML = `<li>${inputEl.value} <br /><br /> Due By: Tomorrow</li>`
    
        } else if (parseInt(dateEl.value.substring(0,4)) < yyyy || (parseInt(dateEl.value.substring(0,4)) == yyyy && parseInt(dateEl.value.substring(5,7)) < parseInt(mm) || (parseInt(dateEl.value.substring(0,4)) == yyyy && parseInt(dateEl.value.substring(5,7)) == parseInt(mm) && dd > parseInt(dateEl.value.substring(8))))) {
            li.innerHTML = `<li>${inputEl.value} <br /><br /> Overdue</li>`
        }
        else {
            li.innerHTML = `<li>${inputEl.value} <br /><br /> Due By: ${displayDate(dateEl.value)}</li>`
        }
        UlEl.appendChild(li)
        let new_btn = document.createElement("button")
        new_btn.innerHTML = `Done`
        li.appendChild(new_btn)

    }
    inputEl.value = "";
    dateEl.value = "";
    saveData();
    
})

UlEl.addEventListener("click", function(e) {
    if(e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
       
        saveData()
    }
})


function saveData(){
    localStorage.setItem("data", UlEl.innerHTML);

}

function displayDate(d) {
    let finalstr = ""
    month = parseInt(d.substring(5,7));
    if (month == 1) {
        finalstr = "January " + d.substring(8,10) + ", " + d.substring(0,4);
    } else if (month == 2) {
        finalstr = "Febuary " + d.substring(8,10) + ", " + d.substring(0,4);
    } else if (month == 3) {
        finalstr = "March " + d.substring(8,10) + ", " + d.substring(0,4);
    } else if (month == 4) {
        finalstr = "April " + d.substring(8,10) + ", " + d.substring(0,4);
    } else if (month == 5) {
        finalstr = "May " + d.substring(8,10) + ", " + d.substring(0,4);
    } else if (month == 6) {
        finalstr = "June " + d.substring(8,10) + ", " + d.substring(0,4);
    } else if (month == 7) {
        finalstr = "July " + d.substring(8,10) + ", " + d.substring(0,4);
    } else if (month == 8) {
        finalstr = "August " + d.substring(8,10) + ", " + d.substring(0,4);
    } else if (month == 9) {
        finalstr = "September " + d.substring(8,10) + ", " + d.substring(0,4);
    } else if (month == 10) {
        finalstr = "October " + d.substring(8,10) + ", " + d.substring(0,4);
    } else if (month == 11) {
        finalstr = "November " + d.substring(8,10) + ", " + d.substring(0,4);
    } else if (month == 12) {
        finalstr = "December " + d.substring(8,10) + ", " + d.substring(0,4);
    }
    return finalstr
}

function showTask(){
    UlEl.innerHTML = localStorage.getItem("data");
}
showTask();




