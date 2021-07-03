function DragStart(event) {  

    // element
    var element = event.currentTarget

    // setData
    var data = element.dataset.order; 
    event.dataTransfer.setData("order", data);  

}