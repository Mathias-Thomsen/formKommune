import {restDelete, fetchAnyUrl} from "./moduleJson.js";


const urlKommune = "http://localhost:8080/kommune"
const pbCreateKommuneTable = document.getElementById("pdGetKommuner")
const tblKommuner = document.getElementById("tblKommuner")


function createTable(kommune) {
    let cellCount = 0
    let rowCount = tblKommuner.rows.length


    let row = tblKommuner.insertRow(rowCount)
    row.id = kommune.navn

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
    pbDelete.className = "btn1"
    pbDelete.onclick = function() {
        document.getElementById(kommune.navn).remove();
        deleteKommune(kommune);
    }
    row.appendChild(pbDelete)
    console.log("hej")
}


function sortKommuner(kommuner) {
    return kommuner.sort((kom1, kom2) => {
        if(kom1.region.kode > kom2.region.kode) {
            return 1
        } else if(kom2.region.kode > kom1.region.kode){
            return -1
        }else if (kom1.navn > kom2.navn) {
            return 1
        } else {
            return 0
        }
    })


}

let kommuner = []
async function fetchKommuner() {
    const colhead = document.getElementById("colhead")
    tblKommuner.innerHTML = ""
    tblKommuner.appendChild(colhead)
    kommuner = await fetchAnyUrl(urlKommune)
    kommuner = sortKommuner(kommuner)
    kommuner.forEach(createTable)
}


async function deleteKommune(kommune) {
    try {
        const url = urlKommune + "/" + kommune.kode
        const resp = await restDelete(url)
        const body = await resp.text()
        alert(body)
        if(resp.ok) {
            alert("Det gik godt med slet")
        }else {
            alert("error i slet")
        }

    }catch (error){
        alert(error.message);
        console.log(error)

    }
}




function actionGetKommuner(){
fetchKommuner()

}

pbCreateKommuneTable.addEventListener('click', actionGetKommuner)