const createDate = () => {
    const dateObject = new Date()
    const month = dateObject.getMonth()
    let hours = dateObject.getHours()
    let minutes = dateObject.getMinutes()

    let monthName

    switch (month) {
        case 0: monthName = 'Jan'
            break;
        case 1: monthName = 'Feb'
            break;
        case 2: monthName = 'March'
            break;
        case 3: monthName = 'April'
            break;
        case 4: monthName = 'May'
            break;
        case 5: monthName = 'June'
            break;
        case 6: monthName = 'July'
            break;
        case 7: monthName = 'Aug'
            break;
        case 8: monthName = 'Sep'
            break;
        case 9: monthName = 'Oct'
            break;
        case 10: monthName = 'Nov'
            break;
        case 11: monthName = 'Dec'
            break;
    }

    const fullDate = `${monthName} ${dateObject.getDate()}, ${dateObject.getFullYear()} - ${hours >= 12 ? 'PM ' + (hours - 12) : 'AM ' + hours}:${minutes < 10 ? '0' + minutes : minutes}`

    return fullDate
}

export default createDate