const axios = require("axios")

const fecthData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)    
    // console.log(results.data)
    return results.data
}

fecthData(1)

module.exports = fecthData
