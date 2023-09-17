import { Component } from '@angular/core';
import { Contact } from '../../models/contacts.model';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css']
})
export class ContactContainerComponent {
  contacts: Contact[] = [];  // Assuming you have a Contact type for the contacts
  selectedContact?: Contact;
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getAllContacts();
  }

  handleContactAdded(contact: Contact) {
    this.contactService.addContact(contact);
    this.contacts = this.contactService.getAllContacts();  // refresh
  }

  handleContactUpdated(updatedContact: Contact) {
    this.contactService.updateContact(updatedContact);
    this.refreshContacts();
  }
  handleEditRequest(contact: Contact): void {
    this.selectedContact = contact;
  }
  refreshContacts() {
    this.contacts = this.contactService.getAllContacts();
  }

}
