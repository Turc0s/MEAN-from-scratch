import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Contact } from "./contact";
import "rxjs/Rx";

@Injectable()
export class ContactService {

  constructor(private _http: Http) { }

  // retrieving ContactService
  getContacts() {
    return this._http.get("http://localhost:3000/api/contacts/")
            .map(res => res.json());
  }

  // add contact method
  addContact(newContact) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http.post("http://localhost:3000/api/contact", newContact, {headers: headers})
                  .map(res => res.json());
  }

  // delete contact
  deleteContact(id) {
    return this._http.delete("http://localhost:3000/api/contact/"+id)
                .map(res => res.json());

  }

  // update contact info
  updateContact(contact: Contact, id: any) {
    return this._http.put("http://localhost:3000/api/contact/" + id, contact)
                  .map(res => res.json());
  }

}
