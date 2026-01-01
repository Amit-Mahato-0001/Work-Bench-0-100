{/* Task-1 */}

// Given code
const getNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.random();

      if (num > 0.5) {
        resolve(num);
      } else {
        reject("Number too small");
      }
    }, 1000);
  });
};

{/* getNumber() ko call karo

Agar number aaye → console me print karo

Agar error aaye → "Error: Number too small" print karo */}

getNumber()
.then((number) => {
    console.log(number)
})
.catch((error) => {
    console.log("Error: ", error)
})

{/* Task-2 */}

const getUser = async (id) => {
    if(!id) {
        throw new Error("User ID missing")
    }

    return{
        id,
        name: "Rohit"
    }
}

{/* getUser ko call karo

id = 1 ke saath → user print karo

id ke bina → error handle karo

try...catch ka use zaroor karo */}

async function main() {
    try {
        const user = await getUser(1)
        console.log(user)
    } catch (error) {
        console.log("Error: ", error)
    }
}

main()