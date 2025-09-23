function getInputValueByID(id) {
    // console.log(id);
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue; 
    
}

function getInnerTextID(id) {
    // console.log(id);
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue; 
    
}

function setInnerTextByIDandValue(id,value) {
    // console.log(id, value);
    document.getElementById(id).innerText = value;
    
}