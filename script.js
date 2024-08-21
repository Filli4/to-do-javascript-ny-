


let Lists = document.getElementById("lists");

function newElement() {
    let li = document.createElement("li");
    let MakeList = document.getElementById("input").value;
    let text = document.createTextNode(MakeList);
    li.appendChild(text);
    
    Lists.appendChild(li);

    document.getElementById("input").value = '';

    let span = document.createElement("span")
    let closeText = document.createTextNode("Close")
    span.className = "close"
    span.appendChild(closeText)
    li.appendChild(span)

    span.onclick= function() {
        let div = this.parentElement;
        div.style.display = "none"
    }
}
