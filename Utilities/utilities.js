function getInputValueByID(id) {
    // console.log(id);
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue; 
    
}