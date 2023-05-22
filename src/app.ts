import {Ivacanca} from "./model/models";
let nom = document.querySelector("#nom")! as HTMLInputElement;
let preu = document.querySelector("#preu")! as HTMLInputElement;
let hotel = document.querySelector("#hotel")! as HTMLInputElement;
let pais = document.querySelector("#pais")! as HTMLInputElement;
let descri = document.querySelector("#descr")! as HTMLInputElement;
let cadena: string = "";
let container: string = "";
let vacances: Ivacanca[] = [];
function AddVacanca(): void {
    document.querySelector("#span")!.innerHTML = "<style>#nom{background-color:#68b850;}#preu{background-color:#68b850;}#hotel{background-color:#68b850;}#pais{background-color:#68b850;}</style>";
    cadena = "!!! falten els següent camps per omplir:";
    if (nom.value == "" || (nom.value.charAt(0) <= '9' && nom.value.charAt(0) >= '0')) cadena +=" nom,"+"<style>#nom{background-color:#fa9393;}</style>";
    if (hotel.value == "" || (hotel.value.charAt(0) <= '9' && hotel.value.charAt(0) >= '0')) cadena +=" hotel,"+"<style>#hotel{background-color:#fa9393;}</style>";
    console.log(preu.value);
    if (preu.value == "" || preu.valueAsNumber < 0 || preu.valueAsNumber == null) cadena += " preu,"+"<style>#preu{background-color:#fa9393;}</style>";
    if (pais.value == "Tria un pais de la llista ...") cadena +=" pais."+"<style>#pais{background-color:#fa9393;}</style>";
    if (cadena != "!!! falten els següent camps per omplir:") document.querySelector("#span")!.innerHTML = cadena;
    else {
        let vancaca: Ivacanca = {} as Ivacanca;
        vancaca.id = vacances.length+1;
        vancaca.nom = nom.value;
        vancaca.preu = +preu.value;
        vancaca.hotel = hotel.value;
        vancaca.pais = pais.value;
        vancaca.descr = descri.value;
        vacances.push(vancaca);
        container = "<ul>";
        for (let i=0; i < vacances.length; i++) {    
            container += '<li class="newInto" onclick="GetDetallVacanca('+vacances[i].id+')">'+vacances[i].id+': '+vacances[i].nom+'</li>';
        }
        container += '</ul>';
        document.querySelector("#llistat")!.innerHTML = container;
        nom.value = "";
        preu.value = "";
        hotel.value = "";
        pais.value = "Tria un pais de la llista ...";
        descri.value = "";
    }
}
function GetDetallVacanca(id: number): void {
    container = "";
    document.querySelector("#detall")!.innerHTML = "";
    for (let i=0; i < vacances.length; i++) {
        if (i+1 == id) {
            container += "<ul><li>Nom: " + vacances[i].nom + "</li><li>Preu: " + vacances[i].preu + " €</li>";
            container += "<li>Hotel: " + vacances[i].hotel + "</li><li>Pais: " + vacances[i].pais + "</li>";
            if (vacances[i].descr != "") container += "<li>Comentari: " + vacances[i].descr + "</li>";
            document.querySelector("#detall")!.innerHTML = container + "</ul>";
            break;
        }
    }
}
