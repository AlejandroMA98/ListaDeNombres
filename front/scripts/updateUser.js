async function Most(){
    let Nu = localStorage.getItem("ID");
    console.log(Nu)
    const data = await fetch('http://localhost:3000/updateusersid/'+Nu, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const listaUsuario = await data.json();
    console.log(listaUsuario[0][0]);

    document.getElementById("nombre").value = listaUsuario[0][0].name;
    document.getElementById("apellido_P").value = listaUsuario[0][0].first_name;
    document.getElementById("apellido_M").value = listaUsuario[0][0].last_name;
    document.getElementById("direccion").value = listaUsuario[0][0].adress;
    document.getElementById("telefono").value = listaUsuario[0][0].phone;
   
}
Most();

async function updateUser(){
    let Nu = localStorage.getItem("ID");
    nombre = document.getElementById("nombre").value;
    apellido_P = document.getElementById("apellido_P").value;
    apellido_M = document.getElementById("apellido_M").value;
    direccion = document.getElementById("direccion").value;
    telefono = document.getElementById("telefono").value;
    
    if(nombre!="" && apellido_P!= "" && apellido_M!= "" && direccion!= "" && telefono!= ""){
    let add = {id:Nu,name:nombre, first_name:apellido_P, last_name:apellido_M, adress:direccion, phone:telefono};

    let response = await fetch('http://localhost:3000/updateusers',{
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(add)

    });
        let aqui = await response.text();
        console.log(aqui);
        location.href="index.html";
    }else{
        document.getElementById("alerta").innerHTML = "Llena todos los campos para poder actualizar a este usuario";
    }

}

