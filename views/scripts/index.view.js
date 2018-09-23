// Formulario de ingreso con XMLhttpRequest()
var formLogin = document.getElementById('login');


formLogin.addEventListener('submit', function( event ){
  event.preventDefault();
  var formData = new FormData(formLogin);
  var xHTTP = new XMLHttpRequest();
  xHTTP.open('POST', '/signin', true);
  xHTTP.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xHTTP.onreadystatechange = function ( ){
    if( this.readyState == 4 && this.status==200){
      console.log( this.responseText )
    }    
  }
  
  var obJSON = {}
  
  formData.forEach( function ( value, key ) {
    obJSON[ key ] = value;
  });
  
  xHTTP.send( JSON.stringify( obJSON ) );

})
