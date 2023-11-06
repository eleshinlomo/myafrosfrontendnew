

export const getDateToday = ()=>{
    // Date 

const day = new Date().getDate()
const month = new Date().getMonth() + 1
const year = new Date().getFullYear()
const todayDate = ` ${month} ${day} ${year}`

return todayDate
}