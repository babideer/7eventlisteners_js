// click - lightswitch 
    let lightbtn = document.querySelector('#lightbtn');

    lightbtn.addEventListener("click",function(){
        const bColor = document.body.style.backgroundColor;
        if (bColor === 'white'){
            document.body.style.backgroundColor = "black";
        }
        else{
            document.body.style.backgroundColor = "white";
        }
    });

// click/switch - calculator 
    let input1 = document.querySelector("#input1");
    let input2 = document.querySelector("#input2");
    let select = document.querySelector("#operation")
    let resultat = document.querySelector("#result"); 
    let calcBtn = document.querySelector("#calcBtn")

    calcBtn.addEventListener("click", function(){

    let val1 = Number(input1.value);
    let val2 = Number(input2.value);

    switch (select.value) {
        case "+":
            resultat.innerHTML = val1 + val2; 
            break;
        case "-":
        resultat.innerHTML = val1 - val2;       
            break;

        case "*":
            resultat.innerHTML = val1 * val2;      
        break;

        case "/":
            resultat.innerHTML = val1 / val2; 
        break;
    
        default:
            break;
    }

    }); 

// mouseover/mouseout
    let img = document.querySelector("#imgmouseover");

    img.addEventListener("mouseover", function(){
    img.src != "images/cat2.jpg";{
        img.src = "images/cat2.jpg";
    }
    });
    img.addEventListener("mouseout", function(){
        img.src != "images/cat1.jpg";{
            img.src = "images/cat1.jpg";
        }
    });

// mousedown/mouseup
    document.querySelector("#mousedbtn").addEventListener("mousedown", mouseDown);
    document.querySelector("#mousedbtn").addEventListener("mousedown", mouseUp);

    function mouseDown() {
        let character = new Array("Ghostface", "Freddy Krueger", "Michael Myers", "Hannibal Lecter", "Chucky");
        character.sort();

        document.getElementById("array").innerHTML = character.join(", ");
    }
    function mouseUp(){
        document.getElementById("mousedbtn").style.color = "red";
    };

// double click
    document.getElementById("demo").addEventListener("dblclick", dsplDate);

    function dsplDate() {
    alert(Date());
    };

// keydown
    let player1 = {
        name : 'Mario',
        age : 38, 
        location: 'Rainbow Road'
    };
    let player2 = {
        name : 'Luigi',
        age : 38, 
        location: 'Mushroom Kingdom'
    };
    let player3 = {
        name : 'Peach',
        age : 37, 
        location: 'Mushroom Kingdom'
    };
    let player4 = {
        name : 'Toad',
        age : '??', 
        location: 'Bowsers Palace'
    };
    let player5 = {
        name : 'Yoshi',
        age : '??', 
        location: 'Mushroom World'
    };
    

    document.querySelector('keydown');

    window.onkeydown = function (event) {
        if (event.keyCode === 77) {
            alert(JSON.stringify(player1));
    
        }else if (event.keyCode === 76) {
            alert(JSON.stringify(player2));

        } else if (event.keyCode === 80) {
            alert(JSON.stringify(player3));
        }
        else if (event.keyCode === 84) {
            alert(JSON.stringify(player4));
        }
        else if (event.keyCode === 89) {
            alert(JSON.stringify(player5));
        }
    };