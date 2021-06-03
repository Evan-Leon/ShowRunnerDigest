import getData from "./scripts/screen";
import makeGraph from "./scripts/graph";

const showRunners = {
    samEsmail: 63749,
    damonLindelof: 26414,
    noahHawley: 6042,
    markBurnett: 24815,
    chuckLorre: 8688,
    stevenConrad: 165062,
    michaelSchur: 6939,
    vinceGilligan: 31025,
    davidChase: 48980 ,
    juddApatow: 27413 ,
    mattGroening: 14860,
    davidCohen: 49027 ,
    larryDavid: 49002,
    tinaFey: 49012,
    sethMacfarlane: 14895,
    danHarmon: 35599

}

const tickerItem = document.querySelector('.ticker-move');
tickerItem.addEventListener('click', sendData);
async function sendData(event){
    console.log(event);
    console.log(event.srcElement.id);
    const apiData = await getData({nameId:showRunners[event.srcElement.id], name: [event.srcElement.innerHTML]} )
    makeGraph(apiData);
}

const buttonClicks = document.querySelector('.buttons');
buttonClicks.addEventListener('click', handleButtonClick);
function handleButtonClick(event){
    // console.log(event);
    if (event.srcElement.className === "power"){
        console.log(event)
        console.log("in the power handler")
    } else if( event.srcElement.className === "options") {
        console.log(event)
        console.log("in the options handler")
    }
}
// getData(showRunners.markBurnett);



