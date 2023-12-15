/* B"H
*/

import { api } from './session';
import { type Entry } from './activity';

export interface User {
  id :number,
  username: string,
  name: string,
  email: string,
  photo?: string,
  password: string,
  role: "admin" | "user",
  isAdmin: boolean,
  friends?: User[],
  entries?: Entry[],
  token?:string
}

export function getUsers(): Promise< User[]> {
  return api('users'); 
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find( x => x.email === email );
}

export async function getUserByUsername(username: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find( x => x.username === username );
}

export async function createUser(user: User): Promise<User> {
  return api('users/register', user, 'POST');
}

export function signIn(username: string, password: string) {
    return api(`user/${username}`, {}, 'PATCH').then(user => {
        if (user && user.password === password) {
            return user;
        } else {
            return false;
        }
    })
}

