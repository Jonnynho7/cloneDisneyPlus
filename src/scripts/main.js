document.addEventListener('DOMContentLoaded', function(){ //variaveis e DOMContentLoaded
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]')
    const heroSection = document.querySelector('.hero');
    const heroHeigth = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY

        if(posicaoAtual < heroHeigth){
            ocultaHeader();
        }else{
            exibeHeader();
        }
    })

    for (let i = 0; i < buttons.length; i++){ //mostra a aba
        buttons[i].addEventListener('click', function(button){
            const tabTarget = button.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)


            escondeAba();
            tab.classList.add('shows__list--is-active');
            removeBotaoAtivo()
            button.target.classList.add('shows__tabs__button--is-active');

            
        })
    }

    for (let i = 0; i < questions.length; i++){  //mostra e esconde a aba de perguntas
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultaHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}


function abreOuFechaResposta(elemento){
    const openedQuestion = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(openedQuestion);
}

function removeBotaoAtivo(){ //remove o border do botão ativo e passa para o ativo
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
                buttons[i].classList.remove('shows__tabs__button--is-active');
                
            }
}

function escondeAba(){ //esconde a aba
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i< tabsContainer.length; i++)
        tabsContainer[i].classList.remove('shows__list--is-active')
}