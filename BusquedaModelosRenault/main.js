

//autos.forEach((auto, i) =>{
    //console.log(auto.name);
    //document.querySelector("#contenedor").innerHTML+=`<div class="col-3">
    //<div class="card mb-5">
        //<img src="${auto.image}" class="card-img-top" alt="...">
       // <div class="card-body">
           // <h5 class="card-title">${auto.name}</h5>
           // <p class="card-text">${auto.note}</p>
           // <a href="${auto.Renaultlink}" target ="_blank" class = "btn btn-primary"> Ver más</a>
       // </div>
   // </div>
  //</div>`
//}) 

document.getElementById("formulario").addEventListener("submit", buscar);
document.getElementById("boton").addEventListener("click",vehículo)

function vehículo(){
    const arreglo_filtrado = autos.filter((auto)=>{
        return auto.version == "zen";
    });

    dibujar(arreglo_filtrado);
}

function buscar(evt){
    evt.preventDefault();
    let carro_a_buscar = document.getElementById("busqueda").value;

    const aux = autos.filter((auto)=>{
        /*if(elephant.name=="Babar")
            return true;
        else
            return false;*/

        let carro = auto.name.toLowerCase();
        let carro2 = carro_a_buscar.toLowerCase()

        return carro.includes(carro2);

        // return auto.name.toLowerCase().includes(auto_a_buscar.toLowerCase())

    });

    dibujar(aux);

}


function dibujar(autos_filter){
    document.querySelector("#contenedor").innerHTML="";
    autos_filter.forEach((auto, i)=>{
            document.querySelector("#contenedor").innerHTML+=`<div class="col-3">
            <div class="card mb-5">
                <img src="${auto.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${auto.name}</h5>
                    <p class="card-text">${auto.note}</p>
                    <a href="${auto.Renaultlink}" target="_blank" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>`;
    })
}



dibujar(autos);