function index(day) {
    var hour = day.getHours()
    var minute = day.getMinutes()
    var second = day.getSeconds()
    var date = day.getDate()
    var month = day.getMonth()+1 
    var year = day.getFullYear()
    return `${hour}:${minute < 10 ? '0'+minute : minute}:${second < 10 ? '0'+second : second}, ${date}/${month}/${year}`
}

module.exports = index