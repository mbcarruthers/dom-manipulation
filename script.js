document.addEventListener("DOMContentLoaded", function() {

    const button = document.createElement("button");
    button.className = "add_square";
    button.textContent = "add square";

    button.addEventListener("click", create_square);
    document.body.appendChild(button);

    let div_counter = 0;
    function create_square() {
        const div  = document.createElement("div");
        div.id = div_counter;
        div.className = "square";
        div.style.margin = "1em";
        div.style.backgroundColor = "black";
        div.style.width = "100px";
        div.style.textAlign = "center";
        div.style.height = "100px";
        div.addEventListener("mouseover", function() {
            div.style.color = "white";
            div.textContent = div.id;
        });
        div.addEventListener("mouseout", function() {
            div.style.color = "black";
            div.textContent = "";
        });

        div.addEventListener("click" , function () {
            div.style.backgroundColor = `rgb(${Math.floor( Math.random() * 256)} , ${Math.floor( Math.random() * 256)} , ${Math.floor( Math.random() * 256)} )`;
        });

        div.addEventListener("dblclick", function() {
            const all_divs = document.querySelectorAll(".square");
            if(div.id % 2 === 0) {  // if div id is even
                const index = parseInt(div.id) + 1;
                if(index >= all_divs.length) {
                    alert("There is nothing to delete");
                } else {
                    document.body.removeChild(all_divs[index]);
                }
            } else {    // if div id is odd
                const index = parseInt(div.id) - 1;
                if(index < 0) {
                    alert("There is nothing to delete");
                    console.log(index);
                    console.log(all_divs.length);
                } else {
                    document.body.removeChild(all_divs[index]);
                    console.log(all_divs[index].textContent);
                }
            }
        });
        div_counter++;
        document.body.appendChild(div);
    }

});
