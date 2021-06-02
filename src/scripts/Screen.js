async function getData() {
    const apiUrl = "http://api.tvmaze.com/shows/551/crew";
    const response = await fetch(apiUrl);
    const data = await response.json();
    //parse the data (d3)
    console.log(data)

    document.querySelector(".screen").innerHTML= screenDisplay(
        data
        
    )
}