window.scrollTo(0,0);

const input = document.getElementById("inp");
input.value = "";
let keyCount = 0;
const spriteZero = "sprite zero"

//kicks user out of form if they
//don't answer "sprite zero"
input.addEventListener("input", function(event){
    keyCount = input.value.length;
    const currentChar = input.value[keyCount - 1];
    
    if (spriteZero[keyCount - 1] !== currentChar.toLowerCase()){
        scroll("WRONG.");
    }
    else if (keyCount === 11){
        scroll("correct!");
    }
    console.log(input.value);
});

//scrolls the page by 1 screen height
// while replacing the form in the middle 
// of the screen with a message
function scroll(message){
    setTimeout(function(){
        document.querySelector("form").remove();
        const div = document.createElement("div");
        div.classList = "message";
        div.innerHTML = message;
        document.getElementById("query-div").appendChild(div);
        setTimeout(function(){
            document.body.style.transform = `translateY(${-1*window.innerHeight}px)`;
            document.body.style.overflow = "scroll";
            setTimeout(function(){
                document.querySelectorAll("img").forEach((e) => e.classList.add("hover-enabled"));
            }, 1000);
        }, 1000);
    }, 100);
}



document.addEventListener("click",function(event){
    if (event.target.tagName === "IMG" || event.target.id === "buybutton"){
        window.location.href = "https://www.walmart.com/ip/Sprite-Zero-Lemon-Lime-Soda-12pk/10291649?wmlspartner=wlpa&selectedSellerId=101430281";
    }
});

document.getElementById("bottom").style.marginBottom = 1000;

for (let i = 0; i < 50; i++) {
    const dividers = [...document.getElementsByClassName("divider")];
    dividers.forEach(e => {
        const image = document.createElement("img");
        image.setAttribute("src", "images/Sprite_2ero.webp");
        image.setAttribute("alt", "a bottle of Sprite Zero");
        // Don't add hover-enabled class initially
        e.appendChild(image);
    });
}