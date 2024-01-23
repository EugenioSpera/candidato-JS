let jair = 0
let carlos = 0
let neves = 0
let nulo = 0
let branco = 0
let voto = parseInt(prompt("Digite seu voto: \n 1. Candidato Jair Rodrigues \n 2. Candidato Carlos Luz \n 3. Candidato Neves Rocha \n 4. Nulo \n 5. Branco"))

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



alert("Total jair  é: " + jair + "Total carlos é: " + carlos + "Total neves é: " + neves + "Total voto nulo é: " + nulo + "Total branco é: " + branco)

