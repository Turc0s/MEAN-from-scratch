
const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});

var Contact = module.exports = mongoose.model("Contact", ContactSchema);

// Get contacts
module.exports.getContacts = (callback, limit) => {
    Contact.find(callback).limit(limit);
}

// get contact by id
module.exports.getContactById = (id, callback) => {
        Contact.findById(id, callback);
}

// post new contact
module.exports.addContact = (contact, callback) => {
    Contact.create(contact, callback);
}

// Update contact
module.exports.updateContact = (id, contact, options, callback) => {
    var query = {_id: id};
    var update = {
        first_name: contact.first_name,
        last_name: contact.last_name,
        phone: contact.phone
    }
    Contact.findByIdAndUpdate(query, update, options, callback);
}

module.exports.removeContact = (id, callback) => {
    var query = {_id: id};
    Contact.remove(query, callback);
}

// const Contact = module.exports = mongoose.model("Contact", ContactSchema);
