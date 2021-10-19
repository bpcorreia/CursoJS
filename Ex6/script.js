    let numero = document.querySelector('input#txtnumero')
    let tab = document.querySelector('select#selanalisa')
    let res =document.querySelector('div#res')
    let ar = [] // criar array

    function inLista(n, l){
        if (l.indexOf(n) != -1){ //se o numero nao existir na lista
            return true
        }else {
            return false
        }
    }
    function adicionar(){
   // alert("adicionar")
   debugger
        
    let n = Number(numero.value)
    res.innerHTML =""

    if(n <= 0 | n > 100 | n.length == 0 | (inLista(n,ar)) ) {
        window.alert("Digitar número entre 1 e 100, e que não exista na lista!")
    } else {
        ar.push(n) //inserir valor no array
        let item = document.createElement('option')
        item.text = "Valor Inserido: "+ n 
        item.value = tab
        tab.appendChild(item) //mostra na lista os numeros inseridos
    
           }
        numero.value=""
        numero.focus()
}

function analisador(){
    if(ar.length == 0){ // se o array estiver vazio
        window.alert("Adicione valores primeiro!")
    }else {
        let total = ar.length
        let maximo = Math.max(...ar) // Maior numero do array
        let minimo = Math.min(...ar) // menor numero do array
        let soma = ar.reduce((a,b) => a + b,0) //soma de todos os numeros do array
        let media = soma / ar.length // ou ar.reduce((a,b) => a + b,0) / ar.length   //media dos numeros do array

        res.innerHTML =""
        res.innerHTML += "O Array é: " + ar 
        res.innerHTML += "<br> O número total de elementos do Array é: " + total
        res.innerHTML += "<br>o seu Máximo é: " + maximo
        res.innerHTML += "<br> o seu Minimo é: " + minimo
        res.innerHTML += "<br> a sua Soma é: " + soma
        res.innerHTML += "<br> a sua Média é: " + media
        }
}