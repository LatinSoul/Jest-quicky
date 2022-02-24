const axios = require("axios")

const fecthData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)    
    return results.data
}

const forEach = (items, cb)=>{
    for(let i=0;i<items.length;i++){
        cb(items[i])
    }
}

it("testing mocked cb length", () => {
    const mockedCb = jest.fn(x => 10 + x)
    forEach([0,1], mockedCb)
    expect(mockedCb.mock.calls.length).toBe(2)
})

it("testing mocked cb calls", () => {
    const mockedCb = jest.fn(x => 10 + x)
    forEach([0,1], mockedCb)
    expect(mockedCb.mock.calls[0][0]).toBe(0)
})

it("testing mocked cb value", () => {
    const mockedCb = jest.fn(x => 10 + x)
    forEach([0,1], mockedCb)
    expect(mockedCb.mock.results[1].value).toBe(11)
})

it("testing mock returns", () => {
    const mocked = jest.fn()
    mocked
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)
        .mockReturnValueOnce("hello")
    
    const res1 = mocked()
    const res2 = mocked()
    const res3 = mocked()
    expect(res1).toBe(true)
    expect(res2).toBe(false)
    expect(res3).toBe("hello")
})

it("mock axios data", async () => {
    jest.spyOn(axios,"get").mockReturnValueOnce({
        data: {
            id: 1,
            todo: "Schedule AWS DevOps exam"
        }
    })
    const res = await fecthData(1)
    expect(res.todo).toBe("Schedule AWS DevOps exam")
})
