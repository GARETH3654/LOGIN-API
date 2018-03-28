
//constantes del DOM
const formData = document.getElementById('formData');
const error = document.getElementById('error');
//APi
const API_URL = 'https://zeratul.herokuapp.com/api/login/';
//listener
formData.addEventListener('submit', getData)

//funciones
function getData(event){
  event.preventDefault();
  let username = document.getElementById('usarname').value;
  let password = document.getElementById('password').value;
  const params = {username, password} //creando un objeto
  login(params);


}

function login(params) {
  console.log(params);
 fetch(
   API_URL,//URL la peticion POST/
   {
     method: 'POST',
     headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      },//cierra headers
      body: JSON.stringify(params)
    }//cierra objeto de fetch
  )//cierra fetch
  .then((response) => response.json()) //me aseguro que responda un JSON
  .then(function(response){

    if (!response.code) {
      window.localStorage.setItem("user",JSON.stringify(response));// guardar en el navegador

      setTimeout(function(){
        window.location.replace('INDEX_PANEL.HTML');
      },2000)

    }
    else {
      error.innerHTML = response.error;
    }
  })
  .catch(function(error){
    console.log(error);
  })
}

// (function isLogged(){
//   console.log('me autollame');
//   const user = JSON.parse(window.localStorage.getItem('user'));
//   if (user)window.location.replace('INDEX_PANEL.HTML')
// })();
