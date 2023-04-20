var rep = db.collection("Report");
var btn = document.querySelector("#button");

rep.doc("SF").set({
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });

    function addData()