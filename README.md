# nodejs-api
 
Se basa en simple aplicacion con fines de testear node-js con estándar ES6, con pruebas de productos y usuarios a ser registrados por medio de protocolo http.

Uso de modulos como [express](https://www.npmjs.com/package/express), [body-parser](https://www.npmjs.com/package/body-parser) para middlewares y enrutamiento.
Uso de modulos como [bcrypt](https://www.npmjs.com/package/bcrypt) en encriptar contraseñas.
Base de datos [mongodb](https://www.mongodb.com/), con el modulo [mongoose](https://www.npmjs.com/package/mongoose) para su conexxion remota a la base datos.
## Uso JWT ( JSON Web Tokens ) 

Para su respectivo test, se crea un puerto `3000` ( Default ) en el host local, mongod service en el puerto `27017` ( Puerto default ).

## ¿Cómo testear?
Primeramente, sera necesario crear un registro con nombre, email, y contraseña ( La contraseña se encriptrará ) por medio de la ruta `http://localhost/signup` por medio de petición post con la herramienta postman.
Consiguiene, ir a direccion `/pugger` ( `http://localhost/pugger` ) se intentará inciar sesion con el email registrado anteriormente.

Se enviara un mensaje a la consola mostrando si se ha logrado loggear, enviando un token adicionalmente
En caso contrario, simplemente enviara un mensaje con usuario no registrado.


