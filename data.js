icons=[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const containerIcons= document.getElementById('container-icons');
const selector = document.getElementById('type-select');
let btnColor=document.getElementById('btn');

drawIcons(containerIcons, icons);

createSelection(selector, icons)

//Filtro gli elementi in base all'opzione
selector.addEventListener('change', function() {

    let selection = this.value;

    if (selection == '') {
        drawIcons(containerIcons, icons);
    } else {

        let filteredIcons = icons.filter( icon => {
            if (icon.type == selection) {
                return true;
            }
            return false;
        });

        drawIcons(containerIcons, filteredIcons);
    }
});




//Funzione per creare icone all'interno del container
function drawIcons(container, icons) {

    let content = '';

    icons.forEach(oggetto => {
		//oggetto.color=randomColor()
        content += `<div class="icon">
						<i style="color: ${oggetto.color};" class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"></i>
						<div class="icon-text">${oggetto.name}</div>
                    </div>`;
    });

    container.innerHTML = content;

}
  
//Genera colori casuali hex
function randomColor(){
	let hex='012356789abcdef';

	let color='';
	for(let i =0 ;i<6; i++){
		color+=hex[Math.floor(Math.random() * hex.length)];
	}

	return '#'+ color;
}

//creazione delle option delle select
function createSelection (container,array){
	const types=['all'];

	array.forEach(value=>{
		if(!types.includes(value.type)){
			types.push(value.type);
		}
	});

	types.forEach(value=>{
		let option=`<option value="${value}">${value}</option>`;

		container.innerHTML+=option;
	})
}