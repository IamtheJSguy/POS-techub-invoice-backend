module.exports = ( dayNumber ) => {
    let currentDay = '';
    switch ( dayNumber ) {
        case 1:
            currentDay = "Monday";
            break;
        case 2:
            currentDay = "Tuesday";
            break;
        case 3:
            currentDay = "Wednesday";
            break;
        case 4:
            currentDay = "Thursday";
            break;
        case 5:
            currentDay = "Friday";
            break;
        case 6:
            currentDay = "Saturday";
            break;
        default:
            currentDay = "Sunday";
            break;
    }
    return currentDay;
}
