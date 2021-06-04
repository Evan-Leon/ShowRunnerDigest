import getData from "./scripts/screen";
import makeGraph from "./scripts/graph";

const showRunners = {
    samEsmail: 63749, damonLindelof: 26414,
    noahHawley: 6042, markBurnett: 24815,
    chuckLorre: 8688, stevenConrad: 165062,
    michaelSchur: 6939, vinceGilligan: 31025,
    davidChase: 48980 , juddApatow: 27413 ,
    mattGroening: 14860, davidCohen: 49027,
    larryDavid: 49002, tinaFey: 49012,
    sethMacfarlane: 14895, danHarmon: 35599,
    jonFavreau: 27053 , avaDuvernay: 17207,
    davidKelly: 35929, danielLevy: 43635,
    shondaRhimes: 8903, geneRoddenberry: 46568,
    danSchneider: 49461, davidSimon: 32743,
    aaronSorkin: 28600, dickWolf: 7524,
    brunoHeller: 2193, mikeJudge: 25006, 
    gregDaniels: 25010, jossWheedon: 6085,
    billLawrence: 39384, stevenMoffat: 34559,
    markGatiss: 14887, martaKauffman: 45516,
    davidCrane: 27940, nicPizzolatto: 674,
    jerrySeinfeld: 48987, phoebeWallerBridge: 37759,
}

const tickerItem = document.querySelector('.ticker-move');
tickerItem.addEventListener('click', sendData);
async function sendData(event){
    const removeClass = () =>  document.getElementById("screen").classList.remove('static'); 
    const changeGraph = () =>  document.getElementById("bar-chart").classList.remove('hidden'); 
    
    document.getElementById("screen").classList.add('static')
    document.getElementById("bar-chart").classList.add('hidden')
   
    const apiData = await getData({nameId:showRunners[event.srcElement.id], name: [event.srcElement.innerHTML]} )
    
    const switchScreen= () => (setTimeout(removeClass, 1000));
    const unHide = () => (setTimeout(changeGraph, 1000));
    
    switchScreen();
    unHide();
    makeGraph(apiData);

}

const buttonClicks = document.querySelector('.buttons');
buttonClicks.addEventListener('click', handleButtonClick);
function handleButtonClick(event){
    
    if (event.srcElement.className === "power"){
        const removeClass = () =>  document.getElementById("screen").classList.remove('powering-off');
        const addClass = () =>  document.getElementById("screen").classList.add('off');

        document.getElementById("bar-chart").classList.add('hidden')
        document.getElementById("screen").classList.add('powering-off')

        const switchScreen= () => (setTimeout(removeClass, 3300));
        const turnOff= () => (setTimeout(addClass, 3500));

        switchScreen();
        turnOff();

    } else if( event.srcElement.className === "options") {
        console.log(event)
        console.log("in the options handler")
    }
}




