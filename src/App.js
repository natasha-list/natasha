import Loader from './assets/oval.svg'
import {Router} from './router.js'
export const App = async ()=>{
    const $Root = document.getElementById('root')
    const $LoaderBox = document.createElement('section')
    $LoaderBox.innerHTML = `<img src="${Loader}" alt="loader spinner" class="loader__image"> `
    $LoaderBox.classList.add('app__loader__box')
    $Root.appendChild($LoaderBox)
    await Router()
    $Root.removeChild($LoaderBox)
}
