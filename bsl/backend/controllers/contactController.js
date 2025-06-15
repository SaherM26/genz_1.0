const contactModel = require('../models/contactModel');

// Insert Contact Message
const contactInsert = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const contact = new contactModel({ name, email, subject, message });
        await contact.save();

        res.send({ status: true, message: "Message submitted successfully", data: contact });
    } catch (err) {
        console.error("Error submitting contact:", err);
        res.status(500).send({ status: false, message: "Error submitting message" });
    }
};

// View all Contact Messages
const contactView = async (req, res) => {
    try {
        const messages = await contactModel.find();
        res.send({ status: true, data: messages });
    } catch (err) {
        console.error("Error fetching messages:", err);
        res.status(500).send({ status: false });
    }
};

module.exports = { contactInsert, contactView };
