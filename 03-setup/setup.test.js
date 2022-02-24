let animals = ['tiger', 'bear','wolf','dolfin']

// Executes the before & after the group(s) of tests
beforeAll(()=>{
    console.log("Before All")
    animals = ['tiger', 'bear','wolf','dolfin']
})

beforeEach(()=>{
    console.log("Before Each")
    animals = ['tiger', 'bear','wolf','dolfin']
})

afterEach(()=>{
    console.log("After Each")
    animals = ['tiger', 'bear','wolf','dolfin']
})

afterAll(()=>{
    console.log("After All")
    animals = ['tiger', 'bear','wolf','dolfin']
})

describe ("animals array test", ()=>{
    it("should add an animal at the end of the array", ()=>{
        animals.push("girafe")
        expect(animals[animals.length-1]).toBe("girafe")
    })
    it("should add an animal at the beginning of the array", ()=>{
        animals.unshift("monkey")
        expect(animals[0]).toBe("monkey")
    })
})
describe ("2nd test group", ()=>{
    // Executes the BeforeAll before this specific test group
    beforeAll(()=>{
        console.log("Before relative to the 2nd test group")
        animals = ['tiger', 'bear','wolf','dolfin']
    })    
    
    it("should add an animal at the end of the array", ()=>{
        animals.push("horse")
        expect(animals[animals.length-1]).toBe("horse")
    })
})
