function addItem() {
    let itemText = document.getElementById('newItemText').value;
    let itemValue = document.getElementById('newItemValue').value;
    let option = document.createElement("OPTION");
    option.textContent = itemText;
    option.value = itemValue;

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

    let menu = document.getElementById('menu');
    menu.appendChild(option);
}