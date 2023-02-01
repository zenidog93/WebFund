

function alertMessage(element){
    alert(element);
    console.log(element);
}

function removeMessage(element){
    document.querySelector(element).remove();
    
}


let tempType= "celcius";
let todayHigh = document.querySelector('#todayHigh').innerText;
let todayLow = document.querySelector('#todayLow').innerText;

let tomorrowHigh = document.querySelector('#tomorrowHigh').innerText;
let tomorrowLow = document.querySelector('#tomorrowLow').innerText;

let fridayHigh =document.querySelector('#fridayHigh').innerText;
let fridayLow =document.querySelector('#fridayLow').innerText;

let saturdayHigh =document.querySelector('#saturdayHigh').innerText;
let saturdayLow =document.querySelector('#saturdayLow').innerText;

function convertTemp(element){
    console.log(element.value);
    console.log(document.querySelector('#todayHigh'));
    tempType = element.value;

    if(tempType =="ferenheit" ){
        todayHigh=Math.round(todayHigh *(9/5)) + 32;
        document.querySelector('#todayHigh').innerText= todayHigh;
        todayLow=Math.round(todayLow *(9/5)) + 32;
        document.querySelector('#todayLow').innerText= todayLow;

        tomorrowHigh=Math.round(todayHigh *(9/5)) + 32;
        document.querySelector('#tomorrowHigh').innerText= tomorrowHigh;
        tomorrowLow=Math.round(tomorrowLow *(9/5)) + 32;
        document.querySelector('#tomorrowLow').innerText= tomorrowLow;

        fridayHigh=Math.round(fridayHigh *(9/5)) + 32;
        document.querySelector('#fridayHigh').innerText= fridayHigh;
        fridayLow=Math.round(fridayLow *(9/5)) + 32;
        document.querySelector('#fridayLow').innerText= fridayLow;
        
        saturdayHigh=Math.round(saturdayHigh *(9/5)) + 32;
        document.querySelector('#saturdayHigh').innerText= saturdayHigh;
        saturdayLow=Math.round(saturdayLow *(9/5)) + 32;
        document.querySelector('#saturdayLow').innerText= saturdayLow;

    }
    if(element.value =="celcius") {
        todayHigh= Math.round((todayHigh -32) * (5/9));
        document.querySelector('#todayHigh').innerText= todayHigh;
        todayLow= Math.round((todayLow -32) * (5/9));
        document.querySelector('#todayLow').innerText= todayLow;

        tomorrowHigh=Math.round((tomorrowHigh -32) * (5/9));
        document.querySelector('#tomorrowHigh').innerText= tomorrowHigh;
        tomorrowLow=Math.round((tomorrowLow -32) * (5/9));
        document.querySelector('#tomorrowLow').innerText= tomorrowLow;

        fridayHigh=Math.round((fridayHigh -32) * (5/9));
        document.querySelector('#fridayHigh').innerText= fridayHigh;
        fridayLow=Math.round((fridayLow -32) * (5/9));
        document.querySelector('#fridayLow').innerText= fridayLow;
        
        saturdayHigh=Math.round((saturdayHigh -32) * (5/9));
        document.querySelector('#saturdayHigh').innerText= saturdayHigh;
        saturdayLow=Math.round((saturdayLow -32) * (5/9));
        document.querySelector('#saturdayLow').innerText= saturdayLow;

        
    }
}
