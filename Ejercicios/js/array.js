function mostrar(){
    let persona = [
        { id: 1, nombre: 'José', edad: 23},
        { id: 2, nombre: 'Beatriz', edad: 19},
        { id: 3, nombre: 'Alejandro', edad: 26},
        { id: 4, nombre: 'Rogelio', edad: 20}
    ];
    function NombreArray(a, b){
        return (a.nombre.localeCompare(b.nombre));
    }
    let orden = persona.sort(NombreArray);
    console.log("Array ordenado Alfabeticamente:")
    console.log(orden);
}

function mostrar2(){
    let persona = [
        { id: 1, nombre: 'José', edad: 23},
        { id: 2, nombre: 'Beatriz', edad: 19},
        { id: 3, nombre: 'Alejandro', edad: 26},
        { id: 4, nombre: 'Rogelio', edad: 20}
    ];
    function Edad(a, b){
        return (b.edad - a.edad)
    }
    let edad = persona.sort(Edad);
    console.log("Array ordenado edad Descendente:")
    console.log(edad);
}


mostrar();
mostrar2();



