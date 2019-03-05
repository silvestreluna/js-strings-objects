//bonus = print to DOM
const PrintToDOM = (divId, textToPrint ) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML += textToPrint;
};

const iAmThursty = (num) => {
    /// do something 
    //is under 21 "dring some water"
    if (num < 21) {
        return 'drink some water!';
    //ove 21, under 65 "have a beer"
    } else if ( num >= 21 && num < 65 ) {
        return 'have a beer';
    } 
        // over 65 'take a nap'
    else {
        return 'Take a nap!';
    }
};

//bonus = print to DOM

PrintToDOM('drink', iAmThursty(55));
PrintToDOM('drink', iAmThursty(11));
PrintToDOM('drink', iAmThursty(67));
PrintToDOM('drink', iAmThursty(3));
PrintToDOM('drink', iAmThursty(-23));



