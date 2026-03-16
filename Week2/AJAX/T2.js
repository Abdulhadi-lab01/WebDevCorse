const requestURL = 'https://reqres.in/api/users';

const data = {
    email: "eve.holt@reqres.in",
    password: "pistol"
};

fetch(requestURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres_afd4ec12deb04bdbb5d6fc0757223939'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(result => {
        console.log('Response:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });