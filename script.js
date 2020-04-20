// const darkMode = document.querySelector("#dark-mode")
// darkMode.addEventListener("click", function(){
//     const formElement = document.querySelector("form");
//     formElement.classList.toggle("dark-mode")
// })

// Add a button that says "Jordan Mode"
// In your JavaScript file, write an click event listener that increases the font size on your form to 3 em when you click it so Jordan can see it
// When you click the button again, the font should go back to a normal size

// const jordanMode = document.querySelector("#jordan-mode")


// jordanMode.addEventListener("click", function(){

//  document.querySelector("form").classList.toggle("jordan-mode")
// })

// document.querySelector("#submit-button").addEventListener("click",function(){
//    //get vaules of name and email input
//    const nameInput = document.querySelector("#name-input")
//    const emailInput = document.querySelector("#email.input")
     
//    const nameValue = nameInput.value
//    const emailValue = emailInput.value
   
//    //print those values to the dom

//    document.querySelector("#output-container").innerHTML += `<section>
//      <h3>${nameValue}</h3>
//      <p>${emailValue}</p>

//    </section>
//    `
// })


// Create an input field in your DOM. Give it an id of message.
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.


// const inputField = document.querySelector("#input-field").innerHTML = `
// <section>
// <input type="text" placeholder="message" name="message" id="message">
//      <div id="flexbox">
//         <article id="unique">Sample Text</article>
//         <article id="not-unique">Blah</article>
//      </div>
// </section>
// `
// document.querySelector("#message").addEventListener("keyup", function(){
//     // console.log("something")
//     document.querySelector("#unique").textContent = document.querySelector("#message").value
//     document.querySelector("#not-unique").textContent = document.querySelector("#message").value


// })

// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// Have your developer tools open. When you click the button, the following element...

///add text with .textcontent but can you replace a class with text content

function flightHandlerFunction(){
    document.querySelector("#flight").classList.remove("disabled")
    document.querySelector("#flight").classList.add("enabled")
}


document.querySelector("#activate-flight").addEventListener("click", function(){
    flightHandlerFunction()
})


// Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements

// document.querySelector("#activate-mindreading").addEventListener()
// document.querySelector("#activate-xray").addEventListener()

function mindReadingHandlerFunction(){
    document.querySelector("#mindreading").classList.remove("disabled")
    document.querySelector("#mindreading").classList.add("enabled")
}


document.querySelector("#activate-mindreading").addEventListener("click", function(){
    mindReadingHandlerFunction()
   
})


function xrayHandlerFunction(){
    document.querySelector("#xray").classList.remove("disabled")
    document.querySelector("#xray").classList.add("enabled")
}


document.querySelector("#activate-xray").addEventListener("click", function(){
    xrayHandlerFunction()
})

// Once that is complete, add two more buttons

// Enable All Powers
// Disable All Powers
// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.



document.querySelector("#activate-all").addEventListener("click", function(){
    activateHandlerFunction()
    // console.log("something")
   
})

function activateHandlerFunction(){
    const enabled = document.querySelectorAll(".power")
    for(let i = 0; i < enabled.length; i++){
     enabled[i].classList.add("enabled")
    }
}

document.querySelector("#deactivate-all").addEventListener("click", function(){
    deactivateHandlerFunction()
   
})

function deactivateHandlerFunction(){
    const enabled = document.querySelectorAll(".power")
    for(let i = 0; i < enabled.length; i++){
     enabled[i].classList.remove("enabled")
    }
}


