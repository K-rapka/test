let theme = document.querySelector('.calc-theme')
let currentTheme = 'light'
theme.addEventListener('click', ()=>{ 
    if (currentTheme == 'light'){
        currentTheme = 'dark'
        theme.classList = 'calc-theme dark'
    }
    else{
        currentTheme = 'light'
        theme.classList = 'calc-theme light'
    }
 })