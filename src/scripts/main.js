document.addEventListener('DOMContentLoaded', function(){ //variaveis e DOMContentLoaded
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < buttons.length; i++){ //mostra a aba
        buttons[i].addEventListener('click', function(button){
            const tabTarget = button.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)


            hideTab();
            tab.classList.add('shows__list--is-active');
            removeBotaoAtivo()
            button.target.classList.add('shows__tabs__button--is-active');

            
        })
    }
})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
                buttons[i].classList.remove('shows__tabs__button--is-active');
                
            }
}

function hideTab(){ //esconde a aba
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i< tabsContainer.length; i++)
        tabsContainer[i].classList.remove('shows__list--is-active')
}