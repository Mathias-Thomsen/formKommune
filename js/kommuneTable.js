console.log("Er i kommuneTable")

const urlKommune = "http://localhost:8080/kommune"
const pbCreateKommuneTable = document.getElementById("pdGetKommuner")
const tblKommuner = document.getElementById("tblKommuner")


function fetchAnyUrl(url) {
    return fetch(url).then(response => response.json());
}

function createTable(kommune) {
    let cellCount = 0
    let rowCount = tblKommuner.rows.length

    let row = tblKommuner.insertRow(rowCount)

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.kode
    cell.style.width = "10%"

    cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.navn
    cell.style.width = "10%"

    cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.href
    cell.style.width = "10%"

    cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.region.kode
    cell.style.width = "10%"

    cell = row.insertCell(cellCount++)
    cell.innerHTML = kommune.region.navn
    cell.style.width = "10%"


    const pbDelete = document.createElement("input");
    pbDelete.type = "button";
    pbDelete.setAttribute("value", "Slet kommune");

    console.log("hej")


}

let kommuner = []
async function fetchKommuner() {
    kommuner = await fetchAnyUrl(urlKommune)
    kommuner.forEach(createTable)
}

function actionGetKommuner(){
fetchKommuner()

}

pbCreateKommuneTable.addEventListener('click', actionGetKommuner)