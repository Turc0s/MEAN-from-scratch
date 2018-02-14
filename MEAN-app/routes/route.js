
const express = require("express");
const router = express.Router();

const Contact = require("../models/contact");


// Get all contacts
router.get("/contacts", (req, res) => {
    Contact.getContacts((err, contacts) => {
        if(err) {
            throw err;
        }
        console.log("inside getContacts()");
        res.json(contacts);
    });
});

//  Get a single contact 
router.get("/contact/:id", (req, res) => {
    Contact.getContactById(req.params.id, (err, contact) => {
        if(err) {
            throw err;
        }
        console.log("Get single contact");
        res.json(contact);
    });
});

// add new contact
router.post("/contact", (req, res) => {
    var contact = req.body;
    Contact.addContact(contact, (err, contact) => {
        if(err) {
            throw err;
        }
        res.json(contact);
    });
});

// remove Contact
router.delete("/contact/:id", (req, res) => {
    var id = req.params.id;
    Contact.removeContact(id, (err, contact) => {
        if(err) {
            throw err;
        }
        res.json(contact);
    });
});

module.exports = router;

