import { notFound } from "next/navigation";
import { use } from "react";

export default async function userPage({
    params,
}: {
    params: Promise<{ userId: string }>;
}) {
    const {userId} = await params;
    
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    
    if(!user){
        notFound();
    }


    return (
        <div>
        <div>users page</div>
        <h1>Name: {user.name}</h1>
        <h1>Email: {user.email}</h1>
        <h1>Phone: {user.phone}</h1>
        </div>
    )
}
