const User = require("../models/user");

const update = async (data) => {
    try {
        if(data.email || data.password) {
            console.log("Should not update email or pass")
            return;
        }
        const user = User.findByIdAndUpdate(data.id, data, {new: true}).exec();
        return user;
    } catch (err) {
        console.log(err);
        return err;
    }
}

const getEmployee = async (id) => {
    try {
        const user = User.findById(id).exec();
        return user;
    } catch (err) {
        console.log(err);
        return err;
    }
}

module.exports = {
    update,
    getEmployee
}