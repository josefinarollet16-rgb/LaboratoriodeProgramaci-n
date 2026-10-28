// =====================================================
// 1. DATOS (arrays de objetos)
// =====================================================
const frases = [
    { texto: "Leer es soñar de la mano de otro.", autor: "Fernando Pessoa", tema: "Lectura" },
    { texto: "Siempre imaginé que el Paraíso sería algún tipo de biblioteca.", autor: "Jorge Luis Borges", tema: "Libros" },
    { texto: "Un libro debe ser el hacha que rompa el mar helado que llevamos dentro.", autor: "Franz Kafka", tema: "Libros" },
    { texto: "Quien lee mucho y anda mucho, ve mucho y sabe mucho.", autor: "Miguel de Cervantes", tema: "Sabiduría" },
    { texto: "Los libros son espejos: solo se ve en ellos lo que uno ya lleva dentro.", autor: "Carlos Ruiz Zafón", tema: "Libros" },
    { texto: "Uno no es lo que es por lo que escribe, sino por lo que ha leído.", autor: "Jorge Luis Borges", tema: "Lectura" },
    { texto: "La lectura hace al hombre completo; la conversación, ágil; y el escribir, preciso.", autor: "Francis Bacon", tema: "Sabiduría" },
    { texto: "Un lector vive mil vidas antes de morir.", autor: "George R. R. Martin", tema: "Lectura" }
];

// "foto" = imagen de internet (Wikimedia Commons). "respaldo" = imagen local por si no hay internet.
const recomendaciones = [
    {
        nombre: "Café con leche",
        descripcion: "Intenso y cremoso, ideal para acompañar una buena lectura.",
        precio: 3800,
        foto: "https://commons.wikimedia.org/wiki/Special:FilePath/Cafeconleche.jpg?width=900",
        pagina: "https://commons.wikimedia.org/wiki/File:Cafeconleche.jpg",
        respaldo: "images/cafe.jpg",
        alt: "Taza de café con leche"
    },
    {
        nombre: "Medialunas de manteca",
        descripcion: "Recién horneadas, livianas y con un toque dulce.",
        precio: 3200,
        foto: "https://commons.wikimedia.org/wiki/Special:FilePath/Croissant-Petr_Kratochvil.jpg?width=900",
        pagina: "https://commons.wikimedia.org/wiki/File:Croissant-Petr_Kratochvil.jpg",
        respaldo: "images/medialunas.jpg",
        alt: "Medialuna dorada"
    },
    {
        nombre: "Torta de chocolate",
        descripcion: "Bizcochuelo húmedo con chocolate, para los golosos.",
        precio: 4900,
        foto: "https://commons.wikimedia.org/wiki/Special:FilePath/Chocolate_cake_and_Victoria_sponge.jpg?width=900",
        pagina: "https://commons.wikimedia.org/wiki/File:Chocolate_cake_and_Victoria_sponge.jpg",
        respaldo: "images/torta.jpg",
        alt: "Torta de chocolate"
    },
    {
        nombre: "Rincón de lectura",
        descripcion: "Pedí un libro en el mostrador y leelo tranquilo en el local.",
        precio: 0,
        foto: "https://commons.wikimedia.org/wiki/Special:FilePath/Old_book_bindings.jpg?width=900",
        pagina: "https://commons.wikimedia.org/wiki/File:Old_book_bindings.jpg",
        respaldo: "images/libro.jpg",
        alt: "Estantería con libros antiguos"
    }
];

const carta = [
    { nombre: "☕ Café doble", precio: 3800 },
    { nombre: "☕ Cortado", precio: 3200 },
    { nombre: "🥐 Medialunas (x3)", precio: 3200 },
    { nombre: "🥪 Tostado de jamón y queso", precio: 5500 },
    { nombre: "🍰 Torta de chocolate", precio: 4900 },
    { nombre: "🍵 Té de hierbas", precio: 2900 }
];

const paletas = [
    { nombre: "Violeta", color: "#7c3aed", hover: "#6d28d9" },
    { nombre: "Coral", color: "#ef476f", hover: "#d93a60" },
    { nombre: "Turquesa", color: "#0ea5a4", hover: "#0b8a89" },
    { nombre: "Naranja", color: "#f77f00", hover: "#d96f00" }
];

