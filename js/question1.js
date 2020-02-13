const form = document.querySelector("#contactForm")

form.addEventListener("submit", validF)

function validF(event) {
    event.preventDefault();
    console.log("i was submitted")


    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector(".error")
    const firstNameV = firstName.value;

    if(checkInLe(firstNameV) === true){
        firstNameError.style.display = "none";
    }
    else{
        firstNameError.style.display = "block";
    }
}

function checkInLe(value){
    const trimV = value.trim();
    
    if(trimV.length > 2) {
        return true;
    }
    else{
        return false;
    }
}
