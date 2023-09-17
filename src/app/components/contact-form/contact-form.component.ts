import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Contact } from '../../models/contacts.model';
import { NgForm, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnChanges {
  name = '';
  email = '';
  phone = '';

  @Output() contactAdded = new EventEmitter<Contact>();
  @Output() contactUpdated = new EventEmitter<Contact>();
  @Input() editableContact?: Contact;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editableContact'] && this.editableContact) {
        this.name = this.editableContact.name;
        this.email = this.editableContact.email;
        this.phone = this.editableContact.phone;
    }
  }

  emailIsValid(): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(this.email);
  }
  
  phoneIsValid(): boolean {
    const validFormat = /^(\d{5}-\d{5}|\d{11})$/;
    return validFormat.test(this.phone);
  }  
  onSubmit(form: NgForm) {
    if (form.invalid) {
      // Handle invalid form
      console.error('Form is invalid');
      return;
    }

    if (this.editableContact) {
      // Update mode
      const updatedContact = { ...this.editableContact, name: this.name, email: this.email, phone: this.phone };
      this.contactUpdated.emit(updatedContact);
      this.editableContact = undefined;
    } else {
      // Add mode
      const newContact = new Contact(Date.now(), this.name, this.email, this.phone);
      this.contactAdded.emit(newContact);
      this.editableContact = undefined;
    }

    // Reset form values
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
  }
}
