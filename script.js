function cleanForm(id){
    return document.getElementById(id)?.reset();
}

async function sendMessage(){
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const name1 = formData.get('name1');
    const name2 = formData.get('name2'); 
    const name3 = formData.get('name3');
    const name4 = formData.get('name4');
    const name5 = formData.get('name5');
    const hist = formData.get('hist');
    const names = [name1, name2, name3, name4, name5]
    const message = hist
    const body = {
        names: names,
        message: message
    }

    alert(body)

    fetch("https://fsdt-contact.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
    .then(response => {
        response.json()
        cleanForm('form')
    })
    .then(result => alert("Desafio Concluido:", result))
    .catch(error => console.error("Erro no Desafio:", error));

}
