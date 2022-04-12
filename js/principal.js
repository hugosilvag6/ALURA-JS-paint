var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");
    var paleta = document.querySelector("input");
    var botao = document.querySelector("#botao");
    var raio2 = 10;
    var mouse = false;

    pincel.fillStyle = "lightgrey";
    pincel.fillRect(0, 0, 600, 400);

    function desenhaBolinha(x, y, raio) {
        pincel.fillStyle = paleta.value;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();
        pincel.strokeStyle = "black";
        pincel.stroke();
    }

    function desenhaCirculo(evento) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        // evento.shiftKey ? desenhaBolinha(x, y, 20) : desenhaBolinha(x, y, 10);
        if (evento.shiftKey && raio2 < 40) {
            raio2 += 10;
        }
        if (evento.altKey && raio2 > 10) {
            raio2 -= 5;
        }
        if (mouse == true) {
            desenhaBolinha(x, y, raio2);
        }
    }

    function limparTela() {
        pincel.fillStyle = "lightgrey";
        pincel.fillRect(0, 0, 600, 400);
    }

    botao.onclick = limparTela;
    tela.onmousemove = desenhaCirculo;
    tela.onmousedown = function () {
        mouse = true;
    };
    tela.onmouseup = function () {
        mouse = false;
    };
    tela.onclick = desenhaCirculo;