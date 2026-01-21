Why useEffect ??

component ka kaam sirf UI banana hota hai

matlab:

component ek function he
input = state + props
output = JSX(UI)

is process ke bich me react koi external kaam allow nhi karta

Side Effect ??

Side effect wo kaam hota he jo component ke bahar ki duniya ko affect kare

eg:
API se data lana
localStorage me data save karna
Timer lagana (setTimeout)
Event listener add karna

ye sab :
UI calculate karne ka kaam nhi he
Rendering ke time nhi hona chahiye

Why React do not allow side effects on render time ??

React component bar bar render hota he
ager har render pe API call ho:
performance kharab
bugs
infinite loops

isliye React bolta hai:
Rendering alag hoga, side effects alag jagah pe honge.

Aur us jagah ka naam hai (useEffect)

UseEffect ??

useEffect ek React Hook hai jo hume side effects perform karne deta hai component render hone ke baad.

Mental Model :-

step 1: Render phase
jsx calculate hota he
UI decide hoti he
Koi side effect nhi

step 2: Effect phase
UI screen pe aa chuki hoti he
Ab external kaam safe he

useEffect step 2 me chalta he

useEffect ke basic syntax:

useEffect(() => {
    // side effect ka code
}, [])

() => {
    //yahan side effect likhte he
}

React is function ko khud call karta he manually call nhi karte he

[] <- dependency array

ye array decide karta he Effect kab chalega

Dependency array ke 3 rules :

RULE 1 : Dependency array nhi diya 

useEffect(() => {
    console.log("Har render pe chalega")
})

Runs:
first render
har state/props update ke baad

RULE 2 : Empty dependency array[]

useEffect(() => {
    console.log("Sirf ek baar")
}, [])

Runs:
sirf first render ke baad
component mount hone pe

RULE 3 : Dependency diya

useEffect(() => {
    console.log("Count change hua")
}, [count])

Runs:
first render
jab jab count change hota he

API??

API ek server hota hai jo hume data deta hai jab hum request bhejte hai.

eg:
User list
Products
Posts

React me API call kahan karni chahiye??

Render ke time?? ❌
Normal function ke ander ❌

API calls are side effects,
isiliye wo humesha useEffect ke andar hoti hai

Real world problem when API is called :

API call karte waqt 3 situations hoti hai
1. Data aa raha hai(loading)
2. Data aa gaya(success)
3. Error aa gaya(failure)

Professional React app teeno handle karti he

State planning :-
API ke liye minimum 3 states chahiye

const [data, setData] = useState([])
const [loading, setLoading] = useState([true])
const [error, setError] = useState([null])

data > API ka response
loading > UI ko batane k liye
error > agar kuch galat ho
