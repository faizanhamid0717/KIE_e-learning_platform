import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})


export class AssignmentsComponent {
  constructor(private http: HttpClient) {
    // ...
  }
   
  assignments: any[] = [];
  selectedAssignment: any = null;

  ngOnInit() {
    // Fetch courses when the component is initialized
    this.fetchAssignments();
  }

  toggleAssignmentDetails(assignment: any) {
    if (this.selectedAssignment === assignment) {
      // Clicked on the same assignment, close it
      this.selectedAssignment = null;
    } else {
      // Clicked on a different assignment, expand it
      this.selectedAssignment = assignment;
    }
  }

  fetchAssignments() {
    this.http.get<any[]>('http://localhost:9090/assignment/')
      .subscribe((assignments) => {
        this.assignments = assignments;
      }, (error) => {
        console.error('Error fetching assignments', error);
      });
  }


}

