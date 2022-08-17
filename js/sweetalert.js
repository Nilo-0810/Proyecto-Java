(async () => {
    const {value: accesorio} = await Swal.fire({
        title: 'Bienvenido!',
        text: 'Elige el producto que buscas',
        icon: 'info',
        confirmButtonText: 'Seleccionar',
        input: 'select',
        inputPlaceholder: 'Accesorio',
        inputValue: '',
        inputOptions: {
            pulsera: 'Pulsera',
            collar: 'Collares',
            anillo: 'Anillos',
        }
    });

    if (accesorio){
        Swal.fire({
            title: `Seleccionaste ${accesorio}`
        });
    }
})()

