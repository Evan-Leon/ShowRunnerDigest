import "../styles/index.scss";
async function getData(showRunner) {
 
    const positions = [
        "Executive Producer", "Creator"
    ]
    const apiUrl = `https://api.tvmaze.com/people/${showRunner.nameId}/crewcredits?embed=show`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const shows = [];
    const titles = [];

    
    data.forEach(title => {
        if (title._embedded.show.rating.average){
            if (!titles.includes(title._embedded.show.name) && positions.includes(title.type)){
                shows.push({title: title._embedded.show.name, rating:title._embedded.show.rating.average})
                titles.push(title._embedded.show.name)
        }}

    })

    let ratingCounter = 0;
    const showsAvg = shows.forEach(show => {
       
        ratingCounter += show.rating
        // console.log(`ratingscounter:${ratingCounter}`)
        // console.log(shows.length)
        return (ratingCounter/shows.length)
    })
    

    if (shows.length > 8){
        const smallShows = shows.slice(0,8);
        return {shows: smallShows, name: showRunner.name}
    } else {
        return {shows, name: showRunner.name, seriesAvg: showsAvg}
    }
}

export default getData;