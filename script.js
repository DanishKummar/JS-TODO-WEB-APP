const del = ()=>{
    let input = document.getElementById("input")
    input.value = ""
}
const btnAd = ()=>{
    let input = document.getElementById("input")
    let li = document.createElement("li")
    let text = document.createTextNode(input.value)
    li.appendChild(text)
    let ul = document.getElementById("ul")
    ul.appendChild(li)
    del()
    // creating the class attribute
    li.setAttribute("class","list")
    // creating a delete button
    let delButton = document.createElement("button")
    let btnText = document.createTextNode("Delete")
    delButton.appendChild(btnText)
    li.appendChild(delButton)
    delButton.setAttribute("class","delButton")
    delButton.setAttribute("onclick","delbtn(this)")
    let hr = document.createElement("hr")
    li.appendChild(hr)
    hr.setAttribute("class","hr")
    // creating a edit button
    let editBtn = document.createElement("button")
    let editBtnText = document.createTextNode("Edit")
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)
    editBtn.setAttribute("class","edit-button")
    editBtn.setAttribute("onclick","editbtn(this)")
}
const deleteAll = ()=>{
    let ul = document.getElementById("ul")
    ul.innerHTML = "";
}
const delbtn = (e)=>{
    e.parentNode.remove()
}
const editbtn = (e)=>{
    let val = e.parentNode.firstChild.nodeValue;
    let editValue = prompt("Enter your new text", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editValue;
}