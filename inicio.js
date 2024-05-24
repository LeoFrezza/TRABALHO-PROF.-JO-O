var lanchesArray = ["Pastel", "Pão de Queijo", "Torrada", "Esfirra", "Quibe", "Pizza"];
var bebidasArray = ["Água", "Cachaça", "Caipirinha", "Café", "Chop", "Cerveja Artesanal", "Energético", "Licor", "Mojito", "Refri", "Suco", "Vinho", "Whiskey"];
var mesaArray = ["Mesa 1", "Mesa 2", "Mesa 3", "Mesa 4", "Mesa 5", "Mesa 6", "Mesa 7", "Mesa 8", "Mesa 9", "Mesa 10"];

var pedido = document.getElementById("pedido");

pedido.addEventListener("submit", function(event) {
    event.preventDefault();

    var mesa = document.getElementById("mesa").value;
    var lanches = parseInt(document.getElementById("lanches").value);
    var bebidas = parseInt(document.getElementById("bebidas").value);

    if (lanches >= 1 && lanches <= 6 && bebidas >= 1 && bebidas <= 13 && mesa) {
        var lanches = lanchesArray[lanches - 1];
        var bebidas = bebidasArray[bebidas - 1];

        var resultado = document.getElementById("resultado");
        resultado.innerHTML = '<div style="background-color: salmon; font-size: 15px; font-weight: bold; padding: 5px; margin-bottom: 5px;">Reservada: ' + mesa + '</div>' +
                            '<div style="background-color: salmon; font-size: 15px; font-weight: bold; padding: 5px;">Pedidos realizados: ' + lanches + ' - ' + bebidas + '</div>';
    } else {
        alert("Por favor, selecione um número válido, correspondente a uma mesa e aos pedidos");
    }
});
