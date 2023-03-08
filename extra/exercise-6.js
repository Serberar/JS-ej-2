let nombres = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

let swap = (array, first, last) => {
    primero = array[first];
    ultimo = array[last];
    array.splice(first, 1, ultimo);
    array.splice(last, 1, primero);
};

swap(nombres, 1, 3);

console.log(nombres)
