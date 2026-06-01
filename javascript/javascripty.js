function votarGanador() {
    let equipo = document.getElementById("votoEquipo").value;

    if (equipo == "") {
        alert("Por favor, introduce el nombre de un equipo.");
    } 
    else if (equipo == "Real Madrid") {
        alert("¡Gracias por tu voto! Has votado por el: " + equipo);
        document.getElementById("votoEquipo").value = ""; 
    } 
    else if (equipo == "Man. City") {
        alert("¡Gracias por tu voto! Has votado por el: " + equipo);
        document.getElementById("votoEquipo").value = ""; 
    } 
    else if (equipo == "Bayern") {
        alert("¡Gracias por tu voto! Has votado por el: " + equipo);
        document.getElementById("votoEquipo").value = ""; 
    } 
    else if (equipo == "Arsenal") {
        alert("¡Gracias por tu voto! Has votado por el: " + equipo);
        document.getElementById("votoEquipo").value = ""; 
    } 
    else {
        alert("Error: El equipo '" + equipo + "' no participa en esta votación. Solo puedes votar por Real Madrid, Man. City, Bayern o Arsenal.");
    }
}


// Arrays con los equipos y sus títulos correspondientes
let nombresEquipos = ["Real Madrid", "Milan", "Bayern", "Liverpool"];
let copasEquipos = [15, 7, 6, 6];

function buscarCopas() {
    // Recogemos el equipo escrito por el usuario
    let equipoBuscado = document.getElementById("equipoBuscar").value;
    
    // Buscamos en qué posición del array está
    let posicion = nombresEquipos.indexOf(equipoBuscado);

    // Si la posición es mayor que -1 significa que sí existe en la lista
    if (posicion != -1) {
        let titulos = copasEquipos[posicion];
        alert("El " + equipoBuscado + " tiene " + titulos + " trofeos de Champions League.");
    } else {
        alert("Equipo no encontrado. Escribe: Real Madrid, AC Milan, Bayern Múnich o Liverpool FC");
    }
}


function generarJornadas() {
    let partidos = [
        "Real Madrid vs Man. City",
        "Bayern vs Arsenal",
        "PSG vs Barcelona",
        "Atlético vs Dortmund"
    ];
    
    let listaHTML = "";

    // Bucle for igual que el de la tabla de multiplicar
    for (let i = 0; i < partidos.length; i++) {
        listaHTML = listaHTML + "⚽ " + partidos[i] + "<br>";
    }

    // Cambiamos el contenido del párrafo del HTML
    document.getElementById("listaPartidos").innerHTML = listaHTML;
}
// NUEVA FUNCIÓN: Para mostrar menos partidos (limpiar la lista)
function mostrarMenosJornadas() {
    // Volvemos a poner el texto original o lo dejamos en blanco
    document.getElementById("listaPartidos").innerHTML = "Haz clic abajo para cargar los partidos.";
}


let contadorLikes = 0; // Variable que empieza en 0

function darLikeHistoria() {
    contadorLikes = contadorLikes + 1; // Sumamos 1
    
    // Cambiamos el texto del elemento en la pantalla
    document.getElementById("textoLikes").textContent = "A " + contadorLikes + " personas les gusta la historia de este torneo.";
}


