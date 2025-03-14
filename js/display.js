
function getWrestlerColorClass(oWrestler){

    //our wrestler previous roster
    var oRoster = null;

    //security
    if( null == oWrestler)
        return "";

    //get the roster
    oRoster = findRosterById(oWrestler.nIdOriginalRoster);

    //did we have the roster ?
    if( null == oRoster )
        return "";

    return " " + oRoster.sColorStyle;
}

function getWrestlerTitle(oWrestler){

    //our Title sub node
    var sNode = "";

    //our championship
    var oChampionship = null;

    //security
    if( null == oWrestler)
        return "";

    //get the championship
    oChampionship = findFirstChampionshipByWrestlerId(oWrestler.nIdWrestler);

    //check the championship
    if(null == oChampionship)
        return "";

    //return the good news
    return oChampionship.sImage;
}

function createMessage(oWrestler, oRoster, nDraftTurn){

    //our message node
    var sNode = "";
    //our headline
    var sHeadline = "";

    //security
    if(null == oWrestler || null == oRoster)
        return "";

    //create the Headline
    sHeadline = oRoster.sName + " a choisit " + oWrestler.sName + " au tour " + nDraftTurn + " de la draft";

    //Open Handler_Image_Wrestler
    sNode += "<div id=\"Handler_Image_Wrestler\" class=\"Handler_Logo_Message\">";
    //our Wrestler Image
    sNode += "<img id=\"IMG_Message_1\" class=\"Logo_Message\" src=\"ressources/images/wrestlers/" + oWrestler.sLogo + "\" alt=\"Info\">";
    //Close Handler_Image_Wrestler
    sNode += "</div>";

    //Open Handler_Message_Wrestler
    sNode += "<div id=\"Handler_Message_Wrestler\" class=\"Handler_Message " + oRoster.sColorStyle + "\">";
    //The Headline
    sNode += "<h1 id=\"Message_Title\" class=\"Message_Headline\">" + sHeadline + "</h1>";
    //Open Message_Description
    sNode += "<div id=\"Message_Description\" class=\"Message_Description\">";
    //Description
    sNode += oWrestler.sDescription;
    //Close
    sNode += "</div>";
    //Close Handler_Message_Wrestler
    sNode += "</div>";

    //Open Handler_Image_Show
    sNode += "<div id=\"Handler_Image_Show\" class=\"Handler_Logo_Message\">";
    //our Wrestler Image
    sNode += "<img id=\"IMG_Message_2\" class=\"Logo_Message\" src=\"ressources/images/shows/" + oRoster.sName + "_Logo.png\" alt=\"Info\">";
    //Close Handler_Image_Show
    sNode += "</div>";

    return sNode;
}

function plotMessage(oWrestler, oRoster, nDraftTurn){

    //our inner HTML to write
    var sHTML = "";

    //Our object to change
    var oMessage = null;

    //get the HTML
    sHTML = createMessage(oWrestler, oRoster, nDraftTurn)

    //security
    if("" == sHTML)
        return false;


    //get the Message node
    oMessage = document.getElementById("Header");

    //security
    if(null == oMessage)
        return false;

    //write that down
    oMessage.innerHTML = sHTML;

    //return the good news !
    return true;
}

function plotWrestler(oWrestler, bDraft){

    //our Wrestler node
    var sNode = "";
    //our superstar color class
    var sClass_Color = "";
    //our superstar font
    var sClass_Font = "";
    //our championship image
    var sChamp = "";

    //Class color obtention
    sClass_Color = getWrestlerColorClass(oWrestler);
    //Champ image obtention
    sChamp = getWrestlerTitle(oWrestler);

    //Font deduction
    if(oWrestler.sFont != "")
        sClass_Font = " " + oWrestler.sFont;

    //new node

    //Item open
    sNode += "<div id=\"Wrestler_" + oWrestler.nIdWrestler + "\" class=\"List_Item" + sClass_Color + "\">";

    //Image open
    sNode += "<div id=\"Wrestler_Image_" + oWrestler.nIdWrestler + "\" class=\"List_Item_Subpart\">";
    //Our image
    sNode += "<img id=\"IMG_Wrestler_" + oWrestler.nIdWrestler + "\" class=\"Logo_Wrestler\" src=\"ressources/images/wrestlers/" + oWrestler.sLogo + "\" alt=\"Wrestler\">";
    //Image close
    sNode += "</div>";

    //Info open
    sNode += "<div id=\"Wrestler_Info_" + oWrestler.nIdWrestler + "\" class=\"List_Item_Subpart\">";
    //Wrestler name
    sNode += "<h1 class=\"LAB_Wrestler" + sClass_Font + "\" >" + oWrestler.sName + "</h1>";
    //Info close
    sNode += "</div>";

    //Championship open
    sNode += "<div id=\"Wrestler_Champ_" + oWrestler.nIdWrestler + "\" class=\"List_Item_Subpart\">";
    //if we have a title, show it
    if(sChamp != "")
        sNode += "<img id=\"IMG_Wrestler_Champ_" + oWrestler.nIdWrestler + "\" class=\"Logo_Wrestler\" src=\"ressources/images/championships/" + sChamp + "\" alt=\"Wrestler\">";
    //Championship close
    sNode += "</div>";

    //Selection button open
    sNode += "<div id=\"Wrestler_Selection_" + oWrestler.nIdWrestler + "\" class=\"List_Item_Subpart\">";
    //can we move it ?
    if(bDraft)
        sNode += "<button id=\"BTN_Wrestler_Selection_" + oWrestler.nIdWrestler + "\" class=\"BTN_Draft\" type=\"button\" onclick=\"drafterWrestler(" + oWrestler.nIdWrestler + ")\">Draftung</button> ";
    //Selection button close
    sNode += "</div>";

    //Item close
    sNode += "</div>";

    return sNode;
}

function plotRoster(oRoster, bDraft){

    //our count
    var nCount = 0;
    //our iterator
    var nLine = 0;

    //our future text
    var sHTML = "";

    //Our content List
    var oList = document.getElementById(oRoster.sName + "_List_Content");
    //our header
    var oHeader = document.getElementById(oRoster.sName + "_List_Header");

    //Create the HTML

    //get the count
    nCount = oRoster.members.length;
    //loop
    while( nLine < nCount ){

        //add the wrestler
        sHTML += "\r\n" + plotWrestler(oRoster.members[nLine], bDraft);

        //next
        nLine++;
    }


    //put in
    oList.innerHTML = sHTML;
    //oHeader.innerHTML = "<span>Effectif : " + nLine + "</span>";
    oHeader.innerText = "Effectif : " + nLine;


}

function plotRosters(){

    //Ploting Roster Show A
    plotRoster(storage.ary_oRoster[storage.nShowAIndex], false);
    //Ploting Roster Show B
    plotRoster(storage.ary_oRoster[storage.nShowBIndex], false);
    //Ploting Roster free
    plotRoster(storage.ary_oRoster[storage.nDraftIndex], true);

}

//our initial display
function displayInit(){

    plotRosters();

    console.log("Display init");

}
