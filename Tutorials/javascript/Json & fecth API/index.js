const url= "https://catfact.ninja/fact"


const fetchData = () =>{
    fetch(url).then((data) => {
        console.log(data)
    })
}

fetchData();