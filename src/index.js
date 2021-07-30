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
const dropdownItem = document.getElementById("sr-select"); 
tickerItem.addEventListener('click', sendData);
dropdownItem.addEventListener('change', dropdownData);
async function sendData(event){
    debugger
    const removeClass = () =>  document.getElementById("screen").classList.remove('static'); 
    const changeGraph = () =>  document.getElementById("bar-chart").classList.remove('hidden'); 
    const hideModal =() => document.getElementById("modal").classList.add("modal-off");
    const modalOff = () => document.getElementById("modal").classList.remove("modal-on");
    document.getElementById("screen").classList.add('static')
    document.getElementById("bar-chart").classList.add('hidden')
   
    const apiData = await getData({nameId:showRunners[event.srcElement.id], name: [event.srcElement.innerHTML]} )
    
    const switchScreen= () => (setTimeout(removeClass, 1000));
    const unHide = () => (setTimeout(changeGraph, 1000));
    debugger
    if (modal.classList[0]=== "modal-on"){
        debugger
        modalOff();
        hideModal();
    }
    
    switchScreen();
    unHide();
    makeGraph(apiData);

}

async function dropdownData(event) {
    debugger
    const removeClass = () => document.getElementById("screen").classList.remove('static');
    const changeGraph = () => document.getElementById("bar-chart").classList.remove('hidden');
    const hideModal = () => document.getElementById("modal").classList.add("modal-off");
    const modalOff = () => document.getElementById("modal").classList.remove("modal-on");
    document.getElementById("screen").classList.add('static')
    document.getElementById("bar-chart").classList.add('hidden')

    const apiData = await getData({ nameId: showRunners[event.currentTarget.value], name: [event.currentTarget.value] })

    const switchScreen = () => (setTimeout(removeClass, 1000));
    const unHide = () => (setTimeout(changeGraph, 1000));
    debugger
    if (modal.classList[0] === "modal-on") {
        debugger
        modalOff();
        hideModal();
    }

    switchScreen();
    unHide();
    makeGraph(apiData);

}

const buttonClicks = document.querySelector('.buttons');
buttonClicks.addEventListener('click', handleButtonClick);
function handleButtonClick(event){
    
    if (event.srcElement.className === "power"){
        const screen = document.getElementById("screen")
        debugger
        if (screen.classList[0] === 'off'){
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
        }else {
            const removeClass = () =>  document.getElementById("screen").classList.remove('powering-off');
            const takeOff = () =>  document.getElementById("screen").classList.remove('off');
            const addClassOff = () => document.getElementById("screen").classList.add('off');
            const hideModal = () => document.getElementById("modal").classList.add("modal-off");
            const modalOff = () => document.getElementById("modal").classList.remove("modal-on");
            document.getElementById("bar-chart").classList.add('hidden')
            document.getElementById("screen").classList.remove('on');
            document.getElementById("screen").classList.add('powering-off')

            const switchScreen= () => (setTimeout(removeClass, 3300));
            // const turnOff= () => (setTimeout(addClass, 3500));
            if (modal.classList[0] === "modal-on") {
                debugger
                modalOff();
                hideModal();
            }
            switchScreen();
            addClassOff();
        }
    } else if( event.srcElement.className === "options") {
        debugger
        const modal = document.getElementById("modal");
        if (modal.classList[0] === 'modal-off'){
            const modalOn = () =>  document.getElementById("modal").classList.add('modal-on');
            const modalOff = () =>  document.getElementById("modal").classList.remove('modal-off');
            modalOff();
            modalOn();
            // document.getElementById("bar-chart").classList.add('hidden');
            // document.getElementById("screen").classList.add('modal-bars')
        } else {
            const modalOff = () => document.getElementById("modal").classList.add('modal-off');
            const modalOn = () => document.getElementById("modal").classList.remove('modal-on');
        
            modalOn();
            modalOff();
        }
        
        

        
    }
}




