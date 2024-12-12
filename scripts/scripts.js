const closeButton = document.getElementById('CloseBannerButton')
const cookieBanner = document.getElementById('cookieBanner')
closeButton.addEventListener('clicK',() => {
    cookieBanner.classList.add('invisible')
})