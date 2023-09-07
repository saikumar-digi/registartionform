export async function registerUser(newRegister) {
    const response = await fetch(`http://localhost:8099/registerUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRegister)
    });
	console.log(response);
    return response.json();
}