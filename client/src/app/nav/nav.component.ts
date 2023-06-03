import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  model: any = {};
  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        loginForm.reset();
      },
      error: error => {
        console.log(error);
      }
    })
  }

  logout() {
    this.accountService.logout();
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }
}
