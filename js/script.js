const tareaNueva =  document.querySelector("#tareaNueva");
const listaTareas = document.querySelector('#lista-tareas');
let tareaImpresa = [];


//con este codigo revisamos si hay elementos en local storage, en caso de que si los asignamos al arreglo y lo inyectamos al HTML
document.addEventListener('DOMContentLoaded', () => 
{

    
if(localStorage.length >= 1)
{   
    console.log('si');

    var totalKey = localStorage.length;
    for(i = 0; i < totalKey; i++)
    {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);

    const objLocalS = 
    {
        id: key,
        tarea: value
    }
    tareaImpresa = [...tareaImpresa, objLocalS];
    inyectarHTML();
    }

}

})




//inyectando datos a local storage
function DatosParaLS()
{
   
   localStorage.setItem(Date.now(), tareaNueva.value);

   asignarValoresaObjeto(Date.now());
   tareaNueva.value = '';
   

}

//asignando los datos de local storage en un objeto
function asignarValoresaObjeto(id)
{
    const objTareas = 
    {
        id: id,
        tarea: localStorage.getItem(id)
    }

//los datos del objeto los asignamos al arreglo y lo mandamos a imprimir en el html
    tareaImpresa = [...tareaImpresa, objTareas];
    inyectarHTML();
    
    
}


function inyectarHTML()
{
    
    limpiarHTML();
    tareaImpresa.forEach(tarea => {

    const tareadiv = document.createElement('DIV');
    tareadiv.classList.add('tarea');
    tareadiv.innerHTML =
    `
    <p>${tarea.tarea}</p>
    <button class="x" onclick="eliminar(${tarea.id});">X</button>
    `;
    listaTareas.appendChild(tareadiv);


    });

    
}


function limpiarHTML()
{
listaTareas.innerHTML = '';
}

function eliminar(id)
{
    localStorage.removeItem(id);
    location.reload();
}

















