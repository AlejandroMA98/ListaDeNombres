async function addUser(){
    nombre = document.getElementById("nombre").value;
    apellido_P = document.getElementById("apellido_P").value;
    apellido_M = document.getElementById("apellido_M").value;
    direccion = document.getElementById("direccion").value;
    telefono = document.getElementById("telefono").value;
    
    if(nombre!="" && apellido_P!= "" && apellido_M!= "" && direccion!= "" && telefono!= ""){
    let add = {name:nombre, first_name:apellido_P, last_name:apellido_M, adress:direccion, phone:telefono};

    let response = await fetch('http://localhost:3000/addusers',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(add)

    });
        let aqui = await response.text();
        console.log(aqui);
        location.href="index.html";
    }else{
        document.getElementById("alerta").innerHTML = "Llena todos los campos para poder registrar a un usuario";
    }
}