var vezdojogador = false;
var rodada = 2;
var atraso = 1000*rodada;
function vezjogador(){


}




function vezjogo() {

    for (let i = 0; i < rodada; i++) {

        

        var sorteio = Math.floor(Math.random() * 4)
        var armazemnumero = [];
        armazemnumero.push(sorteio)



        verificar()

        function verificar() {

            for (let verificador = 0; verificador < armazemnumero.length; verificador++) {



                if (armazemnumero == 0) {
                    document.getElementById("vermelho")


                    for (var i = 0; i < 1; i++) {
                        (function (i) {
                            setTimeout(function () {
                                vermelho.style.backgroundColor = "rgb(218, 0, 0)";
                                setTimeout(voltarcor, 1000)
                                function voltarcor() {
                                    vermelho.style.backgroundColor = "rgb(141, 0, 0)";
                                }

                            }, 1000 * i);
                        })(i);
                    }



                } else if (armazemnumero == 1) {
                    document.getElementById("verde")

                    for (var i = 0; i < 1; i++) {
                        (function (i) {
                            setTimeout(function () {
                                verde.style.backgroundColor = "rgb(0, 139, 0";
                                setTimeout(voltarcor, 1000)
                                function voltarcor() {
                                    verde.style.backgroundColor = "rgb(1, 87, 1)";
                                }

                            }, 1000 * i);
                        })(i);
                    }



                } else if (armazemnumero == 2) {
                    document.getElementById("azul")

                    for (var i = 0; i < 1; i++) {
                        (function (i) {
                            setTimeout(function () {
                                azul.style.backgroundColor = "rgb(1, 1, 170)";
                                setTimeout(voltarcor, 1000)
                                function voltarcor() {
                                    azul.style.backgroundColor = "rgb(0, 0, 110)";
                                }

                            }, 1000 * i);
                        })(i);
                    }


                } else if (armazemnumero == 3) {
                    document.getElementById("amarelo")

                    for (var i = 0; i < 1; i++) {
                        (function (i) {
                            setTimeout(function () {
                                amarelo.style.backgroundColor = "rgb(179, 179, 1)";
                                setTimeout(voltarcor, 1000)
                                function voltarcor() {
                                    amarelo.style.backgroundColor = "rgb(133, 133, 0)";
                                }

                            }, 1000 * i);
                        })(i);
                    }

                }


            }

        }

    }
}

