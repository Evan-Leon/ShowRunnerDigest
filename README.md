# ShowRunnerDigest
## About
Have you ever wondered who was responsible for your favorite TV shows? A Showrunner is, generally, the person who creates a series, then is in charge of the day to day responsibiities of 'running' the series. They are generally the Executive Producer, Writer, or Director (and sometimes all of them). ShowRunnerDigest provides a list of popular Showrunners and upon interaction, a bar graph data visualization of the ShowRunner's series and TVMAZE rating will appear. 

TVMAZE is a virtual TV guide that hosts a variety of information on just about every show. Information including the cast and crew, as well as providing their own proprietary rating system, aggregated from their user data. All information regarding each ShowRunner was gained from the TVMAZE RESTful API. 

## Now playing at https://evan-leon.github.io/ShowRunnerDigest/

## Technologies Used

* Javascript
* Node
* D3.js
* Vanilla DOM Manipulation
* CSS
* HTML
* SASS
* Webpack
* TVMAZE API
* Fetch API
* Github Pages

## Features

### Data Visualization 
A user can choose a Showrunner, by clicking a name in the dropdown list, or by clicking a name from the animated ticker at the bottom of the screen. D3.js was utilized to provide an interactive bar graph, displaying various series from a Showrunner. Bars, when hovered over, will provide the series name and TVMAZE rating. Toggling between Showrunners triggers custom JS animations that mimic a retro TV screen.

![tool_tip](https://user-images.githubusercontent.com/78226696/127876313-79d65c88-af8d-4e8d-a591-0f167cfc9501.gif)



### Bar Graph Code Snippet
D3.js was utilized for generating the bar graph as well as generating the series information pop-up, which was done by creating a div with the necessary information and appending it to the html body to be able to display over any region of the graph.
```js
  let hover = d3.select("body")
        .append("div")
        .style("opacity", 0)
        .style('visibility', 'visible')
        .style("position", "absolute")
        .attr("class", "hovertool")
        .style('background-color', 'white')
        .style("z-index", 10)
        .style('border', 'solid')
        .style('border-width', '1px')
        .style('border-radius', '5px')
        .style('padding', '5px') 
  ```



### JS Custom TV Animations
When switching between Showrunners or interacting with the 'options' or 'power' buttons custom JS animations were built utilizing the asynchronous nature of JS in combination with gifs. Click handlers trigger a variety of timed class changes, each matched with the necessary gif to mimic the desired effects. 

![tv-ani](https://user-images.githubusercontent.com/78226696/127875933-10174ba5-9e68-4c65-85bc-04dfe724eb92.gif)


### Power-off code Snippet
Code that toggles between classes, using setTimeout to wait for each animation to complete.
```js
const removeClass = () =>  document.getElementById("screen").classList.remove('turn-on');
            const removeHidden = () =>  document.getElementById("bar-chart").classList.remove('hidden');
            const addClass = () =>  document.getElementById("screen").classList.add('turn-on');
            const addClassOn = () =>  document.getElementById("screen").classList.add('on');
            
            
            const switchTurnOn= () => (setTimeout(removeClass, 6000));
            const unhideBarchart= () => (setTimeout(removeHidden, 6100));
            const classOn= () => (setTimeout(addClassOn, 6100));
            const hideModal = () => document.getElementById("modal").classList.add("modal-off");
            const modalOff = () => document.getElementById("modal").classList.remove("modal-on");

            document.getElementById("screen").classList.remove('off');
            document.getElementById("bar-chart").classList.add('hidden');
            if (modal.classList[0] === "modal-on") {
                debugger
                modalOff();
                hideModal();
            }
            addClass();
            switchTurnOn();
            classOn();
            unhideBarchart();
```


