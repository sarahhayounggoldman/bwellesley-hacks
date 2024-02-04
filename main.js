//building an obj
function helperItem (object) {
    // building the elements
    date = object.getFormattedDate(); 
    var li = $("<li>", {"class" : "task", 'data-id': object.id}); 
    var id = $("<span>").attr("class", "id").text(object.id + ' ');
    var due = $("<span>").attr("class", "due").text(date + ' ');
    var text = $("<p>").attr("class", "text").text(object.text);
    var button1 = $("<button>").attr("type", "button").attr("class", "markDone").text("\u2714");
    var button2 = $("<button>").attr("type", "button").attr("class", "delete").text("\u2716");
    // building the tree
    $(li)
        .append(id)
        .append(due)
        .append(text)
        .append(button1)
        .append(button2)
    // returning the tree
    return li;
 }




 

//STARTER CODE ADDING TO DOM

//DELETE LATER (?)
//gathers the inputs from the form

function addTaskFromForm(evtObj) { 
        evtObj.preventDefault();
        var data = {};
        var items = $('#addTask').serializeArray()
        items.forEach(function (item) {
            data[item.name] = item.value;
            });

        data['date'] = data['taskDate'];
        delete data['taskDate'];

        data['text'] = data['taskText'];
        delete data['taskText'];
        
        data['priority'] = data['taskPriority'];
        delete data['taskPriority'];
        
        theTaskList.addNewTask(data);

        $('#addTask')[0].reset();
        closeAllDropDowns();
    };

//click handler for adding a task from the form
$('#addTaskButton').click(addTaskFromForm);


//helper fxn handling the cancel task
function cancelTask(evtObj) {
    evtObj.preventDefault();
    closeAllDropDowns();
}

$('#cancelAddTask').click(cancelTask);

//marking done 

$("#theTasks").one().on("click", ".markDone", function (event) {toggleHelperEvent(event);});

// toggle done helper fxn
function toggleHelperEvent(event) {
    var button = event.target; // the <button> being clicked
    var section = $(button).closest("li"); // the <li> the button is in
    var id = $(section).data("id"); // the id
    let x = theTaskList.getTask(id);
    x.toggleDone();
 }


//deleting

$("#theTasks").one().on("click", ".delete", function (event) {deleteHelperEvent(event);});

//delete helper fxn

function deleteHelperEvent(event) {
    var button = event.target; // the <button> being clicked
    var section = $(button).closest("li"); // the <li> the button is in
    var id = $(section).data("id"); // the id
    theTaskList.deleteTask(id);
 }

//EVT HANDLERS
$("#sortIdButton").one().on("click", function () {theTaskList.sortById();});
$("#sortDateButton").one().on("click", function () {theTaskList.sortByDate();});
$("#sortPriorityButton").one().on("click", function () {theTaskList.sortByPriority();});

$('#saveLocalButton').one().on("click", function() {theTaskList.save()});
$('#loadLocalButton').one().on("click", function() {theTaskList.load()});

