// Burbujeo y Captura ------------------------------------------------------
const cajas = document.querySelectorAll(".container div");
cajas.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log(`"click" ${e.target}`);
    });
});

//Delegacion de Eventos -----------------------------------------------------
const container = document.querySelector("#delegateEvent");
container.addEventListener("click", (e) => {
    // e.preventDefault()
    // console.log(e.target.id);
    if (e.target.id === "hijo") {
        console.log("diste click en el hijo");
    }

    // console.log(e.target.matches(".border-danger"));
    if (e.target.matches(".border-danger")) {
        console.log("diste click en el nieto");
    }

    // data-set
    // console.log(e.target.dataset["div"]);
    // console.log(e.target.dataset.div);
    if (e.target.dataset["div"] === "divPadre") {
        console.log("diste click en padre");
    }
});