export default async function users(){

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();


    return (
        <div>
        <div>users page</div>
        <ul>
            {
                users.map((user: {id: number; name: string})=>{
                    return <li key={user.id}>{user.name}</li>
                })
            }
        </ul>
        </div>
    )
}