// =====================================================
// 2. ELEMENTOS DEL DOM
// =====================================================
const saludo = document.getElementById("saludo");
const reloj = document.getElementById("reloj");
const mensaje = document.getElementById("mensaje");

const contador = document.getElementById("contador");
const textoFrase = document.getElementById("texto-frase");
const autorFrase = document.getElementById("autor-frase");
const etiquetaTema = document.getElementById("etiqueta-tema");
const botonesFiltro = document.querySelectorAll(".filtro");

const btnAnterior = document.getElementById("btn-anterior");
const btnNuevaFrase = document.getElementById("btn-nueva-frase");
const btnCopiar = document.getElementById("btn-copiar");
const btnFavorita = document.getElementById("btn-favorita");
const btnWhatsapp = document.getElementById("btn-whatsapp");
const btnAuto = document.getElementById("btn-auto");
const btnLetraMenos = document.getElementById("btn-letra-menos");
const btnLetraMas = document.getElementById("btn-letra-mas");
const btnCambiarTema = document.getElementById("btn-cambiar-tema");
const btnPaleta = document.getElementById("btn-paleta");

const listaFavoritos = document.getElementById("lista-favoritos");
const sinFavoritos = document.getElementById("sin-favoritos");
const cantidadFavoritas = document.getElementById("cantidad-favoritas");

const imgReco = document.getElementById("img-reco");
const creditoReco = document.getElementById("credito-reco");
const nombreReco = document.getElementById("nombre-reco");
const descReco = document.getElementById("desc-reco");
const precioReco = document.getElementById("precio-reco");
const contadorReco = document.getElementById("contador-reco");
const btnRecoAnterior = document.getElementById("btn-reco-anterior");
const btnRecoSiguiente = document.getElementById("btn-reco-siguiente");
const btnRecoPedir = document.getElementById("btn-reco-pedir");

const listaCarta = document.getElementById("lista-carta");
const listaPedido = document.getElementById("lista-pedido");
const sinPedido = document.getElementById("sin-pedido");
const total = document.getElementById("total");
const btnVaciar = document.getElementById("btn-vaciar");
const btnConfirmar = document.getElementById("btn-confirmar");

const cuenta = document.getElementById("cuenta");
const selectMinutos = document.getElementById("minutos");
const btnIniciar = document.getElementById("btn-iniciar");
const btnPausar = document.getElementById("btn-pausar");
const btnReiniciar = document.getElementById("btn-reiniciar");

// =====================================================
// 3. VARIABLES DE ESTADO
// =====================================================
let indiceActual = 0;
let indiceReco = 0;
let indicePaleta = 0;
let filtroActual = "Todas";
let historial = [];
let favoritas = [];
let pedido = [];             // [{ nombre, precio, cantidad }]
let vistas = 1;
let temporizadorAuto = null;
let tamanoLetra = 1.8;
let temporizadorMensaje = null;
let segundosRestantes = 15 * 60;
let temporizadorLectura = null;

// =====================================================
// 4. FUNCIONES AUXILIARES
// =====================================================
function mostrarMensaje(texto) {
    mensaje.textContent = texto;
    mensaje.classList.add("visible");
    clearTimeout(temporizadorMensaje);
    temporizadorMensaje = setTimeout(function () {
        mensaje.classList.remove("visible");
    }, 2200);
}

function formatearPrecio(numero) {
    return "$ " + numero.toLocaleString("es-AR");
}

// Crea un botón chiquito (lo usamos en varias listas)
function crearBoton(texto, etiqueta, accion) {
    const boton = document.createElement("button");
    boton.textContent = texto;
    boton.className = "btn-chico";
    boton.setAttribute("aria-label", etiqueta);
    boton.addEventListener("click", accion);
    return boton;
}

// =====================================================
// 5. FRASES
// =====================================================
function mostrarFrase(indice) {
    indiceActual = indice;
    const frase = frases[indice];

    textoFrase.classList.add("cambiando");
    autorFrase.classList.add("cambiando");

    setTimeout(function () {
        textoFrase.textContent = "“" + frase.texto + "”";
        autorFrase.textContent = "— " + frase.autor;
        etiquetaTema.textContent = frase.tema;
        textoFrase.classList.remove("cambiando");
        autorFrase.classList.remove("cambiando");
    }, 250);

    actualizarBotonFavorita();
}

