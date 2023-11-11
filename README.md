# Lab: React API using Axios
In this tutorial you’ll use the Axios library to call an API from a React app. You’ll start with the API jsonplaceholder.typicode.com/users, which is a sample publicly available API used for educational purposes.

1. Enter https://jsonplaceholder.typicode.com/users in a browser. You’ll see that it returns a list of users in JSON format. The brackets denote a list, curly brackets an object. In this lab, you’ll create a React app that “consumes” the info from the API, i.e., calls the API and lists the info.
2. Build the React app:

Create a new React project. From the command-line:

```bash
npx create-react-app simple-api-call-axios
cd simple-api-call-axios
```

Install axios. At the command line:

```jsx
npm install axios
```

Replace the app.js in the generated code with:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Using Axios to fetch data
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);  // Axios packs the response in a 'data' property
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersComponent;
```

run locally with “npm start” from the main project folder. Does it list the names returned by the API?

## Coding Exercises

1. Modify the React code above by having it display each user’s email and city as well as the name.
2. Another public api is https://dog.ceo/api/breeds/image/random. Type that into a browser.

   It returns json with a single object and two fields, “message” and “status”.
   `{"message":"https:\/\/images.dog.ceo\/breeds\/sheepdog-shetland\/n02105855_14781.jpg","status":"success"}`

   The “message” is a URL to a dog picture. Note that “\” is the escape character.

   Create a new React app and paste in the sample code above as the app.js, then modify it to have it show the picture that is randomly returned from the dog api. Note that you’ll want to change the URL in the axios call to the dog one, and you’ll want to modify the code in the return near the bottom— the JSON coming back isn’t a list, its a single object, and you really only care about the “message” from that single object.

3. Consider the API call: https://springdatastoresample-398023.uw.r.appspot.com/findAllBooks. Create a new React app that lists the books returned from that call.