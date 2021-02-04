// gives access to varibles in our .env (ex: API_KEY)
require('dotenv').config()

// to see env varibles
console.log(process.env)
console.log(process.env.API_KEY)