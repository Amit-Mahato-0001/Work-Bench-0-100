## Authentication

- Authentication is the process of verifying the identity of a user.

## Authentication vs Authorization

| Term           | Meaning                |
| -------------- | ---------------------- |
| Authentication | User kaun hai          |
| Authorization  | User kya kar sakta hai |

## JWT??

- JWT(JSON Web Token) is a secure token issued by the server after signup or login to represent an authenticated user.
- It is sent with each request so the server can verify the user's identity and permissions without maintaining server-side sessions.

- Session data?? -> is information stored on the server to keep track of a logged-in user(like ID or login state).
- The server uses a session ID (usually stored in a cookie) to identify the user on every request.

## structure

JWT = HEADER.PAYLOAD.SIGNATURE

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJpZCI6IjEyMyIsIm5hbWUiOiJBbWFuIn0
.
signature

- Header (token type, algorithm)

- Payload (user data(id, role)) No sensitive data keep here

- Signature(token tamper-proof banata he, secret key se generate hota he)

## Why JWT is secure??

- because it is digitally signed, so it cannot be changed without detection.
- Only the server that has secret key can create or verify a valid JWT.

## JWT flow :

User → Login request (email/password)
     → Server verify
     → JWT generate
     → Token client ko
     → Client har request ke saath token bhejta hai


IMPORTANT:

- Password hashing mandatory
- JWT payload minimal
- Token expiration required
- JWT stateless hota hai(server session store nhi karta)





