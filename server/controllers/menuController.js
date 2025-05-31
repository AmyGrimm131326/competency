const MenuItem = require('../models/menuItem');
module.exports = {
    allMenuItems(req, res) {
        console.log('we are here');
        
        MenuItem.find()
            .then(items => {
                console.log(items);
                
                res.send(items);
            }).catch(error => res.send(error));
    }
};