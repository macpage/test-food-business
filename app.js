const t = document.querySelector(".one");

const mainSel = document.querySelector(".main");

const main = document.querySelector("main");

t.addEventListener("click", () => {
    mainSel.style.display = "none";
    createTeaSel();
})

function createTeaSel(){

    let items = 6;

    const teaSel = document.createElement("div");
    teaSel.classList.add("tea");
    teaSel.classList.add("selection");
    
    for(i = 0; i < items; i++){
       let sections = document.createElement("div");
       let name = document.createElement("h2");
       let pic = document.createElement("img");
        sections.classList.add("section");

        sections.appendChild(name);
        sections.appendChild(pic);
        teaSel.appendChild(sections);

    }
    
    main.appendChild(teaSel);
    teaSel.firstChild.querySelector("h2").innerHTML = "Make my Own Tea!";
    teaSel.childNodes[1].querySelector("h2").innerHTML = "Milk Tea";
    teaSel.childNodes[2].querySelector("h2").innerHTML = "Fruit Tea";
    teaSel.childNodes[3].querySelector("h2").innerHTML = "Frappe";
    teaSel.childNodes[4].querySelector("h2").innerHTML = "Soda";
    teaSel.childNodes[5].querySelector("h2").innerHTML = "Lemonade";

    teaSel.firstChild.querySelector("img").src = "../test-food-business/pics/tea/own.png";
    teaSel.childNodes[1].querySelector("img").src = "../test-food-business/pics/tea/milk.png";
    teaSel.childNodes[2].querySelector("img").src = "../test-food-business/pics/tea/fruit.png";
    teaSel.childNodes[3].querySelector("img").src = "../test-food-business/pics/tea/frappe.png";
    teaSel.childNodes[4].querySelector("img").src = "../test-food-business/pics/tea/soda.png";
    teaSel.childNodes[5].querySelector("img").src = "../test-food-business/pics/tea/lemonade.png";

    teaSel.firstChild.addEventListener("click", ()=> {
        teaSel.style.display = "none";
        bobaEditor();
    })
}

