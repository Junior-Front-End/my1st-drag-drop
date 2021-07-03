import { init } from "./functions/index";


// fire the DnD events when page loads
init();

// in `drop` event
// we triggered `change` event here! 
$('.list').on('change', function(){
    init()
})

