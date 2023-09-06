import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  constructor(private http: HttpClient) {
    // ...
  }
  // Define an array to store course data
  courses: any[] = [];
  ngOnInit() {
    // Fetch courses when the component is initialized
    this.fetchCourses();
  }


  fetchCourses() {
    // Fetch the list of courses from your API
    this.http.get<any[]>('http://localhost:9090/course/')
      .subscribe((courses) => {
        // Update the courses property with the fetched data
        this.courses = courses;
      }, (error) => {
        // Handle any errors
        console.error('Error fetching courses', error);
      });
  }

}
