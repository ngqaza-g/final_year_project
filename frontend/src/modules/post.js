async function post(url, data){
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    });

    const status = response.status;
    const response_data = await response.json();
    return {status : status, data : response_data};
}

export default post;