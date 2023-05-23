# A Short Introduction on Request Parameters

### **Path Parameters**

- `{url}/:id`
- https://example.com/notes/:45454545
- added at the end of the URL
- in express, can be accessed using <code>req.params.id</code>

### **Query Parameters**

- `{url}/endpoint?query=yourQuery&filterBy=something`
- https://example.com/notes?search=react+notes&sort=asc
- used in filtering, sorting and pagination
- in express, can be accessed using <code>req.query</code>

### **Body Parameters (payload)**

- used in post requests
- also known as payload
- Supports multiple file types: JSON,XML,Text,Form,Form-encode,Binary,etc
- used for uploading/downloading data
- in express, can be accessed using <code>req.body</code>
