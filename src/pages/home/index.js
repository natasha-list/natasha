import {Header} from '../../components/Header.js'
import { InformationLayout } from '../../helpers/information_layout.js'
import WelcomeImage from '../../assets/undraw_note_list_re_r4u9.svg'
import DownlaodImage from '../../assets/undraw_in_sync_re_jlqd.svg'
import { Slider} from '../../components/Slider.js'
export const Home = async ()=>{
    const $Home = document.createElement('section')
    $Home.classList.add('section__home')
    $Home.appendChild(Header())
    $Home.appendChild(InformationLayout({
        image:{
            url:WelcomeImage,
            orientations:{
                mobile:'bottom',
                desktop:'left'
            }
        },
        text:{
            title:'Welcome to Natasha',
            description:'The software that will help you plan all your tasts'
        },
        extraElement:null,
        classFatherBox:'welcome__section',
    }))
    $Home.appendChild(Slider())
    $Home.appendChild(InformationLayout({
        image:{
            url:DownlaodImage,
            orientations:{
                mobile:'bottom',
                desktop:'right'
            }
        },
        text:{
            title:'Download',
            description:'download it on the device you want'
        },
        extraElement:`<button class="button-download-app">Download</button>`,
        classFatherBox:'download__section',
    }))
    return $Home
}
