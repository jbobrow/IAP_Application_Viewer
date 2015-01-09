//var file = document.getElementById('importedCSV').files[0];

var currentApplicant = 1;

function loadData(data) {
    window.data = data;
    //Data is usable here
    console.log(data);
    
    //show results in dom
    showElement(currentApplicant);
}

function prev() {
    showElement(--currentApplicant)
}

function next() {
    showElement(++currentApplicant)
}

function showElement(index) {
    if (index<1 || index>=window.data.length) return;
    var data = window.data;
    //currentApplicant = index;
    document.getElementById("id").innerHTML = data[index][0];
	document.getElementById("fullname").innerHTML = data[index][1];
    document.getElementById("dob").innerHTML = data[index][2];
    document.getElementById("hometown").innerHTML = data[index][3];
    document.getElementById("email").innerHTML = data[index][4];
    document.getElementById("major").innerHTML = data[index][8];
    document.getElementById("year").innerHTML = data[index][9];
    document.getElementById("company").innerHTML = data[index][10];
    document.getElementById("software").innerHTML = data[index][11];
    document.getElementById("design").innerHTML = data[index][12];
    document.getElementById("hardware").innerHTML = data[index][13];
    document.getElementById("leadership").innerHTML = data[index][14];
    document.getElementById("extra").innerHTML = data[index][15];
    document.getElementById("laptop").innerHTML = data[index][16];
    document.getElementById("college").innerHTML = data[index][17];
    document.getElementById("projects").innerHTML = data[index][19];
    document.getElementById("future_projects").innerHTML = data[index][20];
    document.getElementById("choice_1").innerHTML = data[index][21];
    document.getElementById("choice_2").innerHTML = data[index][22];
    document.getElementById("choice_3").innerHTML = data[index][23];
    document.getElementById("reference").innerHTML = data[index][24];
    document.getElementById("expectations").innerHTML = data[index][25];

}

function parseData(url, callBack) {
    Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            callBack(results.data);
        }
    });
}

parseData("synchtools.csv", loadData);