let darkTheme;

if (window.localStorage.getItem("darkTheme") === "true") {
    darkTheme = true;
} else {
    darkTheme = false;
    window.localStorage.setItem("darkTheme", darkTheme);
};

window.onload = function() {
    darkTheme ? bodyElement.classList.add('dark-theme') : bodyElement.classList.remove('dark-theme');
};

let element = document.querySelector('button');

let bodyElement = document.querySelector('body');

element.onclick = function() {
    darkTheme = !darkTheme;
    window.localStorage.setItem("darkTheme", darkTheme);
    darkTheme ? bodyElement.classList.add('dark-theme') : bodyElement.classList.remove('dark-theme');
};