/*Emissionswerte 2008 2018*/
var eu08:number=4965.7;
var eu18:number=4209.3;
var na08:number=6600.4;
var na18:number=6035.6;
var sa08:number=1132.6;
var sa18:number=1261.5;
var af08:number=1028;
var af18:number=1235.5;
var as08:number=12954.7;
var as18:number=16274.1;
var au08:number=1993;
var au18:number=2100.5;

/*Gesamtemission*/
var gesamt18:number=eu18+na18+sa18+af18+as18+au18;

/*Relativ Gesamtemission Welt*/
var eu18welt:number=100/gesamt18*eu18;
var na18welt:number=100/gesamt18*na18;
var sa18welt:number=100/gesamt18*sa18;
var af18welt:number=100/gesamt18*af18;
var as18welt:number=100/gesamt18*as18;
var au18welt:number=100/gesamt18*au18;

/*Vergleich in %*/
var eu0818p1:number=100/eu08*eu18;
var na0818p1:number=100/na08*na18;
var sa0818p1:number=100/sa08*sa18;
var af0818p1:number=100/af08*af18;
var as0818p1:number=100/as08*as18;
var au0818p1:number=100/au08*au18;

var eu0818p2:number=100-eu0818p1;
var na0818p2:number=100-na0818p1;
var sa0818p2:number=100-sa0818p1;
var af0818p2:number=100-af0818p1;
var as0818p2:number=100-as0818p1;
var au0818p2:number=100-au0818p1;

/*Vergleich in kg CO2*/
var eu0818kg:number=eu18-eu08;
var na0818kg:number=na18-na08;
var sa0818kg:number=sa18-sa08;
var af0818kg:number=af18-af08;
var as0818kg:number=as18-as08;
var au0818kg:number=au18-au08;

/*Europa*/
console.log("Europa")

console.log("Die Emission von Europa ist: "+eu18+" kg CO2.")
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit "+eu18welt+" %.")
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um "+eu0818p2+" % verändert.")
console.log("2018 im Vergleich zu 2008 sind das "+eu0818kg+" kg CO2.")

/*Nordamerika*/
console.log("Nordamerika")

console.log("Die Emission von Nordamerika ist: "+na18+" kg CO2.")
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit "+na18welt+" %.")
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+na0818p2+" % verändert.")
console.log("2018 im Vergleich zu 2008 sind das "+na0818kg+" kg CO2.")

/*Südamerika*/
console.log("Südamerika")

console.log("Die Emission von Südamerika ist: "+sa18+" kg CO2.")
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit "+sa18welt+" %.")
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+sa0818p2+" % verändert.")
console.log("2018 im Vergleich zu 2008 sind das "+sa0818kg+" kg CO2.")

/*Afrika*/
console.log("Afrika")

console.log("Die Emission von Afrika ist: "+af18+" kg CO2.")
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit "+af18welt+" %.")
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um "+af0818p2+" % verändert.")
console.log("2018 im Vergleich zu 2008 sind das "+af0818kg+" kg CO2.")

/*Asien*/
console.log("Asien")

console.log("Die Emission von Asien ist: "+as18+" kg CO2.")
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit "+as18welt+" %.")
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um "+as0818p2+" % verändert.")
console.log("2018 im Vergleich zu 2008 sind das "+as0818kg+" kg CO2.")

/*Australien*/
console.log("Australien")

console.log("Die Emission von Australien ist: "+au18+" kg CO2.")
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit "+au18welt+" %.")
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um "+au0818p2+" % verändert.")
console.log("2018 im Vergleich zu 2008 sind das "+au0818kg+" kg CO2.")