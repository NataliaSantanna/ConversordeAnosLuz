function calcular() {
    let numerodoususario = document.getElementById ('InputDoUsuario').value
    let AnosLuzKm = 9500000000000
    let divresultado = document.getElementById('resultado')
    divresultado.innerHTML=`${AnosLuzKm*numerodoususario} km`

}