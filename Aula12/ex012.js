var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes() 
//var hora = 7
console.log ( `Agora são ${hora}h${min}m `)
if (hora <8) {
    console.log(`Ui!Toca a dormir de novo!É muito cedo ainda!!`)
} else if (hora<12) {
    console.log(`Bom dia!`)
} else if (hora <= 18) {
        console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}