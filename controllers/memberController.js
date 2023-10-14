let memberController = module.exports

memberController.home = (req, res) => {
    console.log('GET controller home')
    res.send('home page')
}

memberController.signup = (req, res) => {
    console.log('POST controller signup')
    res.send('signup page')
}

memberController.login = (req, res) => {
    console.log('POST controller login')
    res.send('login page')
}

memberController.logout = (req, res) => {
    console.log('GET controller logout')
    res.send('logout page')
}
