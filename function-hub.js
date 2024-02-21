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