const json_stuff = [{
    "abbr": "And",
    "name": "Andromeda",
    "genitive": "Andromedae",
    "en": "Andromeda (mythological character)"
  }, {
    "abbr": "Ant",
    "name": "Antlia",
    "genitive": "Antliae",
    "en": "air pump"
  }, {
    "abbr": "Aps",
    "name": "Apus",
    "genitive": "Apodis",
    "en": "Bird-of-paradise"
  }, {
    "abbr": "Aqr",
    "name": "Aquarius",
    "genitive": "Aquarii",
    "en": "water-bearer"
  }, {
    "abbr": "Aql",
    "name": "Aquila",
    "genitive": "Aquilae",
    "en": "eagle"
  }, {
    "abbr": "Ara",
    "name": "Ara",
    "genitive": "Arae",
    "en": "altar"
  }, {
    "abbr": "Ari",
    "name": "Aries",
    "genitive": "Arietis",
    "en": "ram"
  }, {
    "abbr": "Aur",
    "name": "Auriga",
    "genitive": "Aurigae",
    "en": "charioteer"
  }, {
    "abbr": "Boo",
    "name": "Bo\u00f6tes",
    "genitive": "Bo\u00f6tis",
    "en": "herdsman"
  }, {
    "abbr": "Cae",
    "name": "Caelum",
    "genitive": "Caeli",
    "en": "chisel or graving tool"
  }, {
    "abbr": "Cam",
    "name": "Camelopardalis",
    "genitive": "Camelopardalis",
    "en": "giraffe"
  }, {
    "abbr": "Cnc",
    "name": "Cancer",
    "genitive": "Cancri",
    "en": "crab"
  }, {
    "abbr": "CVn",
    "name": "Canes Venatici",
    "genitive": "Canum Venaticorum",
    "en": "hunting dogs"
  }, {
    "abbr": "CMa",
    "name": "Canis Major",
    "genitive": "Canis Majoris",
    "en": "greater dog"
  }, {
    "abbr": "CMi",
    "name": "Canis Minor",
    "genitive": "Canis Minoris",
    "en": "lesser dog"
  }, {
    "abbr": "Cap",
    "name": "Capricornus",
    "genitive": "Capricorni",
    "en": "sea goat"
  }, {
    "abbr": "Car",
    "name": "Carina",
    "genitive": "Carinae",
    "en": "keel"
  }, {
    "abbr": "Cas",
    "name": "Cassiopeia",
    "genitive": "Cassiopeiae",
    "en": "Cassiopeia (mythological character)"
  }, {
    "abbr": "Cen",
    "name": "Centaurus",
    "genitive": "Centauri",
    "en": "centaur"
  }, {
    "abbr": "Cep",
    "name": "Cepheus",
    "genitive": "Cephei",
    "en": "Cepheus (mythological character)"
  }, {
    "abbr": "Cet",
    "name": "Cetus",
    "genitive": "Ceti",
    "en": "sea monster (whale)"
  }, {
    "abbr": "Cha",
    "name": "Chamaeleon",
    "genitive": "Chamaeleontis",
    "en": "chameleon"
  }, {
    "abbr": "Cir",
    "name": "Circinus",
    "genitive": "Circini",
    "en": "compasses"
  }, {
    "abbr": "Col",
    "name": "Columba",
    "genitive": "Columbae",
    "en": "dove"
  }, {
    "abbr": "Com",
    "name": "Coma Berenices",
    "genitive": "Comae Berenices",
    "en": "Berenice's hair"
  }, {
    "abbr": "CrA",
    "name": "Corona Australis",
    "genitive": "Coronae Australis",
    "en": "southern crown"
  }, {
    "abbr": "CrB",
    "name": "Corona Borealis",
    "genitive": "Coronae Borealis",
    "en": "northern crown"
  }, {
    "abbr": "Crv",
    "name": "Corvus",
    "genitive": "Corvi",
    "en": "crow"
  }, {
    "abbr": "Crt",
    "name": "Crater",
    "genitive": "Crateris",
    "en": "cup"
  }, {
    "abbr": "Cru",
    "name": "Crux",
    "genitive": "Crucis",
    "en": "southern cross"
  }, {
    "abbr": "Cyg",
    "name": "Cygnus",
    "genitive": "Cygni",
    "en": "swan or Northern Cross"
  }, {
    "abbr": "Del",
    "name": "Delphinus",
    "genitive": "Delphini",
    "en": "dolphin"
  }, {
    "abbr": "Dor",
    "name": "Dorado",
    "genitive": "Doradus",
    "en": "dolphinfish"
  }, {
    "abbr": "Dra",
    "name": "Draco",
    "genitive": "Draconis",
    "en": "dragon"
  }, {
    "abbr": "Equ",
    "name": "Equuleus",
    "genitive": "Equulei",
    "en": "pony"
  }, {
    "abbr": "Eri",
    "name": "Eridanus",
    "genitive": "Eridani",
    "en": "river Eridanus (mythology)"
  }, {
    "abbr": "For",
    "name": "Fornax",
    "genitive": "Fornacis",
    "en": "chemical furnace"
  }, {
    "abbr": "Gem",
    "name": "Gemini",
    "genitive": "Geminorum",
    "en": "twins"
  }, {
    "abbr": "Gru",
    "name": "Grus",
    "genitive": "Gruis",
    "en": "Crane"
  }, {
    "abbr": "Her",
    "name": "Hercules",
    "genitive": "Herculis",
    "en": "Hercules (mythological character)"
  }, {
    "abbr": "Hor",
    "name": "Horologium",
    "genitive": "Horologii",
    "en": "pendulum clock"
  }, {
    "abbr": "Hya",
    "name": "Hydra",
    "genitive": "Hydrae",
    "en": "Hydra (mythological creature)"
  }, {
    "abbr": "Hyi",
    "name": "Hydrus",
    "genitive": "Hydri",
    "en": "lesser water snake"
  }, {
    "abbr": "Ind",
    "name": "Indus",
    "genitive": "Indi",
    "en": "Indian"
  }, {
    "abbr": "Lac",
    "name": "Lacerta",
    "genitive": "Lacertae",
    "en": "lizard"
  }, {
    "abbr": "Leo",
    "name": "Leo",
    "genitive": "Leonis",
    "en": "lion"
  }, {
    "abbr": "LMi",
    "name": "Leo Minor",
    "genitive": "Leonis Minoris",
    "en": "lesser lion"
  }, {
    "abbr": "Lep",
    "name": "Lepus",
    "genitive": "Leporis",
    "en": "hare"
  }, {
    "abbr": "Lib",
    "name": "Libra",
    "genitive": "Librae",
    "en": "balance"
  }, {
    "abbr": "Lup",
    "name": "Lupus",
    "genitive": "Lupi",
    "en": "wolf"
  }, {
    "abbr": "Lyn",
    "name": "Lynx",
    "genitive": "Lyncis",
    "en": "lynx"
  }, {
    "abbr": "Lyr",
    "name": "Lyra",
    "genitive": "Lyrae",
    "en": "lyre / harp"
  }, {
    "abbr": "Men",
    "name": "Mensa",
    "genitive": "Mensae",
    "en": "Table Mountain (South Africa)"
  }, {
    "abbr": "Mic",
    "name": "Microscopium",
    "genitive": "Microscopii",
    "en": "microscope"
  }, {
    "abbr": "Mon",
    "name": "Monoceros",
    "genitive": "Monocerotis",
    "en": "unicorn"
  }, {
    "abbr": "Mus",
    "name": "Musca",
    "genitive": "Muscae",
    "en": "fly"
  }, {
    "abbr": "Nor",
    "name": "Norma",
    "genitive": "Normae",
    "en": "carpenter's level"
  }, {
    "abbr": "Oct",
    "name": "Octans",
    "genitive": "Octantis",
    "en": "octant (instrument)"
  }, {
    "abbr": "Oph",
    "name": "Ophiuchus",
    "genitive": "Ophiuchi",
    "en": "serpent-bearer"
  }, {
    "abbr": "Ori",
    "name": "Orion",
    "genitive": "Orionis",
    "en": "Orion (mythological character)"
  }, {
    "abbr": "Pav",
    "name": "Pavo",
    "genitive": "Pavonis",
    "en": "peacock"
  }, {
    "abbr": "Peg",
    "name": "Pegasus",
    "genitive": "Pegasi",
    "en": "Pegasus (mythological creature)"
  }, {
    "abbr": "Per",
    "name": "Perseus",
    "genitive": "Persei",
    "en": "Perseus (mythological character)"
  }, {
    "abbr": "Phe",
    "name": "Phoenix",
    "genitive": "Phoenicis",
    "en": "phoenix"
  }, {
    "abbr": "Pic",
    "name": "Pictor",
    "genitive": "Pictoris",
    "en": "easel"
  }, {
    "abbr": "Psc",
    "name": "Pisces",
    "genitive": "Piscium",
    "en": "fishes"
  }, {
    "abbr": "PsA",
    "name": "Piscis Austrinus",
    "genitive": "Piscis Austrini",
    "en": "southern fish"
  }, {
    "abbr": "Pup",
    "name": "Puppis",
    "genitive": "Puppis",
    "en": "poop deck"
  }, {
    "abbr": "Pyx",
    "name": "Pyxis",
    "genitive": "Pyxidis",
    "en": "mariner's compass"
  }, {
    "abbr": "Ret",
    "name": "Reticulum",
    "genitive": "Reticuli",
    "en": "eyepiece graticule"
  }, {
    "abbr": "Sge",
    "name": "Sagitta",
    "genitive": "Sagittae",
    "en": "arrow"
  }, {
    "abbr": "Sgr",
    "name": "Sagittarius",
    "genitive": "Sagittarii",
    "en": "archer"
  }, {
    "abbr": "Sco",
    "name": "Scorpius",
    "genitive": "Scorpii",
    "en": "scorpion"
  }, {
    "abbr": "Scl",
    "name": "Sculptor",
    "genitive": "Sculptoris",
    "en": "sculptor"
  }, {
    "abbr": "Sct",
    "name": "Scutum",
    "genitive": "Scuti",
    "en": "shield (of Sobieski)"
  }, {
    "abbr": "Ser",
    "name": "Serpens",
    "genitive": "Serpentis",
    "en": "snake"
  }, {
    "abbr": "Sex",
    "name": "Sextans",
    "genitive": "Sextantis",
    "en": "sextant"
  }, {
    "abbr": "Tau",
    "name": "Taurus",
    "genitive": "Tauri",
    "en": "bull"
  }, {
    "abbr": "Tel",
    "name": "Telescopium",
    "genitive": "Telescopii",
    "en": "telescope"
  }, {
    "abbr": "Tri",
    "name": "Triangulum",
    "genitive": "Trianguli",
    "en": "triangle"
  }, {
    "abbr": "TrA",
    "name": "Triangulum Australe",
    "genitive": "Trianguli Australis",
    "en": "southern triangle"
  }, {
    "abbr": "Tuc",
    "name": "Tucana",
    "genitive": "Tucanae",
    "en": "toucan"
  }, {
    "abbr": "UMa",
    "name": "Ursa Major",
    "genitive": "Ursae Majoris",
    "en": "great bear"
  }, {
    "abbr": "UMi",
    "name": "Ursa Minor",
    "genitive": "Ursae Minoris",
    "en": "lesser bear"
  }, {
    "abbr": "Vel",
    "name": "Vela",
    "genitive": "Velorum",
    "en": "sails"
  }, {
    "abbr": "Vir",
    "name": "Virgo",
    "genitive": "Virginis",
    "en": "virgin or maiden"
  }, {
    "abbr": "Vol",
    "name": "Volans",
    "genitive": "Volantis",
    "en": "flying fish"
  }, {
    "abbr": "Vul",
    "name": "Vulpecula",
    "genitive": "Vulpeculae",
    "en": "fox"
  }]
  
// doc find elt by id, make list to put it in, dom appendCHild()
// create html block 

// function addConst() {
//     const name = document.getElementById("constellations");
    
//     function json_stuff {
//         json_stuff.forEach((element["name"]) => const fragment = document.createDocumentFragment();
//         const li = fragment
//         .appendChild(document.createElement("li"));
//         li.textContent = {name}
//         document.body.appendChild(fragment)
//         )
//     }

//         // const fragment
//         // .innerHTML += 
//         // <div>
//         // <li class="const-box">
//         // <p>{name}</p>
//         // </li>
//         // </div>   
// }

// json_stuff.forEach(function(elt, index))

// function helperConst 

// $(document).ready(function(){
//     $.getJSON("constellations.json", function(data){
//         $('.name'.html())
//     })

// })

document.addEventListener("DOMContentLoaded", function () {
    fetch('constellations.json')
        .then(response => response.json())
        .then(data => {
            const constellations = document.getElementById("constellations");

            // Create HTML elements to display the JSON data
            const nameElement = document.createElement("li");
            nameElement.textContent = "Name: " + data.name;

            // Append the elements to the "dataDisplay" div
            constellations.appendChild(nameElement);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
