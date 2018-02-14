
const express = require("express");
const router = express.Router();

const Contact = require("../models/contact");

// retrieving contacts
// router.get("/contacts",  (req, res, next) => {
//     // res.send("Retrieving the contact list");
//     Contact.find((err, contacts) => {
//         res.json(contacts);
//     });
// });

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

// add contact
// router.post("/contact", (req, res, next) => {
//     // logic to add contact
//     let newContact = new Contact({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         phone: req.body.phone
//     });

//     newContact.save((err, contact) => {
//         if(err) {
//             res.json({msg: "Failed to add contact"});
//         } else {
//             res.json({msg: "Contact successfully added"});
//         }
//     });
// }); 

router.post("/contact", (req, res) => {
    var contact = req.body;
    Contact.addContact(contact, (err, contact) => {
        if(err) {
            throw err;
        }
        res.json(contact);
    });
});


//update contact
// router.put("/contact/:id", (req, res, next) => {
//     Contact.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
//         if(err) {
//             return next(err);
//         }
//         res.json(post);
//     });
// });

// delete contacts
router.delete("/contact/:id", (req, res, next) => {
    // logic to delete contact
    Contact.remove({_id: req.params.id}, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;