function bobaEditor(){
    const editor = document.createElement("div");
    editor.classList.add("editor");
    let pic = document.createElement("img");
    let pic2 = document.createElement("img");
    pic2.classList.add("topping");
    for(let i = 0;i<3;i++){
        let sections = document.createElement("div");
        
        sections.classList.add("editor-section");
        
       editor.appendChild(sections); 
    }

    main.appendChild(editor);
    editor.childNodes[1].appendChild(pic);
    editor.childNodes[1].appendChild(pic2);
    editor.childNodes[1].childNodes[0].src = "../test-food-business/pics/tea/empty.png";
    //editor.childNodes[1].childNodes[1].src = "../test-food-business/pics/tea/strawTopping.png";

    const tea = document.createElement("div");
    const toppings = document.createElement("div");
    const sugar = document.createElement("div");
    const temp = document.createElement("div");
    const size = document.createElement("div");

    
 

    editor.childNodes[0].appendChild(tea);
    editor.childNodes[0].childNodes[0].appendChild(document.createElement("h2"));
    editor.childNodes[0].childNodes[0].firstChild.innerHTML = "Tea";
    editor.childNodes[0].childNodes[0].appendChild(document.createElement("div"));
    editor.childNodes[0].childNodes[0].childNodes[1].classList.add("tea-type");
    editor.childNodes[0].childNodes[0].classList.add("tea-section");
    for(let i = 0;i<4;i++){
        editor.childNodes[0].childNodes[0].childNodes[1].appendChild(document.createElement("button"));
    }

    editor.childNodes[0].childNodes[0].childNodes[1].firstChild.style.backgroundColor = "rgb(247, 91, 99)";
    editor.childNodes[0].childNodes[0].childNodes[1].firstChild.innerHTML = "Strawberry";

    editor.childNodes[0].childNodes[0].childNodes[1].childNodes[1].style.backgroundColor = "rgb(127, 134, 227)";
    editor.childNodes[0].childNodes[0].childNodes[1].childNodes[1].innerHTML = "Blueberry";
    
    editor.childNodes[0].childNodes[0].childNodes[1].childNodes[2].style.backgroundColor = "rgb(245, 168, 120)";
    editor.childNodes[0].childNodes[0].childNodes[1].childNodes[2].innerHTML = "Peach";

    editor.childNodes[0].childNodes[0].childNodes[1].childNodes[3].style.backgroundColor = "rgb(214, 232, 55)";
    editor.childNodes[0].childNodes[0].childNodes[1].childNodes[3].innerHTML = "Green Tea";


    document.querySelector(".tea-type").firstChild.addEventListener("click", () => {
        editor.childNodes[1].childNodes[0].src = "../test-food-business/pics/tea/strawberry.png";
    })

    document.querySelector(".tea-type").childNodes[1].addEventListener("click", () => {
        editor.childNodes[1].childNodes[0].src = "../test-food-business/pics/tea/blueberry.png";
    })

    document.querySelector(".tea-type").childNodes[2].addEventListener("click", () => {
        editor.childNodes[1].childNodes[0].src = "../test-food-business/pics/tea/peach.png";
    })

    document.querySelector(".tea-type").childNodes[3].addEventListener("click", () => {
        editor.childNodes[1].childNodes[0].src = "../test-food-business/pics/tea/greentea.png";
    })


    editor.childNodes[0].appendChild(toppings);

    editor.childNodes[0].appendChild(toppings);
    editor.childNodes[0].childNodes[1].appendChild(document.createElement("h2"));
    editor.childNodes[0].childNodes[1].firstChild.innerHTML = "Toppings";
    editor.childNodes[0].childNodes[1].appendChild(document.createElement("div"));
    editor.childNodes[0].childNodes[1].childNodes[1].classList.add("topping-type");
    editor.childNodes[0].childNodes[1].classList.add("topping-section");
    
    for(let i = 0;i<4;i++){
        editor.childNodes[0].childNodes[1].childNodes[1].appendChild(document.createElement("button"));
    }

    editor.childNodes[0].childNodes[1].childNodes[1].firstChild.style.backgroundColor = "rgb(247, 91, 99)";
    editor.childNodes[0].childNodes[1].childNodes[1].firstChild.innerHTML = "Strawberry";

    editor.childNodes[0].childNodes[1].childNodes[1].childNodes[1].style.backgroundColor = "rgb(127, 134, 227)";
    editor.childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerHTML = "Blueberry";
    
    editor.childNodes[0].childNodes[1].childNodes[1].childNodes[2].style.backgroundColor = "rgb(245, 168, 120)";
    editor.childNodes[0].childNodes[1].childNodes[1].childNodes[2].innerHTML = "Peach";

    editor.childNodes[0].childNodes[1].childNodes[1].childNodes[3].style.backgroundColor = "rgb(214, 232, 55)";
    editor.childNodes[0].childNodes[1].childNodes[1].childNodes[3].innerHTML = "Apple";

    document.querySelector(".topping-type").firstChild.addEventListener("click", () => {
        editor.childNodes[1].childNodes[1].src = "../test-food-business/pics/tea/strawTopping.png";
    })

    document.querySelector(".topping-type").childNodes[1].addEventListener("click", () => {
        editor.childNodes[1].childNodes[1].src = "../test-food-business/pics/tea/blueTopping.png";
    })

    document.querySelector(".topping-type").childNodes[2].addEventListener("click", () => {
        editor.childNodes[1].childNodes[1].src = "../test-food-business/pics/tea/peachTopping.png";
    })

    document.querySelector(".topping-type").childNodes[3].addEventListener("click", () => {
        editor.childNodes[1].childNodes[1].src = "../test-food-business/pics/tea/appleTopping.png";
    })

    editor.childNodes[0].appendChild(sugar);

    editor.childNodes[0].appendChild(sugar);
    editor.childNodes[0].childNodes[2].appendChild(document.createElement("h2"));
    editor.childNodes[0].childNodes[2].firstChild.innerHTML = "sugar";
    editor.childNodes[0].childNodes[2].appendChild(document.createElement("div"));
    editor.childNodes[0].childNodes[2].childNodes[1].classList.add("sugar");
    const slider = document.createElement("input");
    slider.setAttribute("type","range");
    slider.setAttribute("min","0");
    slider.setAttribute("max","10");
    slider.setAttribute("value","5");
    let cube1 = document.createElement("img");
    cube1.src = "../test-food-business/pics/sugar/lessSugar.png";
    editor.childNodes[0].childNodes[2].childNodes[1].appendChild(cube1);
    editor.childNodes[0].childNodes[2].childNodes[1].appendChild(slider);
    let cube2 = document.createElement("img");
    cube2.src = "../test-food-business/pics/sugar/alotSugar.png";
    editor.childNodes[0].childNodes[2].childNodes[1].appendChild(cube2);
    editor.childNodes[0].childNodes[2].classList.add("sugar-section");

    editor.childNodes[0].appendChild(temp);


    editor.childNodes[0].appendChild(temp);
    editor.childNodes[0].childNodes[3].appendChild(document.createElement("h2"));
    editor.childNodes[0].childNodes[3].firstChild.innerHTML = "Hot or Cold?";
    editor.childNodes[0].childNodes[3].appendChild(document.createElement("div"));
    editor.childNodes[0].childNodes[3].childNodes[1].classList.add("temp-type");
    editor.childNodes[0].childNodes[3].classList.add("temp-section");
    const hot = document.createElement("button");
    const cold = document.createElement("button");
    hot.innerHTML = "Hot";
    cold.innerHTML = "Cold";
    hot.style.backgroundColor = "rgb(255, 160, 160)";
    cold.style.backgroundColor = "rgb(168, 225, 255)";
    editor.childNodes[0].childNodes[3].childNodes[1].appendChild(hot);
    editor.childNodes[0].childNodes[3].childNodes[1].appendChild(cold);

    editor.childNodes[0].appendChild(size);

    editor.childNodes[0].appendChild(size);
    editor.childNodes[0].childNodes[4].appendChild(document.createElement("h2"));
    editor.childNodes[0].childNodes[4].firstChild.innerHTML = "Cup Size";
    editor.childNodes[0].childNodes[4].appendChild(document.createElement("div"));
    editor.childNodes[0].childNodes[4].childNodes[1].classList.add("size-type");
    editor.childNodes[0].childNodes[4].classList.add("size-section");
    const s_cup = document.createElement("button");
    const m_cup = document.createElement("button");
    const l_cup = document.createElement("button");

    s_cup.innerHTML = "Small";
    m_cup.innerHTML = "Medium";
    l_cup.innerHTML = "Large";
    
    editor.childNodes[0].childNodes[4].childNodes[1].appendChild(s_cup);
    editor.childNodes[0].childNodes[4].childNodes[1].appendChild(m_cup);
    editor.childNodes[0].childNodes[4].childNodes[1].appendChild(l_cup);

   const btns = document.querySelectorAll("button");



       const order = document.createElement("button");
    order.innerHTML = "Ready!";
    editor.childNodes[2].appendChild(order);


   for(let i = 0;i<btns.length;i++){
    btns[i].addEventListener("click", (e)=>{
        if(!e.currentTarget.classList.contains("pressed")){

               let teaButtons = document.querySelector(".tea-type").querySelectorAll("button");
         

    for(let i = 0;i<teaButtons.length;i++){
        if(teaButtons[i].classList.contains("pressed") && e.currentTarget.parentElement.className == teaButtons[i].parentElement.className){
            teaButtons[i].classList.remove("pressed"); 
        } 
        
    }


    let toppingsButtons = document.querySelector(".topping-type").querySelectorAll("button");
         

    for(let i = 0;i<toppingsButtons.length;i++){
        if(toppingsButtons[i].classList.contains("pressed") && e.currentTarget.parentElement.className == toppingsButtons[i].parentElement.className){
            toppingsButtons[i].classList.remove("pressed"); 
        } 
        
    }

    let tempButtons = document.querySelector(".temp-type").querySelectorAll("button");
         

    for(let i = 0;i<tempButtons.length;i++){
        if(tempButtons[i].classList.contains("pressed") && e.currentTarget.parentElement.className == tempButtons[i].parentElement.className){
            tempButtons[i].classList.remove("pressed"); 
        } 
        
    }



    let sizeButtons = document.querySelector(".size-type").querySelectorAll("button");
         

    for(let i = 0;i<sizeButtons.length;i++){
        if(sizeButtons[i].classList.contains("pressed") && e.currentTarget.parentElement.className == sizeButtons[i].parentElement.className){
            sizeButtons[i].classList.remove("pressed"); 
        } 
        
    }


e.currentTarget.classList.add("pressed"); 
        }
        


    })
   }



   

}



