let maior=0
let menor=0
let idade

for (let time=1; time <= 3; time++) {
  
    for (let jogador = 1; jogador <=2; jogador++) {
       idade=parseInt(prompt("informe  idade do jogador"))
       
       if((time==1) && (jogador==1)){
        maior=idade
        menor=idade
       }
       else{
        if(idade>maior){
        maior=(idade)
        }
        if(idade<menor){
            menor=(idade)
        }
       }
    }
}document.write(` a idade do jogador mais velho é ${maior} anos e a idade do jogador mais novo é ${menor} anos` )
