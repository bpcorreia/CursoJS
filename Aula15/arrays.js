let num =[5,8,2,9,0]
console.log(num)
num.push(1)  //adicionar um elemento na ultima posicao do Array
console.log(num)
console.log(`O array tem ${num.length} posiçoes`)    //Cumprimento do Array
console.log(`O primeiro valor do Array é ${num[0]} `)

console.log('Vamos ordenar o Array!')
num.sort()  //Ordena o Array
console.log(`O Array agora ordenado é ${num}`)
console.log(`E agora o primeiro valor do Array é ${num[0]} `)

let pos = num.indexOf(8)  //Procura o valor 8 no Array
console.log(`O valor 8 está na posição ${pos} do Array!`)

let posProcura = num.indexOf(4) //Procura o valor no Array (x) e se nao existe retorna -1
if(posProcura == -1) {
    //console.log(`O valor 4 não está na posição ${pos2} do Array!`)
    console.log(`O valor não existe no array!!`)
}else {
    console.log(`O valor está na posição ${posProcura} do Array!`)
}

