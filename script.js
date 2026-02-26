

let interviewList = []
let rejectedList = []

let total = document.getElementById("total")
let interviewCount = document.getElementById("interviewCount")
let rejectedCount = document.getElementById("rejectedCount")

let allCardSection = document.getElementById("all-card")
let filterSection = document.getElementById("filter-section")
const emptyMessage = document.getElementById("empty-message")

let main = document.getElementById("all-card")



function calculateCount() {

    let cards = allCardSection.querySelectorAll(".w-\\[80\\%\\]")

    total.innerText = cards.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}

calculateCount()


function toggleStyle(id) {

    document.getElementById("all-filter-btn").classList.remove("bg-blue-400")
    document.getElementById("interview-button").classList.remove("bg-blue-400")

    document.getElementById("rejected-button").classList.remove("bg-blue-400")

      document.getElementById("all-filter-btn").classList.add("bg-gray-300")
       document.getElementById("interview-button").classList.add("bg-gray-300")
     document.getElementById("rejected-button").classList.add("bg-gray-300")

    document.getElementById(id).classList.remove("bg-gray-300")
    document.getElementById(id).classList.add("bg-blue-400")

    if (id === "all-filter-btn") {
        allCardSection.classList.remove("hidden")
        filterSection.classList.add("hidden")
    }

if (id === "interview-button") {
        showInterview()
    }

    if (id === "rejected-button") {
        showRejected()
    }

    checkEmpty()
}




main.addEventListener("click", function (event) {

    let card = event.target.closest(".w-\\[80\\%\\]")
    if (!card) return

    let heading = card.querySelector(".heading").innerText
    let details = card.querySelector(".details").innerText
    let notes = card.querySelector(".notes").innerText
    let statusBtn = card.querySelector(".first-btn")

    
    if (event.target.classList.contains("interview-btn")) {

        statusBtn.innerText = "Interview"

        let exists = interviewList.find(item => item.heading === heading)

        if (!exists) {
            interviewList.push({ heading, details, notes })
        }

        rejectedList = rejectedList.filter(item => item.heading !== heading)

        calculateCount()
    }

    
    if (event.target.classList.contains("rejected-btn")) {

        statusBtn.innerText = "Rejected"

        let exists = rejectedList.find(item => item.heading === heading)

        if (!exists) {
            rejectedList.push({ heading, details, notes })
        }

        interviewList = interviewList.filter(item => item.heading !== heading)

        calculateCount()
        checkEmpty()
    }

    
    if (event.target.innerText === "Delete") {

        card.remove()

        interviewList = interviewList.filter(item => item.heading !== heading)
        rejectedList = rejectedList.filter(item => item.heading !== heading)

        calculateCount()
        checkEmpty()
    }

})


function showInterview() {

     allCardSection.classList.add("hidden")
    filterSection.classList.remove("hidden")
    filterSection.innerHTML = ""

    interviewList.forEach(item => {

        let div = document.createElement("div")
        div.className = "w-[80%] mx-auto bg-base-300 p-6 mb-4"

        div.innerHTML = `
            <h2 class="text-[#002C5C] font-bold">${item.heading}</h2>
            <p class="text-sm">${item.details}</p>
            <p class="text-sm">${item.notes}</p>
            <p class="text-green-600 mt-2">Interview</p>
        `

        filterSection.appendChild(div)
    })
    checkEmpty()
}


function showRejected() {

    allCardSection.classList.add("hidden")
    filterSection.classList.remove("hidden")
    filterSection.innerHTML = ""

    rejectedList.forEach(item => {

        let div = document.createElement("div")
        div.className = "w-[80%] mx-auto bg-base-300 p-6 mb-4"

        div.innerHTML = `
            <h2 class="text-[#002C5C] font-bold">${item.heading}</h2>
            <p class="text-sm">${item.details}</p>
            <p class="text-sm">${item.notes}</p>
            <p class="text-red-600 mt-2">Rejected</p>
        `

        filterSection.appendChild(div)
    })
}

function checkEmpty() {

    const emptyMessage = document.getElementById("empty-message");

    
    if (!allCardSection.classList.contains("hidden")) {

        let cards = allCardSection.querySelectorAll(".w-\\[80\\%\\]")

        if (cards.length === 0) {
            emptyMessage.classList.remove("hidden")
        } else {
            emptyMessage.classList.add("hidden")
        }
    }

  
    else {

        if (filterSection.children.length === 0) {
            emptyMessage.classList.remove("hidden")
        } else {
            emptyMessage.classList.add("hidden")
        }
    }
}

