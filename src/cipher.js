const cipher = {
  //window.addevelinstener("load",inicio,true),

  //function inicio(){
  //  document.getElementById("cifrar").addevelinstener("click",function(mensaje,clave))
  //};

  encode: function (offset, string) {
    //codificar
    let text = string;
    var letra = 0;
    var form = 0;
    var txt2 = "";
    for (let i = 0; i < text.length; i++) {
      letra = Number(text.toUpperCase().charCodeAt(i));
      form = ((letra - 65 + Number(offset)) % 26) + 65;
      txt2 += String.fromCharCode(form);
    }
    return txt2;
  },

  decode: function (offset, string) {
    //decodificar
    let text = string;
    var letra = 0;
    var form = 0;
    var txt2 = "";
    for (let i = 0; i < text.length; i++) {
      letra = Number(text.toUpperCase().charCodeAt(i));
      form = ((letra - 65 - Number(offset)) % 26);
      if (form < 0){
        form = form + 26 + 65; 
      }else{
        form = form + 65; 
      }
      txt2 += String.fromCharCode(form);
    }
    return txt2;
  }
}
  export default cipher;