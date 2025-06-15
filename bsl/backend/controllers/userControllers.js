const userModel = require('../models/userModel');

const userInsert = async (req, res) => {
    try {
        const { id, name, gender, email, password, roll } = req.body;
        const user = new userModel({ id, name, gender, email, password, roll });
        await user.save();
        res.send({ status: true, message: "User registration successfull", data: user });
    } catch (err) {
        console.error("Error regestering:", err);
        res.status(500).send({ status: false, message: "Error registering user" });
    }
}

const userGet = async (req, res) => {
    try {
        let user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ status: false, message: "User not found" });
        }
        res.send({ status: true, data: user });
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ status: false, message: "Error fetching user" });
    }
};

const userDelete = async (req, res) => {
    try {
        const result = await userModel.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ status: false, message: "User not found" });
        }
        res.send({ status: true, message: "User deleted successfully" });
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).json({ status: false, message: "Error deleting user" });
    }
};

module.exports = { userInsert, userGet, userDelete }