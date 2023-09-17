import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contacts.model';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  contact!: Contact;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private contactService: ContactService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
   
    const contactId = idParam ? +idParam : 0;

    const fetchedContact = this.contactService.getContactById(contactId);
    if (fetchedContact) {
      this.contact = fetchedContact;
    } else {
      // Handle the case when the contact is not found, for instance:
      // Navigate back to the main contact list page or show an error message.
      this.router.navigate(['/']);
    }
    
  }

  onBack(): void {
    this.router.navigate(['/']);  
  }
}

