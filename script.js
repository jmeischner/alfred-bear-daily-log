const date = require('date-and-time');


function getDiffToLastWorkday() {
    const today = date.format(new Date(), 'dd');
    
    let diffToLastWorkday = 1;
    if (today === 'Mo') {
        diffToLastWorkday = 3;
    }

    return {
        lastWorkday: diffToLastWorkday
    }
}

module.exports = getDiffToLastWorkday;