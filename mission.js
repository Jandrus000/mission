const themeSelect = document.querySelector('select')
const body = document.querySelector('body')
const byuiLogo = document.querySelector('img')

function changeTheme(){
    if(themeSelect.value === 'light'){
        body.classList.remove('dark')
        byuiLogo.src = 'byui-logo_blue.webp'
    }else {
        body.classList.add('dark')
        byuiLogo.src = 'byui-logo_white.png'
    }

}

themeSelect.addEventListener('change', changeTheme);
