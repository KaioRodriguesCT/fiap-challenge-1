function enviar(){
    document.getElementById("form").submit();
    cleanForm("form");  
}

function cleanForm(id){
    return document.getElementById(id)?.reset();
}