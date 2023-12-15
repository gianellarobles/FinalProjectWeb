/** 
 * @typedef {Object} BaseUser
 * @property {string} name
 * @property {string} email
 * @property {string} username
 * @property {string} password
 * @property {string} image
 * @property {string} macAddress
 */

/**
 * @typedef {Object} HasId
 * @property {number} id
 */

/**
 * @typedef {BaseUser & HasId} User
 */

/**
 * @type { {users: User[]} }
 */

const { connect, ObjectId } = require('./mongo')
const data = require("../data/users.json");
const collectionName = 'users'

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;



function search(query) {
  return data.users.filter(x => {
    return (
      x.name.toLowerCase().includes(query.toLowerCase()) ||
      x.email.toLowerCase().includes(query.toLowerCase()) ||
      x.username.toLowerCase().includes(query.toLowerCase()) 
    );
  });
}

/**
 * @param {BaseUser} values - The user to create.
 * @returns {User} The created user.
 */
function register(values) {
    // register is like create but with validation
    // and some extra logic

    const exists = data.users.some(x => x.username === values.username);
    if (exists) {
        throw new Error('Username already exists');
    }

    if (values.password.length < 5) {
        throw new Error('Password must be at least 5 characters');
    }
}

/**
 * @param {string} email
 * @param {string} password
 * @returns { Promise< { user: User, token: string}> } The created user.
 */
async function login(username, password) {
  const db = await collection();
  const user = await db.findOne({username: username, password: password})
  console.log("user",user, username, password)
  
  if(!user) {
    throw new Error('User not found or password incorrect');
  }

  let userObject = { ...user, password: undefined};
  const token = await generateJWT(userObject);
  return { user:userObject, token };
}

/**
 * @param {User} newValues - The user's new data.
 * @returns {User} The updated user.
 */
function update(newValues) {
  const index = data.users.findIndex(p => p.id === newValues.id);
  if(index === -1) {
    throw new Error('User not found');
  }
  data.users[index] = {
    ...data.users[index],
    ...newValues,
  };
  return data.users[index];
}

/**
 * @param {number} id - The user's ID.
 */
function remove(id) {
  const index = data.users.findIndex(x => x.id === id);
  if(index === -1) {
    throw new Error('User not found');
  }
  data.users.splice(index, 1);
}

async function generateJWT(user) {
  return new Promise((resolve, reject) => {
    jwt.sign(user, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } , (err, token) => {
      if(err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  })
}

async function verifyJWT(token) {
  return await new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if(err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  })
}


async function collection() { 
    const db = await connect()
    return db.collection(collectionName)
}

async function getUser(username) {
    const db = await collection();
    const user = await db.findOne({username: username})
    return user
}

async function getAll() {
    const db = await collection();
    const users = await db.find().toArray()
    return users
}

async function addUser(name, username, email, password) {
    const db = await collection()
    let result = false;
    await getUser(username).then((user) => {
        if (user) {
            //dont insert  
        } else {
            db.insertOne({
                "username": username,
                "password": password,
                "name": name,
                "email": email,
            })
            result = true;
        }
    })

    return result;
}

async function updateUser(user) {
    const db = await collection();
    return await db.findOneAndReplace(
        {username: user.username},
        {
            "username": user.username
            ,"password": user.password
        },
        {returnNewDocument: true, returnDocument: "after"}
    )
}




module.exports = {
  getAll, search, update, remove, login, register, generateJWT, verifyJWT, collection ,getUser,addUser,updateUser
};
