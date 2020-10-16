setInterval(setClock, 1000)
const hourhand = document.querySelector('[data-hour-hand]')
const minhand = document.querySelector('[data-min-hand]')
const sechand = document.querySelector('[data-sec-hand]')
setClock()

function setClock() {
    const currentDate = new Date()
    const secRation = currentDate.getSeconds() / 60
    const minRation = (secRation + currentDate.getMinutes()) / 60
    const hourRation = (minRation + currentDate.getHours()) / 12
    setRotation(sechand, secRation)
    setRotation(minhand, minRation)
    setRotation(hourhand, hourRation)

}

function setRotation(element, rotationRation) {
    element.style.setProperty('--rotation', rotationRation * 360)
}