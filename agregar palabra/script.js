    

    let locuras = document.querySelector("#agregar");
    locuras.addEventListener('click', Palabra);

    function Palabra() {
        let textarea = document.querySelector('textarea').value;
        palabras.push(textarea);
        document.getElementsByTagName('textarea')[0].value = '';
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu palabra se agrego correctamente',
            showConfirmButton: false,
            timer: 1800
          })
    }
        


