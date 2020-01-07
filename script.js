const date = require('date-and-time');

function getDiffToLastWorkday(today) {
    let diffToLastWorkday = -1;
    if (today === 'Mo') {
        diffToLastWorkday = -3;
    }

    return diffToLastWorkday
}

function getDiffToNextWorkday(today) {
    let diffToNextWorkday = 1;
    if (today === 'Fr') {
        diffToNextWorkday = 3;
    }

    return diffToNextWorkday
}


function getData(variables) {
    const format = variables.DATE_FORMAT;
    const now = new Date();
    const weekday = date.format(now, 'dd');
    const nextDiff = getDiffToNextWorkday(weekday);
    const lastDiff = getDiffToLastWorkday(weekday);
    
    const today = date.format(now, format);
    const next = date.format(date.addDays(now, nextDiff), format);
    const last = date.format(date.addDays(now, lastDiff), format);

    return {
        today: today,
        last: last,
        next: next
    }
}

module.exports = getData;