// Elige una frase al azar del tema elegido, distinta a la actual
function elegirIndice() {
    const posibles = [];
    for (let i = 0; i < frases.length; i++) {
        const coincideTema = filtroActual === "Todas" || frases[i].tema === filtroActual;
        if (coincideTema && i !== indiceActual) {
            posibles.push(i);
        }
    }
    if (posibles.length === 0) {
        return null;
    }
    return posibles[Math.floor(Math.random() * posibles.length)];
}

function nuevaFrase() {
    const nuevo = elegirIndice();
    if (nuevo === null) {
        mostrarMensaje("No hay más frases de este tema");
        return;
    }
    historial.push(indiceActual);
    mostrarFrase(nuevo);
    vistas++;
    contador.textContent = "Frases vistas: " + vistas;
}

btnNuevaFrase.addEventListener("click", nuevaFrase);

btnAnterior.addEventListener("click", function () {
    if (historial.length === 0) {
        mostrarMensaje("No hay una frase anterior todavía");
        return;
    }
    mostrarFrase(historial.pop());
});

// Filtros por tema
botonesFiltro.forEach(function (boton) {
    boton.addEventListener("click", function () {
        filtroActual = boton.dataset.tema;
        botonesFiltro.forEach(function (b) { b.classList.remove("activo"); });
        boton.classList.add("activo");
        mostrarMensaje("Tema: " + filtroActual);
        if (filtroActual !== "Todas" && frases[indiceActual].tema !== filtroActual) {
            nuevaFrase();
        }
    });
});

btnCopiar.addEventListener("click", function () {
    const frase = frases[indiceActual];
    const completo = "“" + frase.texto + "” — " + frase.autor;
    navigator.clipboard.writeText(completo)
        .then(function () { mostrarMensaje("¡Frase copiada!"); })
        .catch(function () { mostrarMensaje("No se pudo copiar"); });
});

// Compartir por WhatsApp (abre una pestaña nueva con el texto armado)
btnWhatsapp.addEventListener("click", function () {
    const frase = frases[indiceActual];
    const completo = "“" + frase.texto + "” — " + frase.autor + " (Café & Letras)";
    window.open("https://wa.me/?text=" + encodeURIComponent(completo), "_blank");
});

btnAuto.addEventListener("click", function () {
    if (temporizadorAuto === null) {
        temporizadorAuto = setInterval(nuevaFrase, 5000);
        btnAuto.textContent = "⏸ Detener";
        btnAuto.classList.add("activa");
        mostrarMensaje("Cambiará cada 5 segundos");
    } else {
        clearInterval(temporizadorAuto);
        temporizadorAuto = null;
        btnAuto.textContent = "▶ Automática";
        btnAuto.classList.remove("activa");
        mostrarMensaje("Frase automática detenida");
    }
});

btnLetraMas.addEventListener("click", function () {
    if (tamanoLetra < 3) {
        tamanoLetra += 0.2;
        textoFrase.style.fontSize = tamanoLetra + "rem";
    } else {
        mostrarMensaje("Tamaño máximo");
    }
});

btnLetraMenos.addEventListener("click", function () {
    if (tamanoLetra > 1.2) {
        tamanoLetra -= 0.2;
        textoFrase.style.fontSize = tamanoLetra + "rem";
    } else {
        mostrarMensaje("Tamaño mínimo");
    }
});

document.addEventListener("keydown", function (evento) {
    const tag = evento.target.tagName;
    if (evento.code === "Space" && tag !== "BUTTON" && tag !== "SELECT") {
        evento.preventDefault();
        nuevaFrase();
    }
});

// =====================================================
// 6. FAVORITAS (se guardan en localStorage)
// =====================================================
function guardarFavoritas() {
    localStorage.setItem("favoritas", JSON.stringify(favoritas));   // array -> texto
}

