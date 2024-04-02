import readline = require('readline-sync');
import { Queue } from "./Queue";
const fila = new Queue<String>();
let opcao;
let nome;
do{
    console.log("******************************************************")
    console.log("*               1 - Adicionar Cliente na fila        *")
    console.log("*               2 - Listar todos os Clientes         *")
    console.log("*               3 - Retirar Cliente da Fila          *")
    console.log("*               0 - sair                             *")
    console.log("******************************************************")
     
    opcao = readline.questionInt("Entre com a opcao desejada:  ");


    switch(opcao){
        case 1: 
         nome = readline.question(`Digite o Nome para ser adicionado a Fila: `);
         console.log("Fila:\n");
         fila.enqueue(nome);
         console.log("Cliente Adicionado!")
         break;
        case 2:
        console.log("Lista de clientes da Fila:\n");   
         fila.printQueue();
         break;
        case 3: 
        if(fila.isEmpty()){
            console.log("");
        }else
        console.log("O Cliente foi Chamado!")
        fila.dequeue();
        break;

    }
}while(opcao != 0)