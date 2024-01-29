let jair = 0
let carlos = 0
let neves = 0
let nulo = 0
let branco = 0
let vencedo = 0
let voto = parseInt(prompt("Digite seu voto: \n 1. Candidato Jair Rodrigues \n 2. Candidato Carlos Luz \n 3. Candidato Neves Rocha \n 4. Nulo \n 5. Branco"))

vencedor = voto;

while(voto != 6){
    
    switch(voto){
        case 1:
        jair++
        break

        case 2:
        carlos++
        break

        case 3:
        neves++
        break

        case 4:
        nulo++
        break

        case 5:
        branco++
        break


    }

    voto = parseInt(prompt("Digite seu voto: \n 1. Candidato Jair Rodrigues \n 2. Candidato Carlos Luz \n 3. Candidato Neves Rocha \n 4. Nulo \n 5. Branco"))
}

if (jair > carlor && jair > neves){
    
    vencedor = "Jair Rodrigues"

}else if (carlos > neves && carlos > jair){ 

    vencedor = "Carlos Luz"
    
}else if (neves > carlos && neves > jair){ 

   vencedor = "Neves Rocha"
}   

let total = jair + carlos + neves + nulo + branco
let porcentagem = total/100 //Usamos essa formula para transformar em porcentagem//
let Pnulos = parseInt(porcentagem*branco)*100
let Pbrancos = parseInt(porcentagem*nulo)*100

alert("O total de votos foram: \n Jair Rodrigues: "+jair+"\n Carlos Luz: "+carlos+"\n Neves Rocha: "+neves+"\n Nulo: "+Pnulos+"\n Branco: "+Pbrancos+"\n vencedor: "+vencedor)

