window.addEventListener("DOMContentLoaded", event => {
    let h1 = document.createElement("h1");
    h1.setAttribute("id", "h1");
    let name = document.createTextNode("owen stetzer");
    h1.appendChild(name);
    document.body.appendChild(h1);

    let title = document.createElement("title");
    document.body.appendChild(title);
    let time = () => {
        let date = new Date();
        let seconds = date.getSeconds();
        let minutes = date.getMinutes();
        let hours = date.getHours();
        title.innerText = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(time(), 1000);

    let list = document.createElement("ul");
    list.setAttribute("id", "list");
    document.body.appendChild(list);

    let detailsArr = [
        "<li>This is list item 1</li>",
        "<li>This is list item 2</li>",
        "<li>This is list item 3</li>",
        "<li>This is list item 4</li>"
    ];

    let liString = detailsArr.join(' ');
    list.innerHTML = liString
    
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