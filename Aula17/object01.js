let amigo = {nome:'Bruno',
sexo:'M',
peso: 89,engordar(p=0) {
    console.log(`Engordou`)
    this.peso += p
}
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kgs`)