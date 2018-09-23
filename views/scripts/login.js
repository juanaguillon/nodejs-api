const formLogin = document.querySelector('#login');
formLogin.addEventListener( 'submit',function( e ){
  e.preventDefault();
  const formData = new FormData( formLogin );
  var obJSON = {}

  formData.forEach(function (value, key) {
    obJSON[key] = value;
  });
  fetch('/signin', {
    body: JSON.stringify( obJSON ) ,
    method: "POST",
    headers:{
      "Content-Type":"application/json;charset=UTF-8"
    }
    } )
  .then( function( response ){
    return response.json()
  }).then( function( res) {
    console.log( res ) ;
  })

})