function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function setBackgroundByID(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]')
}

function discount15 ( element){
    price = ((element*85)/100)
    return price 
}
function discount20 (element){
    price = ((element*80)/100)
    return  price
}