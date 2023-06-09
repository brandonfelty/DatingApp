import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => {
        console.log(error);
        this.toastr.error(error.error)
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
