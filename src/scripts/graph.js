function makeGraph(apiData){

    const {shows, name, seriesAvg} = apiData; //deconstruct data
    
    d3.selectAll("svg > *").remove(); //clear svg
    const svg = d3.select('#bar-chart')
        .style('background-color', '#47b9b91f')

    const margin = ({top: 30, right: 0, bottom: 50, left: 60})
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
        .style("font-size", "15px")
    
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
                
    
    const color = '#e9bc8fd8'

    let hover = svg
        .append("div")
        .style("opacity", 0)
        .attr("class", "hovertool")
        .style('background-color', 'white')
        .style('border', 'solid')
        .style('border-width', '1px')
        .style('border-radius', '5px')
        .style('padding', '5px')
        

    let mouseOver = function(d){
        
        hover
            .style("opacity", 1)
        d3.select(this)
            .style('stroke', 'black')
            .style('opacity', .8)
    }
    let mouseMove = function(d){
        debugger
        hover
            .html(`${d.currentTarget.__data__.title} -- Rating: ${d.currentTarget.__data__.rating}`)
            .style("left", (d3.pointer(d)[0] + 70)+ 'px')
            .style("top", (d3.pointer(d)[1]) + 'px')
            
    }
    let mouseLeave = function(d){
        hover.style("opacity", 0)
        d3.select(this)
            .style("stroke", "none")
            .style("opacity", 1)
    }
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
        .on("mouseover", mouseOver)
        .on("mousemove", mouseMove)
        .on("mouseleave", mouseLeave)

        // .append('svg:title') /* hover on bars */
        //     .text(function(d) {return `${d.title} -- Rating: ${d.rating}`})


    svg.append("g")
        .call(xAxis);
        

    svg.append('text')
        .attr('x', (width/2))
        .attr('y', 550)
        .style('fill', "#b5d7e7cb" )
        .style('text-anchor', 'middle')
        .style('font-size', "20px")
        .text("Series Title")

    svg.append("g")
        .call(yAxis);

    svg.append('text')
    .attr('transform', 'rotate(-90)')
        .attr('x', 0-(height/2))
        .attr('y', 0)
        .attr('dy', '1em')
        .style('fill', "#b5d7e7cb")
        .style('text-anchor', 'middle')
        .style('font-size', "20px")
        .text("Series Rating")

    svg.append("text")
        .attr("x", (width/2))
        .attr("y", (margin.top))
        .attr("text-anchor", "middle")  
        .style("font-size", "28px")   
        .style("fill", "#b5d7e7cb")   
        .text(`${name}`); //<<-- Add seriesAvg here
    
    return svg.node();
}

export default makeGraph;