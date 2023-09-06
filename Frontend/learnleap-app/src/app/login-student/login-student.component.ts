import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent {

  isLoginForm: boolean = true;
  loginEmail: string = '';
  loginPassword: string = '';
  student: any = {};

  // Define a variable to store error messages
  errorMessage: string = '';

  constructor(private http: HttpClient ,  private router: Router ,private authService: AuthService) {}

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
  }


  login() {

  const loginData = {
      email: this.loginEmail,
      password: this.loginPassword
    };
  
    console.log('loginData', loginData);
  
    this.http.post(`http://localhost:9090/students/login`, loginData).subscribe(
      (response: any) => {
        console.log('Login response:', response);
  
        if (response.token) {
          // Store the token in local storage or a cookie for future authenticated requests
          localStorage.setItem('token', response.token);
          this.loginEmail = '';
          this.loginPassword = '';
          alert('Login successful');
          this.authService.login();
          // Navigate to the home page or any other route after successful login
          this.router.navigate(['']); // Change this to the desired route
        } else {
          // Handle login error, display an error message
          this.errorMessage = 'Invalid credentials';
          alert('Invalid credentials')
        }
      },
      (error) => {
        console.error('Login error:', error);
        // Handle HTTP error, display an error message
        this.errorMessage = 'Server error';
      }
    );
  }


  
  signup() {
    const signupData = {
      name: this.student.name,
      gender: this.student.gender,
      dateOfBirth: this.student.dateOfBirth,
      email: this.student.email,
      contactNumber: this.student.contactNumber,
      password: this.student.password,
    };

    console.log("signupData",signupData)

    this.http.post(`http://localhost:9090/students/signup`, signupData).subscribe(
      (response: any) => {
        // Check if the signup was successful
        alert('Signup successful');
        this.clearInputFields();
        if (response.success) {
          // Handle successful signup, e.g., navigate to a different page
          console.log('Signup successful');
      
        } else {
          // Handle signup error, display an error message
          this.errorMessage = 'Signup failed';
        }
      },
      (error) => {
        // Handle HTTP error, display an error message
        this.errorMessage = 'Server error';
      console.error('Server error', error);
      }
    );
  }

  clearInputFields() {
    this.student.name = '';
    this.student.gender = '';
    this.student.dateOfBirth = '';
    this.student.department = '';
    this.student.email = '';
    this.student.contactNumber = '';
    this.student.password = '';
  }

}
