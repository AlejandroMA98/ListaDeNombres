async function deleteUser(Num){

     let response = await fetch('http://localhost:3000/deleteusers/'+Num,{
     method: 'DELETE',
     headers: {
         'Content-Type' : 'application/json'
         
     }
});
location.href="index.html";
}
