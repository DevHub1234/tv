document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("DarkMode") === "True") {
        setDarkMode(true);
    } else if (localStorage.getItem("DarkMode") === "False") {
        setDarkMode(false);
    }

    if (localStorage.getItem("UserName")) {
        console.log("Device is logged in!");
    } else {
        location.href = "../index.html";
    }

    document.getElementById("greetings").innerHTML = `Hello ${localStorage.getItem("UserName")} !`;
});

function setDarkMode(isDark) {
    if (isDark) {
        localStorage.setItem("DarkMode", "True");
        document.body.style.color = "white";
        document.body.style.backgroundColor = "rgb(70, 63, 63)";
        document.querySelectorAll("dialog").forEach(dialog => {
            dialog.style.backgroundColor = "rgb(63, 58, 58)";
        });
        let btns = document.getElementsByClassName("btn");
        for (let btn of btns) {
            btn.style.backgroundColor = "rgb(70, 63, 63";
        }
        let btn2s = document.getElementsByClassName("btn2");
        for (let btn2 of btn2s) {
            btn2.style.backgroundColor = "rgb(70, 63, 63";
        }
        document.getElementById("container1").style.backgroundColor = "rgb(87, 80, 80)";
        document.getElementById("containerMain").style.backgroundColor = "rgb(87, 80, 80)"
        let dialogs = document.getElementsByClassName("dialog");
        for (let dialog of dialogs) {
            dialog.style.color = "white";
        }
    
    } else {
        localStorage.setItem("DarkMode", "False");
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
        document.querySelectorAll("dialog").forEach(dialog => {
            dialog.style.backgroundColor = "white";
        });
       document.getElementById("container1").style.backgroundColor = "rgb(213, 217, 219)";
       document.getElementById("containerMain").style.backgroundColor = "rgb(213, 217, 219)"
       let btns = document.getElementsByClassName("btn");
       for (let btn of btns) {
           btn.style.backgroundColor = "rgb(213, 217, 219)";
       }
       let btn2s = document.getElementsByClassName("btn2");
       for (let btn2 of btn2s) {
           btn2.style.backgroundColor = "rgb(213, 217, 219)";
       }
       
        document.querySelectorAll("dialog").forEach(dialog => {
            dialog.style.color = "black";
        });
    }
}

function darkMode() {
    if (localStorage.getItem("DarkMode") === "True") {
        setDarkMode(false);
    } else {
        setDarkMode(true);
    }
}
