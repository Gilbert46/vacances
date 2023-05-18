"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nom = document.querySelector("#nom");
let preu = document.querySelector("#preu");
let hotel = document.querySelector("#hotel");
let pais = document.querySelector("#pais");
let descri = document.querySelector("#descr");
let container = "";
let vacances = [];
function AddVacanca() {
    document.querySelector("#span").innerHTML = "<style>#nom{background-color:#68b850;} #preu{background-color:#68b850;} #hotel{background-color:#68b850;} #pais{background-color:#68b850;}</style>";
    if (nom.value != "" && preu.value != "" && hotel.value != "" && pais.value != "Tria un pais de la llista ...") {
        let vancaca = {};
        vancaca.id = vacances.length + 1;
        vancaca.nom = nom.value;
        vancaca.preu = +preu.value;
        vancaca.hotel = hotel.value;
        vancaca.pais = pais.value;
        vancaca.descr = descri.value;
        vacances.push(vancaca);
        container = "<ul>";
        for (let i = 0; i < vacances.length; i++) {
            container += '<li class="newInto" onclick="GetDetallVacanca(' + vacances[i].id + ')">' + vacances[i].id + ': ' + vacances[i].nom + '</li>';
        }
        container += '</ul>';
        document.querySelector("#llistat").innerHTML = container;
        nom.value = "";
        preu.value = "";
        hotel.value = "";
        pais.value = "Tria un pais de la llista ...";
        descri.value = "";
    }
    else {
        let cadena = "!!! falten els següent camps per omplir:";
        if (nom.value == "") {
            cadena += " nom,";
            cadena += "<style>#nom{background-color:#fa9393;}</style>";
        }
        if (preu.value == "") {
            cadena += " preu,";
            cadena += "<style>#preu{background-color:#fa9393;}</style>";
        }
        if (hotel.value == "") {
            cadena += " hotel,";
            cadena += "<style>#hotel{background-color:#fa9393;}</style>";
        }
        if (pais.value == "Tria un pais de la llista ...") {
            cadena += " pais.";
            cadena += "<style>#pais{background-color:#fa9393;}</style>";
        }
        document.querySelector("#span").innerHTML = cadena;
    }
}
function GetDetallVacanca(id) {
    container = "";
    document.querySelector("#detall").innerHTML = "";
    for (let i = 0; i < vacances.length; i++) {
        if (i + 1 == id) {
            container += "<ul><li>Nom: " + vacances[i].nom + "</li><li>Preu: " + vacances[i].preu + " €</li>";
            container += "<li>Hotel: " + vacances[i].hotel + "</li><li>Pais: " + vacances[i].pais + "</li>";
            if (vacances[i].descr != "")
                container += "<li>Comentari: " + vacances[i].descr + "</li>";
            document.querySelector("#detall").innerHTML = container + "</ul>";
            break;
        }
    }
}
