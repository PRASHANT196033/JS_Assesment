var items = [];

function addItem(item) {
    items.push(item);
}

function displayItems() {
    if (items.length === 0) {
        console.log("The array is empty.");
    } else {
        console.log("Items in the array:");
        items.forEach(function(item, index) {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

addItem("Apple");
addItem("Banana");
addItem("Cherry");

displayItems();
