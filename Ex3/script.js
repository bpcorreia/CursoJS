function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //var res = document.getElementById('res') OU
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados inseridos!")
    } else {
        var fsex =document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        
        //colocar a imagem dinamicamente
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')

        //genero escolhido homem[0] ou mulher[1]
        if (fsex[0].checked) {
            genero = "Homem"
            if(idade >= 0 && idade <10) {
                //Crianca
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade <=21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade <65){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if (fsex[1].checked) {
            genero = "Mulher"
            if(idade >= 0 && idade <10) {
                //Crianca
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade <=21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if (idade <65){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = "Detectamos " + genero + " com " + idade + " anos."
        res.appendChild(img) //colocar Imagem
    }
}