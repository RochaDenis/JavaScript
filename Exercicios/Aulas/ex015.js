/*let num = [3,5,6,7,8]

num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)*/

let valores = [8, 2, 5, 7, 3, 9]

//console.log(valores)
/*valores.sort()
for (let pos=0; pos < valores.length; pos++)
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)*/

for(let pos in valores){
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}` )
}

let pos = num.indexOf(8)

if (pos== -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}