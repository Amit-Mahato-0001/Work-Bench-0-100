## Controlled component

- A controlled component is a form element whose value is contolled by React state.

input ka data
react state ke control me

eg:
const [name, setName] = useState("")

<input
type="text"
value={name} 
onChange={(e) => setName(e.target.value)}
/>

RULE: form inputs should be controlled by state.

preventDefault() is used to stop the browser’s default form submission behavior (page reload) so React can handle the form submission using js.

