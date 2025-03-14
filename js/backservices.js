
function fakeLoad(){

    //count
    var nCount = 0;
    //iterator
    var nIt = 0;

    storage.ary_oChampionships = aryFakeChampionship;
    storage.ary_oRoster = aryFakeRoster;
    storage.ary_oWrestlers = aryFakeWrestlers;

    //adding a new field to rosters

    //get the count
    nCount = storage.ary_oRoster.length;
    //loop time
    while(nIt < nCount){

        //add the stuff
        storage.ary_oRoster[nIt].members = [];

        //Next
        nIt++;
    }

    storage.ary_oRoster[storage.nDraftIndex].members = storage.ary_oWrestlers;

}

function findRosterIndexById(nIdRoster){

    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //our Roster
    var oRoster = null;

    //get the count
    nCount = storage.ary_oRoster.length;
    //loop
    while( nLine < nCount ){

        //get the Roster
        oRoster = storage.ary_oRoster[nLine];

        //check
        if( oRoster.nIdRoster == nIdRoster )
            return nLine;

        //next
        nLine++;
    }

    //nothing
    return -1;
}

function findRosterById(nIdRoster){

    //our count
    var nIndex = 0;

    //get index
    nIndex = findRosterIndexById(nIdRoster);

    //security
    if(nIndex < 0)
        return null;

    //return the right stuff
    return storage.ary_oRoster[nIndex];
}

function findIndexChampionshipById(nIdChampionship){

    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //our Championship
    var oChampionship = null;

    //get the count
    nCount = storage.ary_oChampionships.length;
    //loop
    while( nLine < nCount ){

        //get the Roster
        oChampionship = storage.ary_oChampionships[nLine];

        //check
        if( oChampionship.nIdChampionship == nIdChampionship )
            return nLine;

        //next
        nLine++;
    }

    //nothing
    return -1;
}

function findChampionshipById(nIdChampionship){

    //our count
    var nIndex = 0;

    //get index
    nIndex = findIndexChampionshipById(nIdChampionship);

    //security
    if(nIndex < 0)
        return null;

    //return the right stuff
    return storage.ary_oChampionships[nIndex];
}

function findFirstIndexChampionshipByWrestlerId(nIdWrestler){

    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //our Championship
    var oChampionship = null;

    //get the count
    nCount = storage.ary_oChampionships.length;
    //loop
    while( nLine < nCount ){

        //get the Roster
        oChampionship = storage.ary_oChampionships[nLine];

        //check
        if( oChampionship.nIdChampionship == nIdWrestler )
            return nLine;

        //next
        nLine++;
    }

    //nothing
    return -1;
}

function findFirstChampionshipByWrestlerId(nIdWrestler){

    //our count
    var nIndex = 0;

    //get index
    nIndex = findFirstIndexChampionshipByWrestlerId(nIdWrestler);

    //security
    if(nIndex < 0)
        return null;

    //return the right stuff
    return storage.ary_oChampionships[nIndex];
}

function findWrestlerIndexById(ary_, nIdWrestler){

    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //our Roster
    var oWrestler = null;

    //security
    if(null == ary_)
        return -2;

    //get the count
    nCount = ary_.length;
    //loop
    while( nLine < nCount ){

        //get the Roster
        oWrestler = ary_[nLine];

        //check
        if( oWrestler.nIdWrestler == nIdWrestler )
            return nLine;

        //next
        nLine++;
    }

    //nothing
    return -1;
}

function findWrestlerById(ary_, nIdRoster){

    //our count
    var nIndex = 0;

    //get index
    nIndex = findWrestlerIndexById(ary_, nIdRoster);

    //security
    if(nIndex < 0)
        return null;

    //return the right stuff
    return ary_[nIndex];
}

function loadBackData(callback){

    //fake back call
    fakeLoad();

    //once the fake transfer is done ... do the call back
    callback();

}
