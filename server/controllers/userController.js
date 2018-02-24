module.exports = {
    getUser: (req, res) => {
        res.json(req.session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send();
    },
    update: (req, res) => {
        const {firstName, lastName} = req.body;
        const fullName = firstName + ' ' + lastName;
        console.log(fullName);
        console.log(req.session.user.id);
        req.app.get('db').update_user(fullName, req.session.user.id).then(response => {
            console.log(response.data);
        }).catch(error=> console.log(error));
    }
}