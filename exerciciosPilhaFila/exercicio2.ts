import readline = require('readline-sync');
import { Stack } from './Stack';
const pilha = new Stack<String>();
let opcao;
let livro;
do{
    console.log("******************************************************")
    console.log("*               1 - Adicionar Livros na Pilha        *")
    console.log("*               2 - Listar todos os Livros           *")
    console.log("*               3 - Retirar Livros da Pilha          *")
    console.log("*               0 - sair                             *")
    console.log("******************************************************")
     
    opcao = readline.questionInt("Entre com a opcao desejada:  ");


    switch(opcao){
        case 1: 
         livro = readline.question(`Digite o Nome do livro para ser adicionado a Pilha: `);
         console.log("Fila:\n");
         pilha.push(livro);
         console.log("Livro Adicionado!")
         break;
        case 2:
        console.log("Lista de clientes da Fila:\n");   
         pilha.printStack()
         break;
        case 3: 
        if(pilha.isEmpty()){
            console.log("");
        }else
        console.log("O Livro foi Retirado!")
        pilha.pop();
        break;

    }
}while(opcao != 0)