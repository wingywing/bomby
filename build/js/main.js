// Toggles whether the buttons are visible or not under the header
let collapse = document.getElementById("togglestamps-button");
collapse.addEventListener("click", collapseButtons);

//Makes the buttons either bigger or smaller
let toggle = document.getElementById("toggleButtonSize-button");
toggle.addEventListener("click", changeButtonSize)

function collapseButtons() {
    var x = document.getElementById("stamps-container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var i = 0;
function changeButtonSize() {
        if (i > 0) {
            document.documentElement.style.setProperty('--button-height', '31px');
            i = 0;
        }
        else if (i == 0) {
            document.documentElement.style.setProperty('--button-height', '62px');
            i++;
        }
}