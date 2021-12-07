export const InformationLayout = ({image,text,extraElement,classFatherBox})=>{

    const {url,orientations} = image
    const {mobile,desktop} = orientations
    const {title,description} = text
    const $InfoBox = document.createElement('section')
    $InfoBox.classList.add(classFatherBox,`info-layout__box__${desktop}`)

    $InfoBox.innerHTML = `
    
        <img src="${url}" alt="${title} image" class="info-layout__image__mobile__${mobile} info-layout__image__desktop__${desktop}">
    
        <section class="info-layout__info-text__box">

            <div class="info-layout__info__box">
                <p class="info-layout__title" >${title}</p>
                <p class="info-layout__description" >${description}</p>
            </div>

            <div class="info-layout__extra__box">
                ${extraElement === null ? '' : extraElement}
            </div>

        </section>
    
    
    `
    return $InfoBox
}