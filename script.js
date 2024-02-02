const hamburger = document.querySelector("#hamburger")
const close = document.querySelector("#close")
const navigation = document.querySelector(".header__navigation")


//show navigation
hamburger.addEventListener("click", function(e){
        navigation.style.display = "block"
        hamburger.style.display = "none"
        close.style.display = "block"
})

//hide navigation
close.addEventListener("click", function(e){
            navigation.style.display = "none"
            hamburger.style.display = "block"
            close.style.display = "none"
               
})

