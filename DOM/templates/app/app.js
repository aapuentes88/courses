//Fragment + Template --------------------------------------------------------
const listaDinamica = document.querySelector("#listaDinamica");

/*Si se agraga un evento al template es necesario usar :
const clone = liTemplate.content.firstElementChild.cloneNode(true); en lugar de
const clone = liTemplate.content.cloneNode(true);*/
const clickPais = (e) => console.log("evento", e.target);

const arrayElementos = ["Perú", "Bolivia", "Colombia"];

const fragment = document.createDocumentFragment();
const liTemplate = document.querySelector("#liTemplate");

arrayElementos.forEach((pais) => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector("span").textContent = pais;

    clone.addEventListener("click", clickPais);

    fragment.appendChild(clone);
});

listaDinamica.appendChild(fragment);