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
const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

const userRoute = (app) => {
    app.route('/users/:id?')
        .get((req, res) => {
            const users = getUsers()
            console.log(res.body)
            res.send({ users })
        })
        .post((req, res) => {
            const users = getUsers()

            users.push(req.body)
            saveUser(users)
console.log(res.body)
            res.status(201).send('OK post')
        })
        .put((req, res) => {
            const users = getUsers()

            saveUser(users.map(user => {
                if (user.id == req.params.id) {
                    return {
                        ...user,
                        ...req.body
                    } 
                } else {
                    return user
                }
            }))

            res.status(200).send('OKOk')
        })
        .delete((req, res) => {
            const users = getUsers()

            saveUser(users.filter(users => users.id !== req.params.id ))

            res.status(200).send('Ok')

        })
}

module.exports = userRoute