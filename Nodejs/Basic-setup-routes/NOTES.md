## Node.js

- Node.js is a js runtime environment that allows js to run outside the browser mainly on the server side.

# Key points:

- Built on chrome v8 engine
- Non-blocking, event-driven
- Used for backend APIs

# Node.js browser se alag kaise he?

- Browser js -> DOM access
- Node.js -> File system, server, database

# Express??

- Express.js is a minimal and flexible Node.js framework used to build web servers and REST APIs easily. (Express  provides routing, middleware, request/response handling).

# Routing??

- A route defines how an application responds to a specific HTTP request at a particular URL.

# HTTP methods

| Method | Use            |
| ------ | -------------- |
| GET    | Data fetch     |
| POST   | Data create    |
| PUT    | Full update    |
| PATCH  | Partial update |
| DELETE | Remove data    |

# res.json 

- res.json: Express method jo client ko JSON format me response bhejta he.
- res.json automatically js object ko JSON me convert karte he aur proper header set karte hai.
- JSON(javascript object notation): lightweight data format jo server aur client ke beech data exchange ka kaam karta hai.
- Jab API se structured data(objects, arrays) bhejna ho tab res.json() use karte hai.