function actualizarBotonFavorita() {
    if (favoritas.includes(indiceActual)) {
        btnFavorita.textContent = "♥ Quitar";
        btnFavorita.classList.add("activa");
    } else {
        btnFavorita.textContent = "♡ Favorita";
        btnFavorita.classList.remove("activa");
    }
}

function mostrarFavoritas() {
    listaFavoritos.innerHTML = "";
    cantidadFavoritas.textContent = favoritas.length;
    sinFavoritos.hidden = favoritas.length > 0;

    favoritas.forEach(function (indice) {
        const li = document.createElement("li");
        const texto = document.createElement("span");
        texto.textContent = "“" + frases[indice].texto + "” — " + frases[indice].autor;
        li.appendChild(texto);
        li.appendChild(crearBoton("✕", "Quitar de favoritas", function () {
            quitarFavorita(indice);
        }));
        listaFavoritos.appendChild(li);
    });
}

function quitarFavorita(indice) {
    favoritas = favoritas.filter(function (i) { return i !== indice; });
    guardarFavoritas();
    mostrarFavoritas();
    actualizarBotonFavorita();
}

btnFavorita.addEventListener("click", function () {
    if (favoritas.includes(indiceActual)) {
        quitarFavorita(indiceActual);
        mostrarMensaje("Quitada de favoritas");
    } else {
        favoritas.push(indiceActual);
        guardarFavoritas();
        mostrarFavoritas();
        actualizarBotonFavorita();
        mostrarMensaje("¡Guardada en favoritas!");
    }
});

// =====================================================
// 7. TEMA OSCURO Y COLOR DE ACENTO
// =====================================================
if (localStorage.getItem("tema") === "oscuro") {
    document.body.classList.add("modo-oscuro");
}

btnCambiarTema.addEventListener("click", function () {
    const esOscuro = document.body.classList.toggle("modo-oscuro");
    localStorage.setItem("tema", esOscuro ? "oscuro" : "claro");
});

// Cambia las variables CSS desde JavaScript
btnPaleta.addEventListener("click", function () {
    indicePaleta = (indicePaleta + 1) % paletas.length;   // 0,1,2,3,0,1...
    const paleta = paletas[indicePaleta];
    document.documentElement.style.setProperty("--acento", paleta.color);
    document.documentElement.style.setProperty("--acento-hover", paleta.hover);
    mostrarMensaje("Color: " + paleta.nombre);
});

// =====================================================
// 8. RECOMENDACIONES CON FOTOS DE INTERNET
// =====================================================
function mostrarRecomendacion(indice) {
    indiceReco = indice;
    const reco = recomendaciones[indice];

    imgReco.dataset.respaldoUsado = "no";
    imgReco.src = reco.foto;
    imgReco.alt = reco.alt;
    creditoReco.href = reco.pagina;
    nombreReco.textContent = reco.nombre;
    descReco.textContent = reco.descripcion;
    precioReco.textContent = reco.precio === 0 ? "Gratis en el local" : formatearPrecio(reco.precio);
    contadorReco.textContent = (indice + 1) + " / " + recomendaciones.length;
}

// Si la foto de internet no carga, se usa la imagen local
imgReco.addEventListener("error", function () {
    if (imgReco.dataset.respaldoUsado !== "si") {
        imgReco.dataset.respaldoUsado = "si";
        imgReco.src = recomendaciones[indiceReco].respaldo;
    }
});

btnRecoSiguiente.addEventListener("click", function () {
    mostrarRecomendacion((indiceReco + 1) % recomendaciones.length);
});

btnRecoAnterior.addEventListener("click", function () {
    mostrarRecomendacion((indiceReco - 1 + recomendaciones.length) % recomendaciones.length);
});

btnRecoPedir.addEventListener("click", function () {
    const reco = recomendaciones[indiceReco];
    if (reco.precio === 0) {
        mostrarMensaje("Ese se pide en el mostrador");
        return;
    }
    agregarAlPedido(reco.nombre, reco.precio);
});

// =====================================================
// 9. CARTA Y PEDIDO
// =====================================================
function mostrarCarta() {
    carta.forEach(function (producto) {
        const li = document.createElement("li");
        const nombre = document.createElement("span");
        nombre.textContent = producto.nombre;
        const precio = document.createElement("span");
        precio.className = "precio";
        precio.textContent = formatearPrecio(producto.precio);

        li.appendChild(nombre);
        li.appendChild(precio);
        li.appendChild(crearBoton("+ Agregar", "Agregar " + producto.nombre, function () {
            agregarAlPedido(producto.nombre, producto.precio);
        }));
        listaCarta.appendChild(li);
    });
}

