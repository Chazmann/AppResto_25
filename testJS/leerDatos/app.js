
const archivoJson = "datos.json";
// ruteo al archivo JSON que contiene los datos
async function obtenerDatos() {
  try {
    // uso fetch para obtener los datos del archivo JSON
    const response = await fetch(archivoJson);
    // manejo de errores si la respuesta no es correcta
    if (!response.ok) {
      throw new Error(`Error al cargar los datos: ${response.statusText}`);
    }
    // convierto la respuesta a formato JSON

    const datos = await response.json();
    // y luego itero sobre los datos para mostrarlos en la lista

    const listaDatos = document.getElementById("lista-datos");
    datos.forEach((usuario) => {
      const li = document.createElement("li");
      li.textContent = `ID: ${usuario.id}, Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Ciudad: ${usuario.ciudad}`;
      listaDatos.appendChild(li);
    });
    // manejo de errores en caso de que ocurra algún problema durante la operación fetch
  } catch (error) {
    console.error("Hubo un problema con la operación fetch:", error);
    // muestro un mensaje de error en la lista
    const listaDatos = document.getElementById("lista-datos");
    listaDatos.textContent = "No se pudieron cargar los datos.";
  }
}
// evento que se dispara cuando el DOM está completamente cargado
// para asegurarme de que el script se ejecute después de que el contenido esté listo
document.addEventListener("DOMContentLoaded", obtenerDatos);

const version2 = "datos.json";
async function obtenerDatosChaz() {
  try {
    const response = await fetch(version2);

    if (!response.ok) {
      throw new Error(`Error al cargar los datos: ${response.statusText}`);
    }
    const datos = await response.json();
    const contenedorChatbot = document.getElementById("chatbot");
    datos.forEach((usuario) => {
      contenedorChatbot.innerHTML += `
        <span style="padding:1em; background-color:steelblue;color:white;border-radius:2em; text-align:center;">ID: ${usuario.id}, Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Ciudad: ${usuario.ciudad}</span>
    `;
    });
  } catch (error) {
    console.error("Hubo un problema con la operación fetch:", error);
    
   const contenedorChatbot = document.getElementById("chatbot");
    contenedorChatbot.textContent = "No se pudieron cargar los datos.";
  }
}

document.addEventListener("DOMContentLoaded", obtenerDatosChaz);
// chaza ponete a laburar un poco no haces nada te la pasaste charlando toda la tarde/noche y ahora no tenes nada hecho, no te preocupes que yo te ayudo a completar el ejercicio, pero la proxima ponete las pilas y labura un poco mas, que si no no vas a aprender nada, y despues te vas a quejar de que no sabes nada, y yo te voy a decir que te pusiste a chatear en vez de laburar, asi que ponete las pilas y labura un poco mas, que si no no vas a aprender nada, y despues te vas a quejar de que no sabes nada, y yo te voy a decir que te pusiste a chatear en vez de laburar.
// chaza ponete a laburar un poco no haces nada te la pasaste charlando toda la tarde/noche y ahora no tenes nada hecho, no te preocupes que yo te ayudo a completar el ejercicio, pero la proxima ponete las pilas y labura un poco mas, que si no no vas a aprender nada, y despues te vas a quejar de que no sabes nada, y yo te voy a decir que te pusiste a chatear en vez de laburar, asi que ponete las pilas y labura un poco mas, que si no no vas a aprender nada, y despues te vas a quejar de que no sabes nada, y yo te voy a decir que te pusiste a chatear en vez de laburar.
// chaza ponete a laburar un poco no haces nada te la pasaste charlando 
