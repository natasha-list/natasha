import Splide from '@splidejs/splide'
import PhoneOne from '../assets/phone-one.svg'
import PhoneTwo from '../assets/phone-two.svg'
export const Slider = ()=>{
    const $Slider = document.createElement('section')
    $Slider.classList.add('slider__box')
    $Slider.innerHTML = `
        <div class="splide">
            <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">
                            <div class="slide__box">
                                <p class="">
                                    Natasha allows you to create 
                                    multiple to-do lists,
                                    to identify them allows you to add an 
                                    emoji, title and description
                                </p>
                                <img src="${PhoneOne}" alt="" class="">
                            </div>
                        </li>
                        <li class="splide__slide">
                            <div class="slide__box">
                                 <p class="">
                                    After creating your to-do lists, it's time to create the tasks and complete them.
                                </p>
                                <img src="${PhoneTwo}" alt="" class="">
                            </div>
                        </li>
                    </ul>
            </div>
        </div>
    `
    return $Slider
}
export const SliderFucntion = ( )=>{
    new Splide('.splide',{
        type:'loop',
        width:'100%'
    }).mount()
}