async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}




(async () => {
    try {
        const user = {
            name: 'John Doe',
            job: 'Developer'
        };

        const url = 'https://reqres.in/api/users';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres_afd4ec12deb04bdbb5d6fc0757223939'
            },
            body: JSON.stringify(user)
        };

        const userData = await fetchData(url, options);
        console.log('Response from API:', userData);
    } catch (error) {
        console.error('eror', error);
    }
})();


