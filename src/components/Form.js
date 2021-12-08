import Icons from '../helpers/icons.js'
export const Form = ()=>{
    const $Form = document.createElement('section')
    $Form.classList.add('form__natasha__box')
    $Form.innerHTML = `
        <div class="form__natasha">
        <div class="form__close">${Icons({prefix:"fas",iconName:"times"})}</div>
        <form data-request="null" >
        <input type="email" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Password">
        <input type="submit" value="null" id="log-button">
        </form>
        <div class="message__request">
            <a href="#/" class="sign__in__option">Sign In</a> or <a href="#/" class="sign__up__option">Sign Up</a> with your account</div>
        <article class="menu__icons__form__box">
        <ul class="menu__icons__form">
        <li class="icon__social-media__form"><div class="icon-google">${Icons({prefix:"fab",iconName:"google"})} </div> </li>
        <li class="icon__social-media__form"><div class="icon-facebook">${Icons({prefix:"fab",iconName:"facebook"})} </div> </li>
        <li class="icon__social-media__form"><div class="icon-twitter">${Icons({prefix:"fab",iconName:"twitter"})} </div> </li>
        <li class="icon__social-media__form"><div class="icon-github">${Icons({prefix:"fab",iconName:"github"})} </div> </li>
        </ul>
        </article>
        </div>

    `
    return $Form
}
