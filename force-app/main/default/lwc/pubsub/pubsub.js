// it is a pubsub library

// step 1 - Create a store

const store = {}

// step 2 - create subscribe method 

const subscribe = (eventName, callback) =>{
    if(!store[eventName]){                        // it will check if eventName is present or not in store 
        store[eventName] = new Set();             // set allows you to store unique value of anytype weather primitive or object 
    }
    store[eventName].add(callback)
}

// step 3 - create publish method
// payload is nothing just a data
const publish = (eventName, payload) => {                   // payload is nothing just a data
    if(store[eventName]){
        store[eventName].forEach(callback =>{               // callback we have defined in subscribe one
            try{
                callback(payload)
            }catch(error){
                console.error(error)
            }
        })
    }

}

// step 4 - create unsubscribe method
const unsubscribe = (eventName, callback) => {
    if(store[eventName]){
        store[eventName].delete(callback)
    }    
}
export default{
    subscribe,
    unsubscribe,
    publish
}