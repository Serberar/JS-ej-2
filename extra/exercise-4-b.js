let textos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

let findArrayIndex = (array, text) => { 
    if(array.includes(text)) {
        return array.indexOf(text) 
    }
}

let removeItem = (array, index) => { 
    if(index !== undefined) array.splice(index, 1);    
};

removeItem(textos, findArrayIndex(textos, 'Mosquito'));

console.log(`array textos -> ${textos}`);