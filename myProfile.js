window.addEventListener("DOMContentLoaded", event => {
    let background = document.createElement("div");
    background.setAttribute("class", "background");
    document.body.appendChild(background);
    
    let h1 = document.createElement("h1");
    h1.setAttribute("id", "h1");
    let name = document.createTextNode("owen stetzer");
    h1.appendChild(name);
    background.appendChild(h1);

    let title = document.createElement("title");
    document.body.appendChild(title);
    
    let list = document.createElement("ul");
    list.setAttribute("id", "list");
    background.appendChild(list);

    let detailsArr = [
        "<h3>Generic List</h3>",
        "<li>This is list item 1</li>",
        "<li>This is list item 2</li>",
        "<li>This is list item 3</li>",
        "<li>This is list item 4</li>",
        `<li id = "clock"></li>`
    ];
    
    let liString = detailsArr.join(' ');
    list.innerHTML = liString

    let clockItem = document.getElementById("clock");
    
    let seconds;
    let minutes; 
    let hours;
    let time = () => {
        let date = new Date();
        seconds = 60 - date.getSeconds();
        minutes = 60 - date.getMinutes();
        hours = 24 - date.getHours();
        if (day = 1 - date.getDay() < 0) {
            day = 30 + (day = 1 - date.getDay())
            month = 7 - date.getMonth();
        } else {
            day = 1 - date.getDay();
            month = 8 - date.getMonth();
        }
        title.innerText = `${month} ${day} ${hours}:${minutes}:${seconds}`;
        clockItem.innerText = `I live in Atlanta, GA, and it's currently ${hours}:${minutes}:${seconds}`
    }
    setInterval(time, 1000);

    
    list.setAttribute("class", "my-details");
    h1.setAttribute("class", "name");
    let lis = document.querySelectorAll("li");
    lis.forEach(li => li.setAttribute("class", "detail"));

    
    
    
    
    
    
    // let listElement = document.getElementById('list');
    // list.innerHTML = liString
    // listElement.innerHTML = liString
    // let listItem1 = document.createElement("li");
    // let listItem1Content = document.createTextNode("This is list item 1");
    // listItem1.appendChild(listItem1Content);
    // list.appendChild(listItem1);
    
    // let listItem2 = document.createElement("li");
    // let listItem2Content = document.createTextNode("This is list item 2");
    // listItem2.appendChild(listItem2Content);
    // list.appendChild(listItem2);

    // let listItem3 = document.createElement("li");
    // let listItem3Content = document.createTextNode("This is list item 3");
    // listItem3.appendChild(listItem3Content);
    // list.appendChild(listItem3);

    // let listItem4 = document.createElement("li");
    // let listItem4Content = document.createTextNode("This is list item 4");
    // listItem4.appendChild(listItem4Content);
    // list.appendChild(listItem4);


});