function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    if (ev.target.classList.contains("accordion-body")) {
        ev.preventDefault();
        ev.target.prepend(document.getElementById(data));
    }
}

//para agregar una nueva card

function addCardInBackLog(){
    const cardHeader = prompt("Indicar el titulo principal:");
    const cardImage = prompt("Indicar la ubicacion de la imagen:");
    const cardTitle = prompt("Indicar el titulo secundario:");
    const cardText = prompt("Indicar la descripción:");
    const dropBackLog = document.getElementById("dropBackLog");
    const accordionBody = dropBackLog.getElementsByClassName("accordion-body");
    accordionBody.prepend(createCard( cardHeader, cardImage, cardTitle, cardText));
}


function createCard({ cardHeader, cardImage, cardTitle, cardText }) {
    let cardId = Math.random() * 1000000;

    return `
        <div id="Card${cardId}" draggable="true" class="TheCard" ondragstart="drag(event)">
            <div class="card text-bg-success mb-3 text-center w-90">
                <div class="card-header">${cardHeader}</div>
                <div>
                    <img src="${cardImage}" class="card-img-top w-50"
                        alt="..." draggable="false">
                    <span class="material-symbols-outlined">delete</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${cardTitle}</h5>
                    <p class="card-text">${cardText}</p>
                    <a href="#" class="btn btn-primary" draggable="false">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
}