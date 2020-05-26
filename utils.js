module.exports = {
    age: function(timestamp){
        
        const today = new Date()
        const birthdate = new Date(timestamp)
    
        let age = today.getFullYear() - birthdate.getFullYear()
        const month = today.getMonth() - birthdate.getMonth()
            
        today.getDate()
        birthdate.getDate()
    
        if (month < 0 || 
            month == 0 && 
            today.getDate() <= birthdate.getDate()){
            age = age - 1
        }

        return age
    },

    date: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        
        return `${year}-${month}-${day}`
    },

}