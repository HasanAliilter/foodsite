const searchForm = document.querySelector(".search-form");

/* buttons */
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click",() => {
    searchForm.classList.toggle("active");
    document.addEventListener("click",(e) => {
        if(composedPath(e).includes(searchBtn)){
            searchForm.classList.remove("active");
        }
    });
   
});
const shoppingCart = document.querySelector("#shopping-cart");

/* buttons */
const  cartİtemsContainer= document.querySelector(".cart-items-container");

shoppingCart.addEventListener("click",function(){
    cartİtemsContainer.classList.toggle("active");
});

const menuBtn = document.querySelector("#menu-btn");

/* buttons */
const  navbars= document.querySelector(".navbar");

menuBtn.addEventListener("click",function(){
    navbars.classList.toggle("active");
})
