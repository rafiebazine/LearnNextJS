async function makePostRequest() {
    const req = await fetch(`${process.env.NEXT_URL}/api/hello`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "rafie",
        })
    });

    const data = await req.json();
    return data;
}


export default async function Friends() {
    const { data } = await makePostRequest();


    return (
        <div>Heyy, {data.message}</div>
    )
}