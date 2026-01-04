## REST API ??

- REST API is an architectural style that allows client and server to communicate using standard HTTP methods(GET, POST, PUT, DELETE) in a stateless manner.

- Frontend request bhejta hai
- Backend sirf data deta/leta hai
- Har request independant hoti hai

## REST API core principles:

- Client-Server seperation (client sirf req bhejta he server sirf res deta hai)
- Stateless (server user ka state yaad nahi rakhta)
- HTTP methods ka proper use (GET, POST, PUT, DELETE)
- Resource-based URLs (like users, products.. URL represent inko represent karta hai)
- Consistent response format (cacheable - Responses ko cache kiya ja sakta hai taaki performance fast ho)

## HTTP methods

| Method | Use            | Example      |
| ------ | -------------- | ------------ |
| GET    | Data read      | `/users`     |
| POST   | Data create    | `/users`     |
| PUT    | Full update    | `/users/:id` |
| PATCH  | Partial update | `/users/:id` |
| DELETE | Remove         | `/users/:id` |

## MVC architecture??

- MVC (Model-View-Controller) it separates business logic, data access, and request handling to make code scalable and maintainable.

- Model: (data, DB logic)
- Controller: (request/response)
- View: (response format/frontend) JSON format 


