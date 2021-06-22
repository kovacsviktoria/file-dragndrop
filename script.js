const elements = {};

function fileAdded(event) {

    document.querySelector("#upload p").innerHTML = event.target.files[0].name;
    console.log(event.target.files[0].name);

}

function loadEvent() {
    const rootE = document.getElementById("root");

    rootE.insertAdjacentHTML("beforeend", `
        <div id="upload">
            <p>Drop here</p>
            <input type="file" id="drag-n-drop">
        </div>
    `);

/*     const elements = {
        uploadE: document.querySelector("#upload"),
        inputE: document.querySelector("#drag-n-drop")
    } */

    elements.uploadE = document.querySelector("#upload");
    elements.inputE = document.querySelector("#drag-n-drop");

    elements.inputE.addEventListener("change", fileAdded);
}

window.addEventListener("load", loadEvent);