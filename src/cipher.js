const cipher = {
  encode: function (offset, string) {
    let patternS = /[A-Z]$/i;
    let text = string.toUpperCase();
    let resultS = patternS.test(text);
    let patternO = /[0-9]$/;
    let resultO = patternO.test(offset);
    
   //error
   try { 

    if (text === "") throw "El mensaje a cifrar no puede estar vacio";
    if (!resultS) throw "El mensaje a cifrar no pede contener números";
    
     if (offset === txt2) throw "aun no has puesto tu clave";
     if(!resultO) throw"no recibe letras o puntos"
      if (offset <0) throw"no se aceptan numeros negativos";
     
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
    return txt2="";
   }


  },

  decode: function (offset, string) {
        let patternS = /[A-Z]$/i;
        let text = string.toUpperCase();
        let resultS = patternS.test(text);
        let patternO = /[0-9]$/;
        let resultO = patternO.test(offset);
    try{
      
     if (text === "") throw " a un no has copidado el mensaje ya cifrado";
     if (!resultS) throw "El mensaje a cifrar no pede contener números";

     if (offset === "") throw "aun no has puesto tu clave";
     if (!resultO) throw "no recibe letras o puntos";
     if (offset < 0) throw "no se aceptan numeros negativos";
    
  
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