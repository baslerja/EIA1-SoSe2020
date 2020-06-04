/*Emissionswerte 2008 2018*/
var eu08: number = 4965.7;
var eu18: number = 4209.3;
var na08: number = 6600.4;
var na18: number = 6035.6;
var sa08: number = 1132.6;
var sa18: number = 1261.5;
var af08: number = 1028;
var af18: number = 1235.5;
var as08: number = 12954.7;
var as18: number = 16274.1;
var au08: number = 1993;
var au18: number = 2100.5;

/*Gesamtemission*/
var gesamt18: number = eu18 + na18 + sa18 + af18 + as18 + au18;

/*Relativ Gesamtemission Welt*/
var eu18welt: number = dp(100 / gesamt18 * eu18);
var na18welt: number = dp(100 / gesamt18 * na18);
var sa18welt: number = dp(100 / gesamt18 * sa18);
var af18welt: number = dp(100 / gesamt18 * af18);
var as18welt: number = dp(100 / gesamt18 * as18);
var au18welt: number = dp(100 / gesamt18 * au18);

/*Vergleich in %*/
var eu0818p1: number = 1 - eu18 / eu08;
var na0818p1: number = 1 - na18 / na08;
var sa0818p1: number = 1 - sa18 / sa08;
var af0818p1: number = 1 - af18 / af08;
var as0818p1: number = 1 - as18 / as08;
var au0818p1: number = 1 - au18 / au08;

var eu0818p2: number = dp(100 * eu0818p1);
var na0818p2: number = dp(100 * na0818p1);
var sa0818p2: number = dp(100 * sa0818p1 * (-1));
var af0818p2: number = dp(100 * af0818p1 * (-1));
var as0818p2: number = dp(100 * as0818p1 * (-1));
var au0818p2: number = dp(100 * au0818p1 * (-1));

/*Vergleich in kg CO2*/
var eu0818kg: number = dp(eu18 - eu08);
var na0818kg: number = dp(na18 - na08);
var sa0818kg: number = dp(sa18 - sa08);
var af0818kg: number = dp(af18 - af08);
var as0818kg: number = dp(as18 - as08);
var au0818kg: number = dp(au18 - au08);

function dp(n){
    return Number.parseFloat(n).toFixed(2);
}

/*Europa*/
function europe() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emissions Europe";

    document.querySelector(".chart").setAttribute('style', 'height:' + eu18welt + 'px');

    document.querySelector("#h2a").innerHTML = eu18 + "kg CO2";
    document.querySelector("#p1").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#h2r").innerHTML = eu18welt + "%";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2grp").innerHTML = eu0818p2 + "%";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h2gra").innerHTML = eu0818kg + "kg CO2";
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener('click', europe);
})

console.log("Europa")

console.log("Die Emission von Europa ist: " + eu18 + " kg CO2.")
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + eu18welt + " %.")
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + eu0818p2 + " % verändert.")
console.log("2018 im Vergleich zu 2008 sind das " + eu0818kg + " kg CO2.")

/*Nordamerika*/
function northa() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emissions Northamerica";

    document.querySelector(".chart").setAttribute('style', 'height:' + na18welt + 'px');

    document.querySelector("#h2a").innerHTML = na18 + "kg CO2";
    document.querySelector("#p1").innerHTML = "Emission absolute of Northamerica in 2018";
    document.querySelector("#h2r").innerHTML = na18welt + "%";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2grp").innerHTML = na0818p2 + "%";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h2gra").innerHTML = na0818kg + "kg CO2";
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener('click', northa);
})

console.log("Nordamerika")

console.log("Die Emission von Nordamerika ist: " + na18 + " kg CO2.")
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + na18welt + " %.")
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + na0818p2 + " % verändert.")
console.log("2018 im Vergleich zu 2008 sind das " + na0818kg + " kg CO2.")

/*Südamerika*/
function southa() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emissions Southamerica";

    document.querySelector(".chart").setAttribute('style', 'height:' + sa18welt + 'px');

    document.querySelector("#h2a").innerHTML = sa18 + "kg CO2";
    document.querySelector("#p1").innerHTML = "Emission absolute of Southamerica in 2018";
    document.querySelector("#h2r").innerHTML = sa18welt + "%";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2grp").innerHTML = sa0818p2 + "%";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h2gra").innerHTML = sa0818kg + "kg CO2";
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener('click', southa);
})

console.log("Südamerika")

console.log("Die Emission von Südamerika ist: " + sa18 + " kg CO2.")
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + sa18welt + " %.")
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + sa0818p2 + " % verändert.")
console.log("2018 im Vergleich zu 2008 sind das " + sa0818kg + " kg CO2.")

/*Afrika*/
function africa() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emissions Africa";

    document.querySelector(".chart").setAttribute('style', 'height:' + af18welt + 'px');

    document.querySelector("#h2a").innerHTML = af18 + "kg CO2";
    document.querySelector("#p1").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#h2r").innerHTML = af18welt + "%";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2grp").innerHTML = af0818p2 + "%";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h2gra").innerHTML = af0818kg + "kg CO2";
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener('click', africa);
})

console.log("Afrika")

console.log("Die Emission von Afrika ist: " + af18 + " kg CO2.")
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + af18welt + " %.")
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + af0818p2 + " % verändert.")
console.log("2018 im Vergleich zu 2008 sind das " + af0818kg + " kg CO2.")

/*Asien*/
function asia() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emissions Asia";

    document.querySelector(".chart").setAttribute('style', 'height:' + as18welt + 'px');

    document.querySelector("#h2a").innerHTML = as18 + "kg CO2";
    document.querySelector("#p1").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#h2r").innerHTML = as18welt + "%";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2grp").innerHTML = as0818p2 + "%";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h2gra").innerHTML = as0818kg + "kg CO2";
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener('click', asia);
})

console.log("Asien")

console.log("Die Emission von Asien ist: " + as18 + " kg CO2.")
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + as18welt + " %.")
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + as0818p2 + " % verändert.")
console.log("2018 im Vergleich zu 2008 sind das " + as0818kg + " kg CO2.")

/*Australien*/
function australia() {
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emissions Australia";

    document.querySelector(".chart").setAttribute('style', 'height:' + au18welt + 'px');

    document.querySelector("#h2a").innerHTML = au18 + "kg CO2";
    document.querySelector("#p1").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#h2r").innerHTML = au18welt + "%";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2grp").innerHTML = au0818p2 + "%";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h2gra").innerHTML = au0818kg + "kg CO2";
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
}
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener('click', australia);
})

console.log("Australien")

console.log("Die Emission von Australien ist: " + au18 + " kg CO2.")
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + au18welt + " %.")
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + au0818p2 + " % verändert.")
console.log("2018 im Vergleich zu 2008 sind das " + au0818kg + " kg CO2.")
