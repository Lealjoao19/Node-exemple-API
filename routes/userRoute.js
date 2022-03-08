const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname, 'users.json')

// ler usuários do arquivo .json
const getUsers = () => {
    const data = fs.existsSync(filePath) 
        ? fs.readFileSync(filePath) 
        : users = []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

// salvar usuários
const saveUser = (users) => fs.writeFileSync(filePath.JSON.stringify(users, null, '\t'))

const userRoute = (app) => {
    app.route('/users/:id?')
        .get((req, res) => {
            const users = getUsers()

            res.send({ users })
        })
}

module.exports = userRoute