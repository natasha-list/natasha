import styles from '../public/styles.css'
import SplideStyles from '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { App } from './App'
document.addEventListener('DOMContentLoaded',async(e)=> await App())
window.addEventListener('hashchange',async(e)=> await App())
document.addEventListener('click',(e)=>{
    if(e.target.matches('.hamburguer__icon>svg')||e.target.matches('.hamburguer__icon>svg>path')){
        document.querySelector('nav').classList.toggle('animation-menu-enabled')
    }
})