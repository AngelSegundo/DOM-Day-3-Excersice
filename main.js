
const nights = document.querySelector("#nights")
const selectedCity = document.querySelector("#selectedCity")
const send = document.querySelector(".send")
const hotelCost = document.querySelector("#hotelCost")
const travelCost = document.querySelector("#travelCost")
const carCost = document.querySelector("#carCost")
const totalCost = document.querySelector("#totalCost")


function costeHotel(num) {
    const costePrice = num * 140
    return costePrice
}

function costeAlquilerCoche(num) {
    const price = num * 40

    if (num < 3) {
        return price
    } else
        if (num > 2 && num < 7) {
            return price - 20
        } else {
            return price - 50
        }
}

function costeAvion(num) {
    const priceOviedo = 15
    const priceTokyo = 700
    const priceMadrid = 90
    const priceBarcelona = 90

    if (selectedCity.value === "Oviedo"){
        return num * priceOviedo
    }else
    if (selectedCity.value === "Oviedo"){
        return num * priceOviedo


}



send.onclick = () => {
    console.log(costeHotel(nights.value))
    console.log(costeAlquilerCoche(nights.value));

    let cityValue = selectedCity.value
    console.log(cityValue);


    totalCost.value = `Noches ${nights.value} --- Ciudad ${cityValue}.`


}


