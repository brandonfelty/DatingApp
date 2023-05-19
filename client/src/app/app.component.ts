import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
interface User {
  id: number;
  userName: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Dating App';
  users: User[] = [];
  error: HttpErrorResponse = {} as HttpErrorResponse;
  constructor(
    private http: HttpClient
  ) {}


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

  ngOnDestroy(): void {
    console.log('destroyed');
  }
}
