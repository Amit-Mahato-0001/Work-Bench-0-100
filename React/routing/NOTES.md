Routing ??
routing ka matlab hota he URL ke basis par different components dikhana.

eg URLs :
/ > Home page
/about > About page
/profile > Profile page

Why routing is different??
normal websites: 
page reload hota he
server se naya HTML aata he

react apps:
page reload nahi hota
sirf component change hota he

isliye react apps ko SPA khete he (SPA > Single page application)

React router??
react router is a library that enables navigation between different components without reloading the page.

we use react-router-dom

React router main components :
1. BrowserRouter
2. Routes
3. Route
4. Link

flow:
URL change
   ↓
React Router URL check karta hai
   ↓
Matching Route dhundhta hai
   ↓
Uska component render karta hai

How to navigate??
WRONG❌ :

<a href="/about">About</a> 


CORRECT✅ :

import { Link } from "react-router-dom";

<Link to="/about">About</Link>

Link vs <a>
| `<a>`          | `Link`      |
| -------------- | ----------- |
| Page reload    | No reload   |
| Server request | Client-side |
| Slow           | Fast        |

Dynamic routes??
example:
/users/1
/users/2

route define karo:
<Route path="/users/:id" element={<User />} />

URL se data lo:
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

Dynamic routing allows handling multiple similiar pages using one route by reading values from the URL.

:parameter = URL se aane wala value
useParams() = us value ko pakadne ka hook

programmatic navigation??
kab use:
1. login ke baad redirect
2. form submit ke baad page change

common mistakes to avoid:
1. BrowserRouter ko wrap nhi karna
2. <a> tag use karna
3. routes ke bahar Route likhna


