/* B"H
    This is what is giving the error that something is wrong when logging in
*/

const API_ROOT = import.meta.env.VITE_API_ROOT as string;

export async function rest(url: string, data?: unknown, method?: string, headers?: any){
    return fetch(url, {
        method: method ?? (data ? "POST" : "GET"),
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: data ? JSON.stringify(data) : undefined
    })
        .then(response => response.ok 
            ? response.json()
            : response.json().then(err => Promise.reject(err))
        )

}

export function api(action: string, data?: unknown, method?: string, headers?: HeadersInit){
    return rest(`${API_ROOT}/${action}`, data, method, headers);
}



/*  Asynchronous patterns in JavaScript
    1. Callbacks
    2. Pipelining
    3. Promises
    4. Async/Await
*/