function mesesano(){
    let mes = parseInt(prompt("Digite um numero correspondente a um mês:"));
    let mensagem = (mes==1)?"janeiro":(mes==2)?"fevereiro":(mes==3)?"março":(mes==4)?"abril":(mes==5)?"maio":(mes==6)?"junho":(mes==7)?"julho":(mes==8)?"agosto":(mes==9)?"setembro":(mes==10)?"outubro":(mes==11)?"novembro":"desembro";
    alert(mensagem);
    }
    function diasemana(){
    let dia = parseInt(prompt("Digite o dia da semana:"));
    let mensagem = (dia==1)?"Domingo":(dia==2)?"Segunda":(dia==3)?"Terça":(dia==4)?"Quarta":(dia==5)?"Quinta":(dia==6)?"Sexta":"Sabado";
    alert(mensagem);
    }
    function idadebebida(){
    let idade = parseInt(prompt("Digite a sua idade:"));
    let mensagem = (idade<18)?"Não pode Consumir Bebida alcoolica":"Pode Consumir Bebida Alcoolica"
    alert(mensagem);
    }
    function idadevoto(){
    let idade = parseInt(prompt("Digite a sua idade:"));
    let mensagem = (idade<16)?"Não pode Votar":(idade<18)?"voto é opcional":"voto é obrigatotrio";
    alert(mensagem);
    }
    function contadora(){
    let contadora=1;
    while (contadora<10) {
        alert(contadora)
        contadora++
    }
    }
    function multiplica(){
        let numero = parseInt(prompt("digite o valor a ser multiplicado:"))
        let contadora = 1
        while (contadora <= 10) {
            alert(contadora + " x " + numero + " = " + numero*contadora)
            contadora++
        }
    }
    function notasaluno(){
        let n1 = parseInt(prompt("Digite a primeira nota de sua prova: "))
        let n2 = parseInt(prompt("Digite a segunda nota de sua prova: "))
        let resultado = (n1 + n2)/2
        alert("Sua media final foi: " +resultado)
    }
function media(){
    let nota1 = parseInt(prompt("Digite sua primeira nota:"))
    let nota2 = parseInt(prompt("Digite sua segunda nota:"))
    let media = (nota1 + nota2)/2
    
    if (media >= 7.0){

        alert("Aprovado com Média: "+media)

    } else

    alert("Reprovado com Média: "+media)

}
function motorista(){

    let idade = parseInt(prompt("Digite sua idade"))

    let carteiramotorista = prompt("Possui carteira de Motorista?")

    if (idade >= 18 && carteiramotorista === 'sim'){

        alert("Você Pode dirigir seu veiculo")

    }else

        alert("Você não pode dirigir seu veiculo")

}
function times(){
    let Vasco = parseInt(prompt("Quantos gols fez o Vasco da Gama?"))
    let Corinthians = parseInt(prompt("Quantos gols fez o Corinthians?"))

    if (Vasco > Corinthians) {
        alert("Vasco ganhou com o placar de " + Vasco + " x " + Corinthians);
    } else if (Corinthians > Vasco) {
        alert("Corinthians ganhou com o placar de " + Corinthians + " x " + Vasco);
    } else {
        alert("Jogo empatado com placar de " + Vasco + " x " + Corinthians);
    }

}
function usuario(){

    let usuario = prompt("Username")

    let senha = prompt("Password")

    if (usuario === 'kevyncr.moreno@senacsp.edu.br' && senha === '14092003.k') {

        alert("Helcome! CeifadorDZL");

    } else {

        alert("User invalid");
        
    }

    
}
    
    