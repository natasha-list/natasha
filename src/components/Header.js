import Icons from '../helpers/icons.js'
export const Header = ()=>{
    const $Header = document.createElement('header')
    $Header.innerHTML = `
        <h1 class="logo">NATASHA</h1>
        <div class="hamburguer__icon">${Icons({prefix:'fas',iconName:'bars'})}</div>
        <nav>
            <ul>
                <li class="menu__item"><a href="#/home" class="menu__link">${Icons({prefix:'fas',iconName:'home'})}</a></li>
                <li class="menu__item"><a href="#/to-do-list" class="menu__link">${Icons({prefix:'fas',iconName:'table'})}</a></li>
                <li class="menu__item new-tas-item">${Icons({prefix:'fas',iconName:'plus-circle'})}</li>   
            </ul>

            <section class="session__buttons">
                <button class="session__button log-in-button">Log In</button>
                <button class="session__button log-up-button">Log Up</button>
            </section>
        </nav>
    `
    return $Header
}