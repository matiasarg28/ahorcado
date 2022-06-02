

    let palabras = [
        'manzanas',
        'limon',
        'hamburguesa',
        'papas',
        'tacos',
        'aventura'
    ];
    
    //------CONSTANTES Y VARIABLES------//

    const parrafo = document.getElementById('palabra_a_adivinar');

    let cant_errores = 0;
    let cant_aciertos = 0;

    const cant_palabras = palabras.length;

    //---------PALABRAS AL AZAR--------//

    let valor_al_Azar = Math.floor(Math.random() * palabras.length);

    let array = palabras[valor_al_Azar];

    let cant_letras = array.length;

    //---------CREACION DEL ELEMENTO SPAN------//

    for (let i = 0; i < cant_letras; i++) {
        let span = document.createElement('span');

        span.style.borderBottom = '1px solid black';
        parrafo.appendChild(span);

    }

    //---------BOTONES INTERACTIVOS---------//

    let btn_letras = document.querySelectorAll(".botones_juego button");

    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].addEventListener('click', click_letras);
    }
    

    //-------FUNCION CLICK--------//

    function click_letras(event) {
        const spans = document.querySelectorAll('span');
        const button = event.target; // cual de todas las letras llamo la funcion
        button.disabled = true; // desabilita la letra presionada
        const letra = button.innerHTML;
        let acerto = false;
        for (let i = 0; i < array.length; i++) {
            if (letra == array[i]) { // la variable i es la posicion de la letra en la palabra, que coincide con el span que tenmos que adivinar
                spans[i].innerHTML = letra;
                cant_aciertos++;
                acerto = true;
            }

        }

        if (acerto == false) {
            cant_errores++;
            const source = `dibujos/img${cant_errores}.png`;
            const imagen = document.getElementById(`img`);
            imagen.src = source;
        }

        if (cant_errores == 7) {
            Swal.fire({
                title: 'Perdiste!',
                text: 'La palabra era ' + array,
                color: 'black',
                imageUrl: 'https://c.tenor.com/-OE02caO9pMAAAAC/depression-sad.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              });
            game_over();
        } else if (cant_aciertos == array.length) {
            Swal.fire({
                imageUrl:'dibujos/PngItem_1725266.png',
                background:'transparent',
                animation:false,
                customClass: {
                    popup: 'animated animate__backInDown'
                }
              })
            game_over();
        }


    }

    //------FUNCION FIN DE JUEGO-------//

    function game_over() {
        for (let i = 0; i < btn_letras.length; i++) {
            btn_letras[i].disabled = true;
        }

        button.disabled = false;
    }
    
    let nuevoJuego = document.getElementById(`btn`);
    nuevoJuego.addEventListener('click', () => {
        location.reload();
    })


