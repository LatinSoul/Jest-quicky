const sum = require("./sum")

it("should add 2 nums equal to 3", ()=>{
    const result = sum(1,2)
    expect(result).toBe(3)
})