function agregarAlPedido(nombre, precio) {
    let existente = null;
    pedido.forEach(function (item) {
        if (item.nombre === nombre) {
            existente = item;
        }
    });

    if (existente !== null) {
        existente.cantidad++;
    } else {
        pedido.push({ nombre: nombre, precio: precio, cantidad: 1 });
    }
    mostrarPedido();
    mostrarMensaje("Agregado: " + nombre);
}

function mostrarPedido() {
    listaPedido.innerHTML = "";
    sinPedido.hidden = pedido.length > 0;

    pedido.forEach(function (item, posicion) {
        const li = document.createElement("li");
        const texto = document.createElement("span");
        texto.textContent = item.nombre + " × " + item.cantidad + " — " + formatearPrecio(item.precio * item.cantidad);
        li.appendChild(texto);
        li.appendChild(crearBoton("✕", "Quitar " + item.nombre, function () {
            pedido.splice(posicion, 1);          // borra ese producto
            mostrarPedido();
        }));
        listaPedido.appendChild(li);
    });

    // reduce suma todos los subtotales
    const suma = pedido.reduce(function (acumulado, item) {
        return acumulado + item.precio * item.cantidad;
    }, 0);
    total.textContent = "Total: " + formatearPrecio(suma);
}

btnVaciar.addEventListener("click", function () {
    pedido = [];
    mostrarPedido();
    mostrarMensaje("Pedido vaciado");
});

btnConfirmar.addEventListener("click", function () {
    if (pedido.length === 0) {
        mostrarMensaje("Primero agregá algo a tu pedido");
        return;
    }
    mostrarMensaje("¡Pedido confirmado! Ya lo preparamos ☕");
    pedido = [];
    mostrarPedido();
});

// =====================================================
// 10. TEMPORIZADOR DE LECTURA
// =====================================================
function mostrarCuenta() {
    const min = Math.floor(segundosRestantes / 60);
    const seg = segundosRestantes % 60;
    cuenta.textContent = String(min).padStart(2, "0") + ":" + String(seg).padStart(2, "0");
}

btnIniciar.addEventListener("click", function () {
    if (temporizadorLectura !== null) {
        return;                                   // ya está corriendo
    }
    temporizadorLectura = setInterval(function () {
        segundosRestantes--;
        mostrarCuenta();
        if (segundosRestantes <= 0) {
            clearInterval(temporizadorLectura);
            temporizadorLectura = null;
            mostrarMensaje("¡Terminó tu rato de lectura! 📖");
        }
    }, 1000);
});

btnPausar.addEventListener("click", function () {
    clearInterval(temporizadorLectura);
    temporizadorLectura = null;
});

function reiniciarCuenta() {
    clearInterval(temporizadorLectura);
    temporizadorLectura = null;
    segundosRestantes = Number(selectMinutos.value) * 60;
    mostrarCuenta();
}

btnReiniciar.addEventListener("click", reiniciarCuenta);
selectMinutos.addEventListener("change", reiniciarCuenta);

// =====================================================
// 11. SALUDO Y RELOJ
// =====================================================
function actualizarReloj() {
    const ahora = new Date();
    const hora = ahora.getHours();

    reloj.textContent = ahora.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });

    if (hora >= 5 && hora < 12) {
        saludo.textContent = "☀ Buenos días";
    } else if (hora >= 12 && hora < 20) {
        saludo.textContent = "☕ Buenas tardes";
    } else {
        saludo.textContent = "🌙 Buenas noches";
    }
}

actualizarReloj();
setInterval(actualizarReloj, 1000);

// =====================================================
// 12. INICIO
// =====================================================
try {
    favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];   // texto -> array
} catch (error) {
    favoritas = [];
}

mostrarFavoritas();
actualizarBotonFavorita();
mostrarRecomendacion(0);
mostrarCarta();
mostrarPedido();
mostrarCuenta();
