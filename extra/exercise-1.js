const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categories = [];
let uniques = [];

for(let movie of movies) {
    categories = categories.concat(movie.categories);
};

categories.forEach((category) => {
    if(!uniques.includes(category)) uniques.push(category);
});

uniques.forEach((category) => console.log(category));