import session { application, setUser } from './session';

//add new users into our website system, SignUp fuction 
export function SignUp(username: string, password: string) {
    return api<boolean>(`users/${username}/${password}`,{},'PATCH')
}
//allow users to log into their accounts, LogIn fucntion
export function LogIn(username: string, password: string) {
    return api<User>(`users/${username}`, {}, 'PATCH').then(user => {
        if (user && user.password === password) {
            return user;
        } else {
            return false;
        }
    })
}
