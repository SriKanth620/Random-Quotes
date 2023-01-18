const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e41206ea0emshce10999aa9ad81bp18f916jsnafff65bec588',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response =>{
        //  console.log(response)
         let q= document.querySelector("#q1")
        // console.log(q)
        q.innerText=`" ${response.content} "`
        //  console.log(response.content)
         let a= document.querySelector(".a1")
         a.innerText=`- ${response.originator.name} `
        //  console.log(response.originator.name)
        setTimeout(()=> window.location.reload(), 10000)

    })
	.catch(err => console.error(err));