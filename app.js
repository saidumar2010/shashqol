const buttonEl = document.getElementById("roll-button");

const diceEl = document.getElementById("dice");

const tashlashTarixi = document.getElementById("roll-history");

let tarixListi = [];

function shashqolTashlash() {
    const natija = Math.floor(Math.random() * 6) + 1;
    const shashqol = shashqolKorinishi(natija);
    diceEl.innerHTML = shashqol;
    tarixListi.push(natija);
    tarixniYangilash();
}

function tarixniYangilash() {
    tashlashTarixi.innerHTML = "";
    for (let i = 0; i < tarixListi.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Tashlash ${i + 1}: <span>${shashqolKorinishi(
            tarixListi[i]
        )}</span>`;
        tashlashTarixi.appendChild(listItem);
    }
}

function shashqolKorinishi(natija) {
    switch (natija) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        shashqolTashlash();
    }, 1000);
});
