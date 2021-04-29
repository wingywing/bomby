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


// //Darkmode
document.getElementById('themeSwitch').addEventListener('change', function(event){
  (event.target.checked) ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
});

var themeSwitch = document.getElementById('themeSwitch');
if(themeSwitch) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it

  themeSwitch.addEventListener('change', function(event){
    resetTheme(); // update color theme
  });

  function initTheme() {
    var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  };

  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('themeSwitch'); // reset theme selection 
    } 
  };
}
else if (localStorage.getItem('themeSwitch') == null) {
// Check to see if Media-Queries are supported
(window.matchMedia) {
  // Check if the dark-mode Media-Query matches
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
  }
}
}