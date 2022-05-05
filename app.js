const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		'X-RapidAPI-Key': 'cedebec28bmsha3b98c9dc396a2fp1f72bbjsn81d797a3b204'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=harry%20potter', options)
	.then(response => response.json())
    .then (data  => {
        //console.log(data)
        const arrayMovies = data.d 
        arrayMovies.map((Element) => {
           // console.log(Element)
            const titulo = Element.l
            //console.log(titulo)
            const image = Element.i.imageUrl
            //console.log(image)  
            const cast = Element.s 
            //console.log(cast)

            const poster = `
            <div>
                <img src="${image}"/>
                <h2>${titulo}</h2>
                <small>${cast}</small>
            </div>
            `
            document.getElementById('container').innerHTML += poster
        })
    })
	.catch(err => console.error(err));