import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: User[] = [];
  error: HttpErrorResponse = {} as HttpErrorResponse;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get<User[]>('http://localhost:5000/api/users')
      .subscribe({
        next: (users: User[]) => {
          this.users = users;
        },
        error: (error: HttpErrorResponse) => {
          this.error = error;
        }
      });
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }
}
