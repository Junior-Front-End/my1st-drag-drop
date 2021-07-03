

export function Drop(event) { 

    // in case using jquery because of $('.DropSpace')
    event = event.originalEvent;

    // change the color 
    $(event.currentTarget).css({"background-color": "transparent"})

    // find primary element
    var primaryOrder = event.dataTransfer.getData("order");
    var primary = $('.item[data-order='+primaryOrder+']'); 
    var space = primary.prev() 
    
    // remove
    space.remove();
    primary.remove();

    // replace elements
    $(event.currentTarget).before(space);
    $(event.currentTarget).before(primary);
  
    // trigger the onChange event 
    // to add DnD events to replaced elements
    var changeEvent = new Event('change'); 
    document.querySelector('.list').dispatchEvent(changeEvent);

}