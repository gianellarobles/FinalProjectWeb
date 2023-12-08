/* B"H
*/

import { api } from './session';

export interface User {
  id :number,
  username: string,
  name: string,
  email: string,
  password: string,
  role: "admin" | "user"
}

export function getUsers(): Promise< User[]> {
  return api("users"); 
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find( x => x.email === email );
}
export async function getUserById(id: number): Promise<User | undefined> {
  const users = await getUsers();
  return users.find( x => x.id === id );
}

export async function getUserByUsername(username: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find( x => x.username === username );
}

export async function createUser(user: string, password: string): Promise<User> {
  return api("users", { method: "POST", body: JSON.stringify(user) });
}

export function signIn(username: string, password: string) {
    return api(`users/${username}`, {}, 'PATCH').then(user => {
        if (user && user.password === password) {
            return user;
        } else {
            return false;
        }
    })
}
