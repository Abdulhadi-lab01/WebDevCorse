const requestURL ='https://reqres.in/api/users/1'

fetch(requestURL, {
    headers: {
        'x-api-key': 'reqres_afd4ec12deb04bdbb5d6fc0757223939',
    },
})
.then( async response => response.json())
.then(data => {console.log(data)})