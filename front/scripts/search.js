async function searchUser(){
    let nombre = localStorage.getItem("search");
    console.log(nombre)
    if (nombre!="") {
        const data = await fetch('http://localhost:3000/search/'+nombre, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const listaUsuario = await data.json();
    console.log(listaUsuario[0][0])
    let usuarios = document.getElementById("usuarios");
    let cont =1;
    let user = ``;


    for (let i = 0; i < listaUsuario[0].length; i++) {
         var contenedor = document.createElement("tr");
         console.log(listaUsuario[0][i])

         user = `
             <tr>
             <td value="${listaUsuario[0][i].id}" id="iduser${cont}">${listaUsuario[0][i].id}</td>
             <td id="name">${listaUsuario[0][i].name}</td>
             <td id="first_n">${listaUsuario[0][i].first_name}</td>
             <td id="last_n">${listaUsuario[0][i].last_name}</td>
             <td id="adress">${listaUsuario[0][i].adress}</td>
             <td id="phone">${listaUsuario[0][i].phone}</td>
             <td>
                 <button onclick="getId(${listaUsuario[0][i].id})" style="background-color: rgb(255, 196, 0);" class="btn" >Actualizar</button>
                 <button onclick="deleteUser(${listaUsuario[0][i].id})" style="background-color: rgb(255, 196, 0);" class="btn" >Remover</button>
             </td>
             </tr>`;
             
         contenedor.innerHTML += user
         usuarios.appendChild(contenedor)
         cont +=1;
     }
        
    }
}
searchUser();

async function getId(Num){
    console.log(Num)
    location.href="updateUser.html";
    localStorage.setItem("ID",Num);
}

async function search(){
    nombre = document.getElementById("Search").value;
    if (nombre !="") {
        console.log(nombre)
        localStorage.setItem("search",nombre);
        location.href="search.html";   
    }else{
        location.href="index.html"; 
    }

    
}