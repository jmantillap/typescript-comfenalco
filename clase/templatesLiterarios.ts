(function(){


    function getEdad() {
        return 10 + 12;
    }

    //templates literarios
    const nombre:string= 'Andres';
    const apellido:string= 'Herrera';
    const edad:number= 23;

    //const salida: string= nombre + apellido + edad;
    const salida: string= `Mi nombre es ${nombre} ${apellido} y mi edad es ${edad}  o ${getEdad()}`;


    console.log(salida);



}())