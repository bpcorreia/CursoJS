function parimpar(n) {
    if (n%2 == 0) { //divide por 2 e retorna o resto
        return `Par!`
    }else {
        return `Impar!`
    }
}

let res = parimpar(22)
console.log(res)