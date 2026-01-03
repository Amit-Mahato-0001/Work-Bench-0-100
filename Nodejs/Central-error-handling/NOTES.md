## Error-handling middleware??

- An error-handling middleware is a special middleware in express that has 4 parameters: err, req, res, next.

- 4 parameters compulsory (err, req, res, next) so that express can differentiate it from normal middleware.

- err parameter tells this middleware is for handling errors.

## Why we need central error handling??

- Central error handling avoids repetative try/catch blocks, improves code readability and provides a single place to manage responses consistently.

## syntax: 

app.use((err, req, res, next) => {
    // handle error
})


