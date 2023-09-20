import {postObjectAsJson} from "./moduleJson.js";

console.log("jeg er i formkommune")


document.addEventListener('DOMContentLoaded', createFormEventListener);
let formKommune;

function createFormEventListener() {
    formKommune = document.getElementById("formKommune");
    formKommune.addEventListener("submit", handleFormSubmit);
}

async function handleFormSubmit(event) {
    //Vi handler submitten her i stedet for default html behaviour
    event.preventDefault(); //Forhindre submit form i at blive udført
    const form = event.currentTarget;
    const url = form.action;
    console.log(form);
    console.log(url);

    try {
        const formData = new FormData(form);
        console.log(formData);
        const responseData = await postFormDataAsJson(url, formData);
    } catch (error) {
        alert(error.message);
        console.error(error);
    }

}

async function postFormDataAsJson(url, formData) {
    const plainFormData = Object.fromEntries(formData.entries());
    console.log(plainFormData);

    // Create the 'region' object if it doesn't exist
    plainFormData.region = {}
    plainFormData.region.kode = plainFormData.regionKode

    const resp = postObjectAsJson(url, plainFormData, "POST")
    console.log(plainFormData);
    return resp
}









