function addItem() {
    let li = document.createElement('li');
    let text = document.getElementById("newItemText").value;
    let ul = document.getElementById("items");
    li.textContent = text;
    ul.appendChild(li);
}