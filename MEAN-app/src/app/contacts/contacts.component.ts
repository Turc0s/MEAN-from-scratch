import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from "../contact";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  contact: Contact;
  first_name: string;
  last_name: string;
  phone: number;

  constructor(private _contactService: ContactService) { }

  ngOnInit() {
   this.getAllContacts();
  }

  onAddContact(contactForm: NgForm) {
    console.log("AddContact()");
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    this._contactService.addContact(newContact)
          .subscribe(contact => {
            this.contacts.push(contact);
            this.getAllContacts();
            contactForm.reset();
          });
  }

  onDeleteContact(id: any) {
    var contacts = this.contacts;
    this._contactService.deleteContact(id)
          .subscribe(data => {
            if(data.n == 1) {
              for(var i = 0; i < contacts.length; i++) {
                if(contacts[i]._id == id) {
                  contacts.splice(i, 1);
                }
              }
            }
          });
  }

  getAllContacts() {
    console.log("GetAllContacts()");
    this._contactService.getContacts()
    .subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  // onEditContact(id: any) {
  //   var contact = this.contact;
  //   this._contactService.updateContact(id, contact)
  //           .subscribe(data => {
  //             console.log("Update contact: " + contact);
  //           });
  // }

}
