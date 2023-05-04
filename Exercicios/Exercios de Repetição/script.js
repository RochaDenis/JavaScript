function clicar(){
   let ini = document.getElementById('txtini')
   let fim = document.getElementById('txtfim')
   let passo = document.getElementById('txtpasso')
   let res = document.getElementById('res')

   if (ini.value.lengh == 0 || fim.value.lengh == 0 || passo.value.lengh == 0){
      res.innerHTML = 'Impossivel se contar!'
      //window.alert('[ERRO] Faltam dados!')
   } else{ 
      res.innerHTML = 'Contando: <br>'
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(passo.value)
      if (p <= 0) {
         window.alert('Passo Invalido! Considerando Passo 1')
         p = 1
      }
     //Se inicio for maior que o fim
      if (i < f){
      
         for(let c = i; c <= f; c += p){
         res.innerHTML += `${c} \u{1F449}`
      }
   }else{
      // Senão subitrair do fim
         for(let c = i; c >= f; c-=p)
         res.innerHTML += `${c} \u{1F449}`
      }
         res.innerHTML += `\u{1F3C1}`
      }
   }
