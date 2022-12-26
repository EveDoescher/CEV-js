let localdt = new Date() 
let hora = localdt.getHours()
console.log(`Agora são ${hora} Horas`)
if (hora <= 12 && hora >= 6) {
    console.log('Bom dia!')
}else if (hora > 12 && hora <= 18){
    console.log('Boa tarde!')
}else if (hora > 0 && hora < 12 ) {
    console.log('Boa Madrugada!')
}else {
    console.log('Boa Noite!')
}