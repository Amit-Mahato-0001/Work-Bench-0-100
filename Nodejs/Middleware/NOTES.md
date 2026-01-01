# Middleware

- Middleware is a function that executes between the request and response cycle and has access to req, res, and next.

# Request Flow diagram

Client
  ↓
Middleware
  ↓
Route
  ↓
Response

# Why needed middleware?

- Logging, authentication, validation, error handling

# Middleware basic structure

const middleware = (req, res, next) => {
    // yahan kuch kaam
    next()
}

# next()???

- next() passes control to the next middleware or route handler. Without calling next() the request will hang.

# Also needed to know

## API key header me hi kyu??

- Header URL ka hissa nhi hote isliye logs, browser history, cache expose nahi hote.

- Header ka kaam hi hota hai metadata(auth, content-type) data carry karna.

## Query ya body me kyu nahi??

- QUERY PARAMS -> URL me dikh jaate he(unsafe).
- BODY -> sirf POST/PUT me hota hai GET me nahi.
- HEADER -> har HTTP method ke sath kaam karta he.

## Ab Query or Body?? 

- QUERY -> URL ke sath data bhejne ke liye(filter, search, pagination).

- Eg: GET /users?role=admin&page=2
role-admin -> filter
page=2 -> pagination.

- BODY -> Request ke ander actual data bhejne ke liye(create / update data).

- Eg: Request: POST /users
Body(JSON): {
  "name": "Alex",
  "email": "alex@gmail.com"
}

- Body request ke ander jaata hai, data create/update ke liye.

## Middleware me response time calculate karne ke liye:

const start = Date.now();

res.on('finish', () => {
  const duration = Date.now() - start;
});

- Ye slow APis detect karne ke liye bhut important hai.



