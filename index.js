var countEl = document.getElementById("count-el");
var savedEl = document.getElementById("saved-el");
var incrementbtnEl = document.getElementById("btn-inc");
var savebtnEl = document.getElementById("btn-save");

let count = 0;

function countUp () {
    count ++
    countEl.textContent = count
};

function save () {
     localStorage.setItem("TotalCount", count)
     console.log(count)
    let countStr = count + " - " 
     savedEl.textContent += countStr
     countEl.textContent = 0
     count = 0
};

save();



    