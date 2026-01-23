COMPONENT LIFECYCLE

component lifecycle ka matlab he :
ek react component ka janam, jeena aur marna.

simple:
component kab create hota he
kab update hota he
kab remove hota he

React component ka 3 phases:

1. Mounting > component aaya
2. Updating > component change hua
3. Unmounting > component gaya

1. Mounting > Mounting phase wo hota he jab component pehli baar screen pe aata he.

is phase me: 
JSX calculate hota hai
DOM me UI attach hoti hai
useEffect (with []) chalta hai

eg: 
useEffect(() => {
  console.log("Component mounted");
}, []);
 
ye code sirf mounting pe chalega

2. Updating > Updating phase tab hota he jab state ya props change hote he aur component dobara render hota he.

causes:
setState
new props from parent

eg:
useEffect(() => {
  console.log("Count updated");
}, [count]);

Jab-jab count change hoga
Ye effect chalega

3. Unmounting > Unmounting phase tab hota he jab component screen se completely remove ho jata he

eg:
page change
conditional rendering se component hide
route change

cleanup function >

Unmounting ke time:
timers band kro
event listeners hatao
subscriptions cancel kro

syntax:
useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);

return wala function:
Unmount pe chalta hai
Ya next effect se pehle

cleanup neccesary why??
ager cleanup nhi kiya:
memory leak
unexpected behaviour
performance issues

eg:
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);

useEffect lifecycle me kaise fit hota he??

| useEffect type       | Lifecycle phase |
| -------------------- | --------------- |
| `useEffect(fn, [])`  | Mount           |
| `useEffect(fn, [x])` | Update          |
| cleanup function     | Unmount         |

kya useEffect render se pehle chalta he??
Nahi, render ke baad

cleanup kab chalta he??
component unmount hone par
ye effect dobara chalne se pehle

