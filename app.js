// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo donde se guardarán los nombres de los amigos
const listaAmigos = [];

/**
 * Función para agregar un amigo a la lista.
 * 1. Obtiene el valor del input.
 * 2. Verifica si está vacío; de ser así, muestra alerta.
 * 3. Si no está vacío, lo agrega al arreglo y al <ul> de la página.
 * 4. Limpia el campo de texto.
 */
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombre = inputAmigo.value.trim();

  // Validar entrada vacía
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar nombre al arreglo
  listaAmigos.push(nombre);

  // Mostrar el nombre en la lista <ul>
  const listaHTML = document.getElementById("listaAmigos");
  const nuevoLi = document.createElement("li");
  nuevoLi.textContent = nombre;
  listaHTML.appendChild(nuevoLi);

  // Limpiar campo de texto y enfocarlo
  inputAmigo.value = "";
  inputAmigo.focus();
}

/**
 * Función para sortear un amigo al azar.
 * 1. Verifica si la lista está vacía.
 * 2. Si no, genera un índice aleatorio y muestra el nombre correspondiente.
 */
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos en la lista para realizar el sorteo.");
    return;
  }

  // Obtener un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSeleccionado = listaAmigos[indiceAleatorio];

  // Mostrar resultado
  const listaResultado = document.getElementById("resultado");
  // Primero, limpiamos cualquier resultado anterior
  listaResultado.innerHTML = "";

  const resultadoLi = document.createElement("li");
  resultadoLi.textContent = `El amigo secreto es: ${amigoSeleccionado}`;
  listaResultado.appendChild(resultadoLi);
}
