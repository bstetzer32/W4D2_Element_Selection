window.addEventListener("DOMContentLoaded", event => {
    let h1 = document.createElement("h1");
    h1.setAttribute("id", "h1");
    let name = document.createTextNode("owen stetzer");
    h1.appendChild(name);
    document.body.appendChild(h1);

    let list = document.createElement("ul");
    list.setAttribute("id", "list");
    document.body.appendChild(list);

    let listItem1 = document.createElement("li");
    let listItem1Content = document.createTextNode("This is list item 1");
    listItem1.appendChild(listItem1Content);
    list.appendChild(listItem1);
    
    let listItem2 = document.createElement("li");
    let listItem2Content = document.createTextNode("This is list item 2");
    listItem2.appendChild(listItem2Content);
    list.appendChild(listItem2);

    let listItem3 = document.createElement("li");
    let listItem3Content = document.createTextNode("This is list item 3");
    listItem3.appendChild(listItem3Content);
    list.appendChild(listItem3);

    let listItem4 = document.createElement("li");
    let listItem4Content = document.createTextNode("This is list item 4");
    listItem4.appendChild(listItem4Content);
    list.appendChild(listItem4);
});