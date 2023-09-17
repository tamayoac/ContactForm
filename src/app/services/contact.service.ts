import { Injectable } from '@angular/core';
import { Contact } from '../models/contacts.model';
@Injectable({
    providedIn: 'root'
  })
  export class ContactService {
    private contacts: Contact[] = [];
  
    getAllContacts(): Contact[] {
        return [...this.contacts];
    }
  
    getContactById(id: number): Contact | undefined {
      return this.contacts.find(contact => contact.id === id);
    }
  
    addContact(contact: Contact): void {
      this.contacts.push(contact);
    }

    deleteContact(id: number): void {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
    }
    updateContact(updatedContact: Contact): void {
        const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
        if (index > -1) {
          this.contacts[index] = updatedContact;
        }
      } 
  }
  