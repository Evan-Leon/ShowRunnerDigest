function makeGraph(apiData){

    const {shows, name} = apiData; //deconstruct data

    d3.selectAll("svg > *").remove(); //clear svg
    const svg = d3.select('#bar-chart')
        .style('background-color', '#b0e0e696')

    const margin = ({top: 30, right: 0, bottom: 30, left: 40})
    const height = svg.attr("height");
    const width = svg.attr("width");
    const x = d3.scaleBand()
        .domain(d3.range(shows.length))
        .range([margin.left, width - margin.right])
        .padding(0.1)

    const y = d3.scaleLinear()
        .domain([0, d3.max(shows, d => d.rating)]).nice()
        .range([height - margin.bottom, margin.top])

    const xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickFormat(i => shows[i].title).tickSizeOuter(0))

    const yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(null, shows.rating))
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(shows.rating))
    
    const color = 'green'

    // const svg = d3.select('#bar-chart')
    //     .style('background-color', '#b0e0e696')

        svg.append("g")
            .attr("fill", color)
        .selectAll("rect")
        .data(shows)
        .join("rect")
            .attr("x", (d, i) => x(i))
            .attr("y", d =>height- margin.bottom- y(0) + y(d.rating))
            .attr("height", d =>y(0) - y(d.rating))//- y(d.value))
            .attr("width", x.bandwidth())
        .append('svg:title')
            .text(function(d) {return 'Rating: ' + d.rating})
    svg.append("g")
        .call(xAxis);

    svg.append("g")
        .call(yAxis);

    svg.append("text")
        .attr("x", (width/2))
        .attr("y", (margin.top))
        .attr("text-anchor", "middle")  
        .style("font-size", "28px")   
        .text(`${name}`);
    
    return svg.node();
}

export default makeGraph;