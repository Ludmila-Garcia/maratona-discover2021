const Modal = {
    open(){
        // Lembrando que nos botões "Nova transação" e "Cancelar" foi adicionado o onclick
        // Abrir modal
        // Adicionar a class active ao modal
                
        //Lembrando que no CSS foi criada uma classe active com visible opacity: 1; e  visibility: visible;
                

        // para pegar o modal overlay e adicionar uma classe active nele é necessário usar o objeto "Dom" (Document Object Modal). O document vai colocar o modelo do HTML todo dentro de um objeto carregado de funcionalidades

        // querySelector: Selector é o selector CSS e query significa pesquisar 

        // Explicação: Procure no documento html inteiro a class modal-overlay e quando encontrar pegue e devolva um objeto, e esse objeto será a <div class="modal-overlay">
        document.querySelector('.modal-overlay')
            //classList serve para procurar na lista de classes e add é para adicionar uma classe ao modal que foi procurado pelo querySelector, neste caso o modal-overlay
            .classList
            .add('active')
            },
    close(){
        // Fechar o modal
        // Remover a class active ao modal
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}

// Eu preciso somar as entradas
// Depois somar as saídas 
// Remover das entradas o valor das saídas
// Assim terei o total

const Transaction = {
    incomes(){
        //somar as entradas
    },
    expenses(){
        //somar as saídas
    },
    total(){
        //entradas - saídas
    }
}