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
let selector = document.getElementById('type-select');
let btnColor=document.getElementById('btn');

drawIcons(containerIcons, icons);

//Cambio di colore di tutte le icone in base al click
btnColor.addEventListener('click',
	function(){
		
		
		let content = '';
		
		icons.forEach(oggetto => {
			itemColor='#'+ hexColour(getRandomNumber(0, 255),getRandomNumber(0, 255),getRandomNumber(0, 255));


			content += `<div class="icon">
							<i style="color: ${itemColor};" class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"></i>
							<div class="icon-text">${oggetto.name}</div>
						</div>`;
		});
					
					console.log(content)
		
					containerIcons.innerHTML=content
	}
)

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

//creo i valori della select
let valueSelect=selector.value;

valueSelect+=`  <option value="">All</option>
				<option value="animal">Animal</option>
				<option value="vegetable">Vegetable</option>
				<option value="user">User</option>`;
selector.innerHTML+= valueSelect

//Funzione per creare icone all'interno del container
function drawIcons(container, icons) {

    let content = '';

    icons.forEach(oggetto => {

        content += `<div class="icon">
						<i style="color: ${oggetto.color};" class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"></i>
						<div class="icon-text">${oggetto.name}</div>
                    </div>`;
    });

    container.innerHTML = content;

}

function hexColour(c,a,b) {
	let valore;
	let valore2;
	let valore3;
	let risultato;
	if (c < 256 && a<256 && b<256) {
	  valore= Math.abs(c).toString(16);
	  valore2= Math.abs(a).toString(16);
	  valore3= Math.abs(b).toString(16);
	  risultato=valore+valore2+valore3
	  return risultato;
	}
	
}
  
 

  function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}
  