const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbar = document.getElementsByClassName("navbar")[0]

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
})


let btn = document.querySelector("#chButton")

btn.onclick = function () {
    let yearSelected = document.querySelector("#list_1").value;
    localStorage.setItem("yearValue", yearSelected);
    let yv = localStorage.getItem("yearValue");

    let semestreSelected = document.querySelector("#list_2").value;
    localStorage.setItem("semestreValue", semestreSelected);
    let sv = localStorage.getItem("semestreValue");

    let typeSelected = document.querySelector("#list_3").value;
    localStorage.setItem("typeValue", typeSelected);
    let tv = localStorage.getItem("typeValue");



    if (yv === "l0" && sv === "so" && tv === "ec") {
        location.href = "/pages/firstYear/so/losoec.html"
    } else if (yv === "l0" && sv === "so" && tv === "cr") {
        location.href = "/pages/firstYear/so/losocr.html"
    } else if (yv === "l0" && sv === "st" && tv === "ec") {
        location.href = "/pages/firstYear/st/lostec.html"
    } else if (yv === "l0" && sv === "st" && tv === "cr") {
        location.href = "/pages/firstYear/st/lostcr.html"
    } else if (yv === "l0" && sv === "st" && tv === "rp") {
        location.href = "/pages/secondYear/so/ltsorp.html"
    } else if (yv === "lt" && sv === "so" && tv === "ec") {
        location.href = "/pages/secondYear/so/ltsoec.html"
    } else if (yv === "lt" && sv === "so" && tv === "cr") {
        location.href = "/pages/secondYear/so/ltsocr.html"
    } else if (yv === "lt" && sv === "so" && tv === "rp") {
        location.href = "/pages/secondYear/so/ltsorp.html"
    } else if (yv === "lt" && sv === "st" && tv === "ec") {
        location.href = "/pages/secondYear/st/ltstec.html"
    } else if (yv === "lt" && sv === "st" && tv === "cr") {
        location.href = "/pages/secondYear/st/ltstcr.html"
    } else if (yv === "lt" && sv === "st" && tv === "rp") {
        location.href = "/pages/secondYear/st/ltstrp.html"
    } else if (yv === "lth" && sv === "so" && tv === "ec") {
        location.href = "/pages/thirdYear/so/lthsoec.html"
    } else if (yv === "lth" && sv === "so" && tv === "cr") {
        location.href = "/pages/thirdYear/so/lthsocr.html"
    } else if (yv === "lth" && sv === "st" && tv === "rp") {
        location.href = "/pages/thirdYear/st/ltstrp.html"
    } else {
        openPopup();
    }
}

let popup = document.querySelector(".popup-container")
function openPopup() {
    popup.classList.add("active");
}
function closePopup() { 
    popup.classList.remove("active"); 
}