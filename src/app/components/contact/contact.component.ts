import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl("");
  submitted: boolean = false; 
  isLoading: boolean = false; 
  responseMessage!: string;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable(); 
      var formData = new FormData();
      formData.append("name", this.form.get("name")!.value);
      formData.append("email", this.form.get("email")!.value);
      formData.append("message", this.form.get("message")!.value);
      this.isLoading = true; 
      this.submitted = false; 
      this.http.post("https://script.google.com/macros/s/AKfycbxlrwzFmApTElo9LoRDzHn_sLl6xSGQHmPe1FOG6YrRrTnX4Izo/exec", formData).subscribe(
        (response: any) => {
          if (response["result"] == "success") {
            this.responseMessage = "Gracias. Le responderé pronto.";
          } 
          this.form.enable();
          this.submitted = true;
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Ha habido un error. Por favor, recargue la página y vuelva a intentarlo.";
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(error);
        }
      );
    }
  }

}
