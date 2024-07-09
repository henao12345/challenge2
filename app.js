//-----seleccionar todos los elementos ---//

const btnEncriptar= document.querySelector(".btn-encriptar");
const txtEncriptar= document.querySelector(".encriptar");
const aviso= document.querySelector(".texto-aviso");      
const respuesta= document.querySelector(".evaluar");         //----aqui se llaman a las clases que tenemos en html y se le da funcionalidad utilizando los metodos----//
const contenido= document.querySelector(".tarjeta-contenedor");
const btnCopiar= document.querySelector(".btn-copiar");
const btnDesencriptar= document.querySelector(".btn-desencriptar");


//-----boton de encriptar  ---//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto= txtEncriptar.value;   //-----aqui capturamos el valor que se registra en el cuadro de texto  ---//
    let txt= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " ); //-----en este codigo convertimos los simbolos especiales en vacio y las acentuaciones las quitas   ---//
    

    if(texto==""){
        aviso.style.background="#0A3871",
        aviso.style.color="#FFFF"
        aviso.style.fontWeight="800";
        aviso.textContent="el campo de texto no debe estar vacio"

        setTimeout(()=>{
            aviso.removeAttribute("style");     //-----con este codigo cambiamos el texto de aviso que nos indica que el cuadro de texto no deb estar vacio ---//
        },1500);

    }

    else if (texto !== txt){
        aviso.style.background="#0A3871",
        aviso.style.color="#FFFF"
        aviso.style.fontWeight="800";
        aviso.textContent="No debe existir acentos ni caracteres especiales"

        setTimeout(()=>{
            aviso.removeAttribute("style");     //--------//
        },1500); 
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.background="#0A3871",
        aviso.style.color="#FFFF"
        aviso.style.fontWeight="800";
        aviso.textContent="Ingresa el texto en minusculas "

        setTimeout(()=>{
            aviso.removeAttribute("style");     //--------//
        },1500); 
    }
    else{
        texto= texto.replace(/e/mg,"enter");
        texto= texto.replace(/i/mg,"imes");       //----esta linea de codigo nos idica que si se encuentra dentro del texo alguna vocal se debe convertir ----//
        texto= texto.replace(/a/mg,"ai");
        texto= texto.replace(/o/mg,"ober");
        texto= texto.replace(/u/mg,"ufat");

        respuesta.innerHTML=texto;
        btnCopiar.style.visibility="inherit"
        contenido.remove();
    }
    /*console.log(texto)    este consol  nos ayuda a reconocer si esta funcionando dentro de la consola el codigo anterior*/

});

//-----boton de desencriptar  ---//
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto= txtEncriptar.value;   //-----aqui capturamos el valor que se registra en el cuadro de texto  ---//
    let txt= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " ); //-----en este codigo convertimos los simbolos especiales en vacio y las acentuaciones las quitas   ---//
    

    if(texto==""){
        aviso.style.background="#0A3871",
        aviso.style.color="#FFFF"
        aviso.style.fontWeight="800";
        aviso.textContent="El campo de texto no debe estar vacio"

        setTimeout(()=>{
            aviso.removeAttribute("style");     //-----con este codigo cambiamos el texto de aviso que nos indica que el cuadro de texto no deb estar vacio ---//
        },1500);

    }

    else if (texto !== txt){
        aviso.style.background="#0A3871",
        aviso.style.color="#FFFF"
        aviso.style.fontWeight="800";
        aviso.textContent="No debe existir acentos ni caracteres especiales"

        setTimeout(()=>{
            aviso.removeAttribute("style");     //--------//
        },1500); 
    }

    else if (texto !== texto.toLowerCase()){
        aviso.style.background="#0A3871",
        aviso.style.color="#FFFF"
        aviso.style.fontWeight="800";
        aviso.textContent="Ingresa el texto en minusculas "

        setTimeout(()=>{
            aviso.removeAttribute("style");     //--------//
        },1500); 
    }
    else{
        texto= texto.replace(/enter/mg,"e");
        texto= texto.replace(/imes/mg,"i");       //----esta linea de codigo nos idica que si se encuentra dentro del texo alguna vocal se debe convertir ----//
        texto= texto.replace(/ai/mg,"a");
        texto= texto.replace(/ober/mg,"o");
        texto= texto.replace(/ufat/mg,"u");

        respuesta.innerHTML=texto;
        btnCopiar.style.visibility="inherit";
        contenido.remove();
    }
 });
 //----aqui damos la funcionalidad al boton copiar----//
 btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar= respuesta;
    copiar.select();
    document.execCommand("copy"); //----este metodo nos sirve para copiar el lugar de seleccion ----//


 });