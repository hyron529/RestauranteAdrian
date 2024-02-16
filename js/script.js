const inicioSection = document.getElementById("inicio-section");
const reservaSection = document.getElementById("reserva-section");
const nosotrosSection = document.getElementById("nosotros-section");

function mostrarReserva() {
    inicioSection.style.display = "none";
    reservaSection.style.display = "block";
    nosotrosSection.style.display = "none";
}

function mostrarInicio() {
    inicioSection.style.display = "block";
    reservaSection.style.display = "none";
    nosotrosSection.style.display = "none";
}

function mostrarNosotros() {
    inicioSection.style.display = "none";
    reservaSection.style.display = "none";
    nosotrosSection.style.display = "block";
}

window.onload = function() {
    mostrarInicio();
};




