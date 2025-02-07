// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let resultado = document.getElementById("resultado");
let lista = document.getElementById("listaAmigos");

function agregarAmigo() {
    let nombreIngresado = document.getElementById("amigo").value.trim();
    console.log(nombreIngresado);
    if (nombreIngresado === "") {
        alert("Por favor, inserte un nombre.");
        console.log(amigos);
        limpiarCaja();
        mostrarLista();
    } else {
        resultado.innerHTML = ""
        amigos.push(nombreIngresado);
        limpiarCaja();
        mostrarLista();
        console.log(amigos);
    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = '';
}

function mostrarLista() {

    lista.innerHTML = "";
    amigos.forEach(amigo => {
      lista.innerHTML += `<li>${amigo}</li>`;
    });
  }

function sortearAmigo() {
    let numeroGenerado = Math.floor(Math.random() * amigos.length);
    console.log(numeroGenerado);

    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos en la lista para sortear.";
        return;
    } else {
        resultado.innerHTML = `El amigo sorteado es: ${amigos[numeroGenerado]}`;
        console.log(amigos[numeroGenerado]);
        lista.innerHTML = ""
        amigos = [];
        
    }
   
}

