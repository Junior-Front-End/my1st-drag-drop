
function Drop(event) { 

    //
    event.currentTarget.style = "background-color: transparent"

    // find primary node object
    var primaryOrder = event.dataTransfer.getData("order");
    var primary = document.querySelector('.item[data-order="'+primaryOrder+'"]')
    var space = primary.previousElementSibling;
     

    // delete primary
    primary.previousElementSibling.outerHTML = '';
    primary.outerHTML = '';

    // find destination node object
    var destination = event.currentTarget

    // insertBefore
    destination.parentNode.insertBefore(primary, destination);
    primary.parentNode.insertBefore(space, primary);


}