import {Home} from './pages/home/index.js'
import { SliderFucntion } from './components/Slider.js'
export const Router = async ()=>{
    const $Root = document.getElementById('root')
    const {hash} = location
    if(hash === '' || hash=== '#/home'){
        $Root.appendChild(await Home())
        SliderFucntion()
    }
}
