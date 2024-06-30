let url = "https://api.genderize.io/?name="
let input = document.querySelector("input");
let btn = document.querySelector("button");
let gender = document.querySelector(".gender")
let probability = document.querySelector(".probability")
let name = document.querySelector(".name")
let locat = document.querySelector(".location")
let ip = document.querySelector(".ip");

fetch("https://get.geojs.io/v1/ip/geo.json")
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        locat.innerText = "Access Point: " + data.city + ", " + data.region + ", " + data.country;
        ip.innerText = "IP: " + data.ip
    })

let showData = () => {
    let oldUrl = url
    url = url.concat(input.value.split(' ')[0])
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            name.innerText = data.name;
            gender.innerText = data.gender
            probability.innerText = data.probability * 100 + "%"
        })
        .catch(error => {
            console.log(error)
        })
    url = oldUrl
    input.value = ""
}


btn.addEventListener("click", () => {
    showData()
})

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        showData()
    }
})
