/* //variaveis
var nome= "Guilherme"
var idade= 20
//pop-up
// alert("Bem vindo " + nome + ". Você tem  " + idade + " anos.");
//output do chrome
console.log(nome)
console.log(idade)

//transformações string
console.log(nome.replace("Guilherme","Lucas"))
console.log(nome.toUpperCase())
console.log(nome.toLocaleLowerCase())

// -=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

var lista= ['maça', 'pera', 'laranja']
console.log(lista)
console.log(lista[0])
lista.push("uva")
console.log(lista)
lista.pop()
console.log(lista)
console.log(lista.length)
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista.join(" - ")) */

// var fruta= {nome:'maçã', cor:'vermelho'}
// console.log(fruta.nome)

/* var idade= prompt('Qual a sua idade?')

if(idade >= 18){
    alert('MAIOR DE IDADE')
}else {
    alert('MENOR DE IDADE')
} */


/* var count= 0

while (count < 5){
    console.log(count+1)
    count++
} */

/* for (i= 0; i <= 5; i++){
    console.log(i)
} */

/* var d= new Date()
alert(d)
alert(d.getUTCDay())
alert(d.getMonth()+1)
alert(d.getFullYear())
alert(d.getHours()) */

/* function soma(n1,n2){
    return n1+n2;
}
alert(soma(5,10)) */

/* function validaIdade(idade){
    var validar= 0;
    if (idade>=18){
        validar= true
    }else{
        validar= false
        }
    console.log(validar)
}

idade= prompt('Idade:')
validaIdade(idade) */



function load(){
    var nome= prompt('Qual é o seu nome?')
    alert('Bem vindo(a) '+ nome)
}
 nome=
clicks= 0
function clicou(){    
    clicks++
    document.getElementById('output').innerHTML= clicks
    if(clicks==1){
        load()
    }
    if(clicks>=10){
        window.location.href= "http://127.0.0.1:5500/done.html"
        }        
}


function trocar(elemento){
    elemento.innerHTML= 'Se você clicar 10x vai ser redirecionado!' 
}
function voltar(elemento){
    elemento.innerHTML= 'Segredo' 
}
 function home(){
    window.location.href= "http://127.0.0.1:5500/"
 }
 



