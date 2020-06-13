// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

//import { AlertService, HttpService } from '../_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router, 
        private loginService: LoginService) {}
        //private alertService: AlertService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.logout();
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    login() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.loginService.login(this.f.username.value, this.f.password.value)
            .subscribe(
                data => {
                    let returnUrl = this.route.snapshot.paramMap.get('returnUrl');
                    if (returnUrl) {
                        this.router.navigate([returnUrl]);
                    } else { 
                        this.router.navigate(["/home"]);
                    }
                },
                error => {
                    //this.alertService.error(error);
                    console.log(error);
                    this.loading = false;
                });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('AuthToken');
        localStorage.removeItem('username');   
    }
}

