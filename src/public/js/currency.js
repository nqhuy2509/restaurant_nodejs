function formatVND(number){
    return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' VND'
}

export default formatVND