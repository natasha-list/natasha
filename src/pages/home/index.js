import {Header} from '../../components/Header.js'
import { InformationLayout } from '../../helpers/information_layout.js'
import WelcomeImage from '../../assets/undraw_note_list_re_r4u9.svg'
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
    return $Home
}
