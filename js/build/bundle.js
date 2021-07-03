'use strict';

function DragStart(event) {  

    // in case using jquery
    event = event.originalEvent;
    
    // element
    var element = event.currentTarget;

    // setData
    var data = element.dataset.order; 
    event.dataTransfer.setData("order", data);  

}

function Drop(event) { 

    // in case using jquery because of $('.DropSpace')
    event = event.originalEvent;

    //
    $(event.currentTarget).css({"background-color": "transparent"});

    //
    var primaryOrder = event.dataTransfer.getData("order");
    var primary = $('.item[data-order='+primaryOrder+']'); 
    var space = primary.prev(); 
    
    //
    space.remove();
    primary.remove();

    //
    $(event.currentTarget).before(space);
    $(event.currentTarget).before(primary);
  
    //
    var changeEvent = new Event('change'); 
    document.querySelector('.list').dispatchEvent(changeEvent);

}

function init() {
        
    // 
    $('.item').on('dragstart', DragStart); 

    //
    $('.DropSpace').on('dragover', (event) => {
        event.preventDefault();   
    });

    //
    $('.DropSpace').on('dragenter', (event) => { 
        $(event.currentTarget).css({"background-color": "skyblue"});
    });

    //
    $('.DropSpace').on('dragleave', (event) => { 
        $(event.currentTarget).css({"background-color": "transparent"});
    });

    //
    $('.DropSpace').on('drop', Drop);

}

//
init();

// when elements replaced
$('.list').on('change', function (e) {
    console.log('kk');
    init();
});
