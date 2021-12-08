import styles from '../public/styles.css'
import SplideStyles from '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { App } from './App'
document.addEventListener('DOMContentLoaded',async(e)=> await App())
window.addEventListener('hashchange',async(e)=> await App())
document.addEventListener('click',(e)=>{
    if(e.target.matches('.hamburguer__icon>svg')||e.target.matches('.hamburguer__icon>svg>path')){
        document.querySelector('nav').classList.toggle('animation-menu-enabled')
    }
    if(e.target.matches('.session__button')){
        document.querySelector('.form__natasha__box').classList.toggle('form__enabled')
        document.querySelector('form').dataset.request = e.target.textContent
        document.getElementById('log-button').value = e.target.textContent
    }
     if(e.target.matches('.form__close>svg') || e.target.matches('.form__close>svg>path')){
        document.querySelector('.form__natasha__box').classList.toggle('form__enabled')
    }
    if(e.target.matches('.sign__in__option')||e.target.matches('.sign__up__option')){
        e.preventDefault()
        document.querySelector('form').dataset.request = e.target.textContent
        document.getElementById('log-button').value = e.target.textContent
    }
})