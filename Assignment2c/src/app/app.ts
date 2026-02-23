import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Registration Form');

  displayName='';
  displayEmail='';
  displayPhone='';
  displayAddress='';
  displayPassword='';

  getValue(name: string, email: string, phone: string, address: string, password: string) {
    this.displayName = name;
    this.displayEmail = email;
    this.displayPhone = phone;
    this.displayAddress = address;
    this.displayPassword = password;
  }
}
