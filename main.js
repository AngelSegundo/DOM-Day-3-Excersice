
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

    if (selectedCity.value === "Oviedo") {
        if (num > 3) {
            let discountedPrice = priceOviedo - (priceOviedo * 0.1)
            return discountedPrice
        } else {
            return priceOviedo
        }
    } else
        if (selectedCity.value === "Tokyo") {
            if (num > 3) {
                let discountedPrice = priceTokyo - (priceTokyo * 0.1)
                return discountedPrice
            } else {
                return priceTokyo
            }
        }
        else
            if (selectedCity.value === "Madrid") {
                if (num > 3) {
                    let discountedPrice = priceMadrid - (priceMadrid * 0.1)
                    return discountedPrice
                } else {
                    return priceMadrid
                }
            } else
                if (selectedCity.value === "Barcelona") {
                    if (num > 3) {
                        let discountedPrice = priceBarcelona - (priceBarcelona * 0.1)
                        return discountedPrice
                    } else {
                        return priceBarcelona
                    }
                }
}

send.onclick = () => {
    hotelCost.value = costeHotel(nights.value)
    carCost.value = costeAlquilerCoche(nights.value)
    travelCost.value = (costeAvion(nights.value))

    totalCost.value = (hotelCost.value * 1) + (carCost.value * 1) + (travelCost.value * 1)
}


