window.onload = iniciar;

function iniciar() {
    let boton = document.getElementById("btnCargar");
    boton.addEventListener("click", clickBoton);
}

async function cargarUrl(url) {
    let response = await fetch(url);
    return response.json();
}

async function clickBoton() {
    //Variables que traen pais seleccionado y fecha seleccionada
    let pais = document.getElementById("selectPais").value;
    let fecha = document.getElementById("inputFecha").value;

    //url a cargar en json al clikear el boton cargar
    let url = `https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`;
    let json = await cargarUrl(url);
    let estadisticas = json.dates[fecha].countries[pais];
    console.log(estadisticas);
    //Reemplazo las estadisticas del dìa cargados !
    document.getElementById("source").innerHTML = estadisticas.source;
    document.getElementById("today_confirmed").innerHTML = estadisticas.today_confirmed;
    document.getElementById("today_deaths").innerHTML = estadisticas.today_deaths;
    document.getElementById("today_new_confirmed").innerHTML = estadisticas.today_new_confirmed;
    document.getElementById("today_new_deaths").innerHTML = estadisticas.today_new_deaths;
    document.getElementById("today_new_recovered").innerHTML = estadisticas.today_new_recovered;
    document.getElementById("today_open_cases").innerHTML = estadisticas.today_open_cases;
    document.getElementById("today_recovered").innerHTML = estadisticas.today_recovered;
    document.getElementById("yesterday_confirmed").innerHTML = estadisticas.yesterday_confirmed;
    document.getElementById("yesterday_deaths").innerHTML = estadisticas.yesterday_deaths;
    document.getElementById("yesterday_open_cases").innerHTML = estadisticas.yesterday_open_cases;
    document.getElementById("yesterday_recovered").innerHTML = estadisticas.yesterday_recovered;
/* source: "Ministerio de Salud Argentina"
today_confirmed: 711325
today_deaths: 15749
today_new_confirmed: 0
today_new_deaths: 0
today_new_recovered: 0
today_open_cases: 129641
today_recovered: 565935
yesterday_confirmed: 711325
yesterday_deaths: 15749
yesterday_open_cases: 129641
yesterday_recovered: 565935 */
}