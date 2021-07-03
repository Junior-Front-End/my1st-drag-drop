
 
export function DragStart(event) {  

    // in case using jquery
    event = event.originalEvent
    
    // element
    var element = event.currentTarget

    // setData
    var data = element.dataset.order; 
    event.dataTransfer.setData("order", data);  

}