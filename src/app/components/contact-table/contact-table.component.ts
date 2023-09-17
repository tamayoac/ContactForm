// src/app/contact-table/contact-table.component.ts

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../models/contacts.model';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent {
  @Input() contacts: Contact[] = [];
  @Output() contactToEdit = new EventEmitter<Contact>();

  constructor(
    private router: Router,
    private contactService: ContactService  // Inject the service
  ) { }


  onView(id: number) {
    this.router.navigate(['/contact', id]);
  }
  
  onEditClick(contact: Contact): void {
    this.contactToEdit.emit(contact);
  }

  
  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactService.deleteContact(id);
      // Update the contacts list in the component
      this.contacts = this.contactService.getAllContacts();
    }
  }
  // Implement delete, view, and update methods here...
}
