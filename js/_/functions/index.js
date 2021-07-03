import {DragStart} from './DragStart'
import {Drop} from './Drop'
 
export function init() {
        
    // 
    $('.item').on('dragstart', DragStart); 

    //
    $('.DropSpace').on('dragover', (event) => {
        event.preventDefault();   
    });

    //
    $('.DropSpace').on('dragenter', (event) => { 
        $(event.currentTarget).css({"background-color": "skyblue"})
    });

    //
    $('.DropSpace').on('dragleave', (event) => { 
        $(event.currentTarget).css({"background-color": "transparent"})
    });

    //
    $('.DropSpace').on('drop', Drop);

}