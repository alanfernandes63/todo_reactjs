import TODO_API from './endPoints';

export async function get(resource){
    const url = `${ TODO_API }${ resource }`;
    const response = await fetch(url);
    return response;
}

export async function put(id, done){
    const response = await fetch(`${TODO_API}?id=${id}&done=${done}`,
        {
            method:'PUT',
            headers:{
                "Content-Type":"application/json",
			    "Access-Control-Allow-Origin":"*"
            }
        });
    return response;
}

export async function post(todo){
    const response = await fetch(TODO_API, { method:'POST',
    headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    },
    body:JSON.stringify(todo) });
    return response;
}

export async function serviceDelete(id){
    const response = await fetch(`${TODO_API}?id=${id}`, { method:'DELETE'})
    return response;
}