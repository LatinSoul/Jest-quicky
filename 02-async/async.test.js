const fetchData = require("./async")

// .then way
// it("should return data", ()=>{
//     const todo = fetchData(1).then(todo => {
//         expect(todo.id).toBe(1)
//     })
    
// })

// asyn way
it("should return data", async () => {
    const todo = await fetchData(1)
    expect(todo.id).toBe(1)
})