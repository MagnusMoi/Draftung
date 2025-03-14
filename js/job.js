
var storage = {
    ary_oChampionships : [],
    ary_oRoster : [],
    ary_oWrestlers : [],
    nShowAIndex : 0,
    nShowBIndex : 2,
    nDraftIndex : 1,
    nChoices : 0
};

function drafterWrestler(nIdWrestler){

    //the pair value to determine the next show index
    var nPairValue = 0;
    //the draft turn
    var nDraftTurn = 0;
    //The index of Wrestler
    var nIndex = 0;
    //The index of Next show
    var nNextIndex = 0;

    //get the Wrestler
    var oWrestler = null;

    //get the index
    nIndex = findWrestlerIndexById( storage.ary_oRoster[storage.nDraftIndex].members, nIdWrestler );

    //nothing done, let's plot
    if( nIndex < 0 ){
        plotRosters();
        return false;
    }
        

    //get the wrestler
    oWrestler = storage.ary_oRoster[storage.nDraftIndex].members.splice(nIndex, 1);

    //check
    if( oWrestler.length > 0 )
        oWrestler = oWrestler[0];
    else{
        plotRosters();
        return false;
    }

    //get the parity value
    nPairValue = storage.nChoices % 2;
    //get the draft turn
    nDraftTurn = ( storage.nChoices - nPairValue) / 2 + 1;

    //Next index
    if( nPairValue )
        nNextIndex = storage.nShowBIndex;
    else
        nNextIndex = storage.nShowAIndex;

    //add the Wrestler
    storage.ary_oRoster[nNextIndex].members.push(oWrestler);
    storage.nChoices++;

    //add the message
    plotMessage(oWrestler, storage.ary_oRoster[nNextIndex], nDraftTurn);

    //All good
    plotRosters();
    return true;
}

//function to init the job
function jobInit(){

    //our initiale display
    displayInit();

    //job done
    console.log("init done");

}