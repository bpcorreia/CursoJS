function contar() {
    //debugger
   // alert("OK! Chegou aqui!!")
  
    var inicio = document.getElementById('txtInicio').value
    var fim = document.getElementById ('txtFim').value
    var passo = document.getElementById ('txtPasso').value
    //var res = document.querySelector('div#res')
    var res = document.getElementById('res')
    
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert("[ERRO] Verifique os dados inseridos!")
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "A contar: <br> "
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if(p <= 0) {
            window.alert ("Passo inválido! Considera Passo 1")
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for (let c = i ;c <= f; c += p){
                res.innerHTML += " " + c + "\u{1F4A4}"
            }
        }else {
            //Contagem decrescente
            for (let c = i ;c >= f; c -= p){
                res.innerHTML += " " + c + "\u{1F4A4}"
            }
        }    
             res.innerHTML += "\u{1F3C1}"         
    }
}