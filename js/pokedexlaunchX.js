const fetchFokemon = () => {
	const pokeName = document.getElementById("pokeName")
	let pokeInput = pokeName.value.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
	fetch(url).then((res) => {
		if (res.status != "200") {
			console.log(res);
			document.getElementById("pokeId").innerHTML = "Id";
			document.getElementById("pokeNameD").innerHTML = "name";
			document.getElementById("pokeTypeU").innerHTML = "";
			document.getElementById("pokeTypeD").innerHTML = "";
			document.getElementById("hp").innerHTML = "0";
			document.getElementById("ataque").innerHTML = "0";
			document.getElementById("defensa").innerHTML = "0";
			document.getElementById("ataqueE").innerHTML = "0";
			document.getElementById("defensaE").innerHTML = "0";
			document.getElementById("velocidad").innerHTML = "0";
			alert("No se encontro este pokemon. Intenta con otro!!")
		}else{
			return res.json();
		}
	}).then( (data) => {
		console.log(data);
		 let pokeImg = data.sprites.front_default;
		 console.log(pokeImg);
		 pokeImage(pokeImg);

		 let id = data.id;
		 pokeId(id);
		 
		 let name = data.name;
		 pokeNameD(name);

		 let type = data.types;
		 pokeType(type);
		 
		 let stats = data.stats;
		 pokeStats(stats[0].base_stat, stats[1].base_stat, stats[2].base_stat, stats[3].base_stat, stats[4].base_stat, stats[5].base_stat);
		 PokeMoves(data);
	})
}
//fetchFokemon();

const pokeImage = (url) => {
	const pokeImg = document.getElementById("pokeImg");
	pokeImg.src = url;
}
const pokeId = (id) => {
	const pokeId = document.getElementById("pokeId");
	pokeId.innerHTML = id;
}
const pokeNameD = (name) => {
	const pokeNameD = document.getElementById("pokeNameD");
	pokeNameD.innerHTML = name;
}
const pokeType = (type) => {
	const pokeT1 = document.getElementById("pokeTypeU");
	const pokeT2 = document.getElementById("pokeTypeD");
	if (type.length >= 2) {
		pokeT1.innerHTML = type[0].type.name + ", ";
		pokeT2.innerHTML = type[1].type.name;
	}else{
		pokeT1.innerHTML = type[0].type.name;
		pokeT2.innerHTML = '';
	}
}
const pokeStats = (hp, ataque, defensa, ataqueE, defensaE, velocidad) => {
	const pokeHp = document.getElementById("hp");
	const pokeAtaque = document.getElementById("ataque");
	const pokeDefensa = document.getElementById("defensa");
	const pokeAtaqueE = document.getElementById("ataqueE");
	const pokeDefensaE = document.getElementById("defensaE");
	const pokeVelocidad = document.getElementById("velocidad");

	pokeHp.innerHTML = hp;
	pokeAtaque.innerHTML = ataque;
	pokeDefensa.innerHTML = defensa;
	pokeAtaqueE.innerHTML = ataqueE;
	pokeDefensaE.innerHTML = defensaE;
	pokeVelocidad.innerHTML = velocidad;
}
const PokeMoves = (data) => {
    let moves = data.moves;
    const pokemoves = document.getElementById("moves");
    pokemoves.innerHTML = "";

    for (let i = 0; i < moves.length; i++) {
        const move = document.createElement("li");
        pokemoves.appendChild(move);

        move.innerText = moves[i].move.name;
    }
    }
/*const PokeMoves = (data) => {
    let moves = data.moves;
    const pokemoves = document.getElementById("moves");
    pokemoves.innerHTML = "";

    for (let i = 0; i < moves.length; i++) {
        const move = document.createElement("li");
        pokemoves.appendChild(move);

        move.innerText = moves[i].move.name;
    }*/
//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png");
