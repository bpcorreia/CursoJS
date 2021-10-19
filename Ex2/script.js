function carregar() {
    debugger
  //  alert("teste")
 var msg = window.document.getElementById('msg')
 var img = window.document.getElementById('imagem')
 var datahoje = window.document.getElementById('datahoje')
 var cumprimento = window.document.getElementById('cumprimento')
 var data = new Date()
 var hora = data.getHours()
 //var hora = 11
 var yyyy = data.getFullYear() 
 var mm = data.getMonth() //mes
 var dd = data.getDate() //dia do mes
 var diaSem = data.getDay()
 var min = data.getMinutes()
 //var diaSem = 5
 //datahoje.innerHTML = dd  + " / " + mm + " / " + yyyy

 switch (mm) { 
    case 0:
        var mes = `Janeiro`
        break;
    case 1:
        var mes = `Fevereiro`
        break;
    case 2:
        var mes = `Março`
        break;
    case 3:
        var mes = `Abril`
        break;
    case 4:
        var mes = `Maio`
        break;
    case 5:
        var mes = `Junho`
        break;
    case 6:
        var mes = `Julho`
        break;
    case 7:
        var mes = `Agosto`
        break;
    case 8:
        var mes = `Setembro`
        break;
    case 9:
        var mes = `Outubro`
        break;
    case 10:
        var mes = `Novembro`
        break;
    case 11:
        var mes = `Dezembro`
        break;
    default:
        console.log('[ERRO] Mês inválido!')
        break;
}

 switch (diaSem) {
    case 0:
        var dia = 'Domingo'
        break;
    case 1:
        var dia = 'Segunda-Feira'
        break;
    case 2:
        var dia = `Terça-Feira`
        break;
    case 3:
        var dia = 'Quarta-Feira'
        break;
    case 4:
        var dia = 'Quinta-Feira'
        break;
    case 5:
        var diaL = 'Sexta-Feira'
        break;
    case 6:
        var dia = 'Sábado'
        break;
    default:
        console.log('[ERRO] Dia inválido!')
        break;
}
    msg.innerHTML = `It's ${hora}h ${min}m !!  `
    datahoje.innerHTML = `${dia} , ${dd} de ${mes} de ${yyyy} `
  //  msg.innerHTML = `Agora são ${hora}h${min}m `
 if(hora >= 6 && hora <12){
     //Bom dia
     cumprimento.innerHTML = "Bom Dia"
     img.src = 'manha.png'
     document.body.style.background = "#e2cd9f"
 } else if (hora >= 12 && hora <= 18){
     //Boa Tarde
     cumprimento.innerHTML = "Boa Tarde"
     img.src = 'tarde.png'
     document.body.style.background = "#b9846f"
 } else {
     //Boa Noite
     cumprimento.innerHTML = "Boa Noite"
     img.src = 'noite.png'
     document.body.style.background = "#515154"
     
 }

 }

