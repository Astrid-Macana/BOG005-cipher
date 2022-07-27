const cipher = {
  encode: function (offset, string) {
    // Expresiones regulares ...patron mensaje....

    let patternS =
      /([0-9][a-zA-Z]|[a-zA-Z][0-9]|[0-9]|[ñÑ{}+^*|$/ªº!"@·#~%€&¬=?'¿¡`¨Ç_()-/\\/]|[/[\\/]\\]|[\t\s\n])/g;
    let text = string.toUpperCase();
    let resultS = patternS.test(text);

    // Expresines reguladres ...patron clave...
    let patternO = /([-.,][0-9]|[0-9][-.,])/g;
    let resultO = patternO.test(offset);

    // Bloque de código puede lanzar una excepción
    try {
      if (text === "") throw "El mensaje a cifrar no puede estar vacio";
      if (resultS)throw "El mensaje a cifrar no pede contener números, espacios y caracteres especiales";

      if (offset === "") throw "Aún no has puesto tu clave";
      if (offset < 0) throw "No se aceptan numeros negativos";
      if (resultO) throw " o se acepta como clave";

// función cifrar
      var letra = 0;
      var form = 0;
      var txt2 = "";
      for (let i = 0; i < string.length; i++) {
        letra = Number(text.charCodeAt(i));
        form = ((letra - 65 + Number(offset)) % 26) + 65;
        txt2 += String.fromCharCode(form);
      }
      return txt2;
    
    } catch (error) {
      alert(error);
      return (txt2 = "");
    }
  },

  decode: function (offset, string) {

    let patternS =/([0-9][a-zA-Z]|[a-zA-Z][0-9]|[0-9]|[ñÑ{}+^*|$/ªº!"@·#~%€&¬=?'¿¡`¨Ç_()-/\\/]|[/[\\/]\\]|[\t\s\n])/g;
        let text = string.toUpperCase();
        let resultS = patternS.test(text);

        let patternO = /([-.,][0-9]|[0-9][-.,])/g;
        let resultO = patternO.test(offset);

    try{
      
      if (text === "") throw "El mensaje a cifrar no puede estar vacio";
      if (resultS)throw "El mensaje a cifrar no pede contener números, espacios y caracteres especiales";

      if (offset === "") throw "Aún no has puesto tu clave";
      if (offset < 0) throw "No se aceptan numeros negativos";
      if (resultO) throw " o se acepta como clave";
      
    // funcion descifrar
  
    var letra = 0;
    var form = 0;
    var txt2 = "";
    for (let i = 0; i < string.length; i++) {
      letra = Number(text.charCodeAt(i));
      form = ((letra - 65 - Number(offset)) % 26);
      if (form < 0){
        form = form + 26 + 65; 
      }else{
        form = form + 65;
      }
      txt2 += String.fromCharCode(form);
    }
    return txt2;
    
  } catch (error){
    alert(error);
    return txt2="";
  }
    
  }
  
}
  export default cipher;