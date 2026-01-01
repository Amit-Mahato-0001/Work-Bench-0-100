## Async js??

- Asynchronous javaScript allows non-blocking execution, meaning the server can handle multiple requests without waiting for one operation to complete.

- Ek kaam chal rha hai dusra wait na kare

## Promise??

- A promise represents a value that may be available now, later, or never.

- It have 3 states: (1)Pending, (2)Fulfilled, (3)rejected

- Eg:

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data recieved)
        }, 1000)
    })
}

## Why async/await??

- async/await makes asynchronous code look synchronous, improving readability & error handling.

const fetchData = async() => {
    const result = await getData()
    console.log(result)
}

## Error Handling

- wrong way ❌

await getData(); // error aaye toh crash

- Correct way ✅

try{
    const result = await getData()
    console.log(result)
} catch(error){
    console.log("Error: ", error.message)
}

- try/catch use to handle rejected promises when using async/await. 

## NOTE:

- Async function humesha promise deta hai.
- Promise se value nikalne k liye await chahiye.
- Error handle karne k liye try/catch chahiye.

## Async/Error Handling - Table:

| Jab tum ye kaam kar rahe ho…               | Tab ye use karo           | Simple reason                                                |
| ------------------------------------------ | ------------------------- | ------------------------------------------------------------ |
| API bana rahe ho (route / controller)      | `async/await + try/catch` | User ko response dena hai, error yahin handle karni hoti hai |
| Business logic likh rahe ho (service file) | `async/await` + `throw`   | Service ka kaam fail batana hai, response nahi dena          |
| Sirf ek kaam async hai (simple kaam)       | `.then()`                 | Chhota kaam, simple flow                                     |
| Ek ke baad ek async kaam hai               | `async/await`             | Readable aur samajhne me easy                                |
| Saare errors ek jagah pakadne hain         | `try/catch`               | Clean aur controlled error handling                          |
| Kaam start karke bhool jana hai            | `.then()`                 | Result ka wait nahi karna                                    |
