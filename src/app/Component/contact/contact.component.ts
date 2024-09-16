import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/Service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required,Validators.pattern("[0-9 ]{10}")]],
      subject: ['0'],
      message: ['', Validators.required]
    });
    console.log(this.form.get('contact')?.errors);
  }
  handleSuccess(e:any) {
    console.log("ReCaptcha", e);
  }
  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      alert("Your Enquiry Submitted successfully...!")
      this.form.reset();
      this.contactService.createFormData(formData).subscribe(
        response => {
          console.log('Data created successfully:', response);
        },
        error => {
          console.error('Error creating data:', error);
        }
      );
    }
  }
}
