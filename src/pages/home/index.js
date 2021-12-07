import {Header} from '../../components/Header.js'
export const Home = async ()=>{
    const $Home = document.createElement('section')
    $Home.classList.add('section__home')
    $Home.appendChild(Header())
    return $Home
}
