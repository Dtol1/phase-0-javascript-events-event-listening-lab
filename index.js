function addingEventListener(){
    const input = document.getElementById('button'); 
    function clickAlert(){
        alert('Hello, work please'); 
    }

    input.addEventListener('click', clickAlert)

}

addingEventListener() 

