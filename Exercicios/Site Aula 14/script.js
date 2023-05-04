function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //Bom dia
    img.src = 'Noite.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >=12 && hora < 18){
    //Boa tarde
    img.src = 'Noite.png'
    document.body.style.background = '#e2cd9f'
}else {
    // Boa noite
    img.src = 'Noite.png'
    document.body.style.background = '#e2cd9f'
}
}