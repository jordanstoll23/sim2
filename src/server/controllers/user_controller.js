const user = require('../house/fakeData');

module.exports = {
    read: (req, res, next) => {
        res.status(200).send( user);
    }
}