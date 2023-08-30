// --== DRAG & DROPS DE CARDS ==--

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

