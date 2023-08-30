

// --== CARGAR CARDS A PARTIR DE JSON ==--

//json con datos
const url = "https://mocki.io/v1/4d8d13b5-2e4a-4970-b7ff-6b30d4b7065a";
var registro = 0;
console.log(registro);

//funcion que trae datos del json
async function fetchData() {
    try {
        const response = await fetch(url, { method: "GET" });
        data = await response.json(); // extract JSON from response";
        return data;
    } catch (error) {
        console.log("Error fetching data: ", error);
    }
}

//funcion que crea una card
async function createCard(color) {
    let cardId = Math.random() * 1000000;

    const payload = await fetchData();

    let htmlData = 
    `
        <div id="Card-${registro}" draggable="true" class="TheCard" ondragstart="drag(event)">
            <div class="card text-bg-${color} mb-3 text-center w-90">
                <div class="card-header">${payload["registro"][registro].cardHeader}</div>
                <div>
                    <img src="images/auto${registro}.jpg" class="card-img-top w-50"
                        alt="..." draggable="false">
                    <span class="material-symbols-outlined" 
                        onclick="deleteCardOfWorld('Card-${registro}')">
                        delete
                    </span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${payload["registro"][registro].cardTitle}</h5>
                    <p class="card-text">${payload["registro"][registro].cardText}</p>
                </div>
            </div>
        </div>
    `;
    registro < 9 ? ++registro : registro = 0;
    return htmlData
    
}

//funcion que recibe la solicitud de una nueva card.
async function addCardInBucket(bucket,color) {
    const dropBucket = document.getElementById(bucket);
    const theCard = dropBucket.getElementsByClassName("TheCard")[0];
    const element = await createCard(color);
    theCard.insertAdjacentHTML("beforebegin" ,element);
}

// --== BORRAR CARD ==--
function deleteCardOfWorld(cardId){
    const theCard = document.getElementById(cardId);
    theCard.remove();
}


