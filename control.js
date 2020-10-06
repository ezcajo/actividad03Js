/*Declaro las variables y le asigno los elementos
  que voy a interactuar
*/
let btn = document.getElementById('ingresar');
let clave = document.getElementById('clave');
let usuario = document.getElementById('usuario');


// Evento escuchador colocada en el submit
btn.addEventListener('click', function(evt){
 //Funcion Anonima
  //Declaracion y asignaciones de variables
      let expresionRegular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      let valorUsuario = usuario.value;  
      let valorClave = clave.value;
  
  //invocacion a la funcion para validar campos vacios
      validarVacio(valorUsuario, valorClave, evt); 
  

  //Dos opciones de funciones para validar mail - expresiones regulares -
    validarExpresionRegular(expresionRegular, evt);
      
    //validarArroba(valorUsuario); 
  
});

//valida los campos vacios del formulario
function validarVacio(usuario, clave, e){
    if(usuario === ''){
       alert('ingrese usuario el campo es obligatorio no debe quedar vacio')
          e.preventDefault();
         
      }else if(clave=== ''){
       alert('Ingrese contraseña el campo es obligatorio no debe quedar vacio')
          e.preventDefault();
          return false;
        

      }

}

//valida el campo usuario que contenga un arroba
function validarArroba(user){
  let dato = user;
  let cantidadArroba =0;
  for (let i = 0; i< dato.length; i++) {
      if (dato[i] == '@') {
      cantidadArroba +=1;
      }
    }
  if(cantidadArroba !=1){
      return alert('debe contener caracter de arroba @ solo uno')
    }   
  }
// valida el campo de usuario utilizando expresiones regulares
function validarExpresionRegular(expresion, evt){
if (!expresion.test(usuario.value)) {
      alert('el campo usuario contiene formato de caracteres invalidos')
      evt.preventDefault();
      return false;
}
}