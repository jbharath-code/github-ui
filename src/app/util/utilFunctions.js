const compareOnId = (a, b) => {
    if (a.id < b.id) {
        return -1;
    }
    else if (a.id > b.id) {
        return 1;
    }
    return 0;
}

const compareOnTimeStamp = (a, b) => {
    if (a.timeStamp < b.timeStamp) {
        return 1;
    }
    else if (a.timeStamp > b.timeStamp) {
        return -1;
    }
    return 0;
}

const compareOnTimeStampReverse = (a, b) => {
    if (a.timeStamp < b.timeStamp) {
        return -1;
    }
    else if (a.timeStamp > b.timeStamp) {
        return 1;
    }
    return 0;
}

const checkIfPresent = (value) => {
    if (value === undefined || value === null || value === "") {
        return false;
    }
    return true;
}

const getPersona = (personas, personaId) => {
    const currentPersona = personas.find(
        persona => persona.get('id') === personaId
    );

    return currentPersona;
}

const getSegment = (segments, segmentId) => {
    const currentSegment = segments.find(
        segment => segment.get('id') === segmentId
    );

    return currentSegment;
}

const getTouchPoint = (touchPoints, touchPointId) => {
    const currentTouchPoint = touchPoints.find(
        touchPoint =>
            touchPoint.get('id') === touchPointId
    );

    return currentTouchPoint;
}

const getCurrentIdea = (ideasList, ideaId) => {
    const currentIdea = ideasList.find(
        eachIdea =>
            eachIdea.get('id') === ideaId
    );

    return currentIdea;
}

const getTeamMember = (teamList, id) => {
    const currentMember = teamList.find(
        eachMember =>
            eachMember.get('id') === id
    );

    return currentMember;
}

const getCeoDetails = (teamList) => {
    const currentMember = teamList.find(
        eachMember =>
            eachMember.get('role') === 'label_ceo'
    );

    return currentMember;
}


const calculateAverageScore = (list, id) => {
    let sum = 0;
    if (list === null) {
        return 0;
    }
    list.map((eachItem) => {
        if (checkIfPresent(eachItem[id])) {
            sum += eachItem[id];
        }
        return 1;
    });
    if (list.length === 0) {
        return 0;
    }
    return Math.round((sum / list.length) * 10) / 10;
}

const getArrowType = (value) => {
    if (!checkIfPresent(value)) {
        return 'NO_ARROW';
    }
    if (value === 0) {
        return 'NO_ARROW';
    } else if (value > 0) {
        return 'UP_ARROW';
    } else {
        return 'DOWN_ARROW';
    }
}

const roundValue = (value, digits = 2) => {
    let factor = 1;
    if (digits === 1) {
        factor = 10;
    } else if (digits === 2) {
        factor = 100;
    } else if (digits === 3) {
        factor = 1000;
    }
    return Math.round(value * factor) / factor;
}

const getUserName = (userState) => {
    if (checkIfPresent(userState.firstName)) {
        return userState.firstName;
    } else if (checkIfPresent(userState.emailId)) {
        return userState.emailId;
    }
    return ''
}

const getSalutationBasedOnTime = () => {
    let today = new Date();
    let curHr = today.getHours()

    if (curHr < 12) {
        return 'label_good_morning';
    } else if (curHr < 16) {
        return 'label_good_afternoon';
    } else {
        return 'label_good_evening';
    }
}

const checkWithBudget = (cost, stateMetrics) => {
    const metrics = stateMetrics.get('metrics').toJS();
    const defaultBudgetObj = {
        value: 0,
        diff: 0
    }
    let budgetObj = metrics.find((eachMetric) => {
        return (eachMetric.key === 'budget');
    });
    if (!checkIfPresent(budgetObj)) {
        budgetObj = defaultBudgetObj
    }

    if (budgetObj.value >= cost) {
        return true;
    }
    return false;
}

const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(mail)) {
        return true;
    }
    return false;
}

const getFreshdeskString = (freshDeskId, emailID, simulation) => {
    let stringQ = '';

    if (checkIfPresent(freshDeskId) && validateEmail(emailID)) {
        stringQ = ''
            + ('&widgetType=popup'
                + '&submitThanks=Thank+you.+Our+Agent+will+contact+you+in+less+than+48+hours'
                + '&helpdesk_ticket[requester]=')
            + emailID     //+ validEmail
            + '&disable[requester]=true'
            + '&helpdesk_ticket[subject]='
            + ('&helpdesk_ticket[product]='
                + freshDeskId
                + '&helpdesk_ticket[custom_field][simulation_104707]='
                + simulation
                + '&disable[custom_field][simulation_104707]')
            + '&disable[product_id]=true'
            + '&searchArea=no';

    } else if (validateEmail(emailID) === false && checkIfPresent(freshDeskId) === true) {
        stringQ = ''
            + ('&widgetType=popup'
                + '&submitThanks=Thank+you.+Our+Agent+will+contact+you+in+less+than+48+hours'
                + '&helpdesk_ticket[requester]=')
            + emailID     //+ validEmail
            + '&helpdesk_ticket[subject]='
            + ('&helpdesk_ticket[product]='
                + freshDeskId
                + '&helpdesk_ticket[custom_field][simulation_104707]='
                + simulation
                + '&disable[custom_field][simulation_104707]')
            + '&disable[product_id]=true'
            + '&searchArea=no';

    } else if (checkIfPresent(freshDeskId) === false && validateEmail(emailID) === true) {
        stringQ = ''
            + ('&widgetType=popup'
                + '&submitThanks=Thank+you.+Our+Agent+will+contact+you+in+less+than+48+hours'
                + '&helpdesk_ticket[requester]=')
            + emailID     //+ validEmail
            + '&disable[requester]=true'
            + '&helpdesk_ticket[subject]='
            + '&helpdesk_ticket[custom_field][simulation_104707]='
            + simulation
            + '&disable[custom_field][simulation_104707]'
            + '&disable[product_id]=true'
            + '&searchArea=no';

    } else {
        stringQ = ''
            + ('&widgetType=popup'
                + '&submitThanks=Thank+you.+Our+Agent+will+contact+you+in+less+than+48+hours'
                + '&helpdesk_ticket[requester]=')
            + emailID     //+ validEmail
            + '&helpdesk_ticket[subject]='
            + '&helpdesk_ticket[custom_field][simulation_104707]='
            + simulation
            + '&disable[custom_field][simulation_104707]'
            + '&disable[product_id]=true'
            + '&searchArea=no';
    }
    return stringQ;
}

const showBlur = (uiState) => {
    if(
        uiState.get('isOverlayOpen')
        || uiState.get('isBluredRightOverlay')
        || uiState.get('showEventAlert')
    ) {
        return true;
    }
    return false;
}

const getPhaseIdFromKey = (phaseKey, phaseList) => {
    const myPhase = phaseList.find((eachPhase) => {
        return eachPhase.key === phaseKey
    });
    if(checkIfPresent(myPhase)) {
        return myPhase.id;
    }
    return null;
}


export {
    compareOnId,
    checkIfPresent,
    getSegment,
    getTouchPoint,
    getCurrentIdea,
    getPersona,
    getTeamMember,
    getCeoDetails,
    calculateAverageScore,
    getArrowType,
    compareOnTimeStamp,
    compareOnTimeStampReverse,
    roundValue,
    getUserName,
    getSalutationBasedOnTime,
    checkWithBudget,
    validateEmail,
    getFreshdeskString,
    showBlur,
    getPhaseIdFromKey
};