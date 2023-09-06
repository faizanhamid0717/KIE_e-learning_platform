import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { LoginInstructorComponent } from './login-instructor/login-instructor.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent ,canActivate: [AuthGuard] },
  { path: 'announcements', component: AnnouncementsComponent ,canActivate: [AuthGuard]},
  { path: 'assignments', component: AssignmentsComponent ,canActivate: [AuthGuard]},
  { path: 'login/student', component: LoginStudentComponent },
  { path: 'login/instructor', component: LoginInstructorComponent },
  { path: 'instructor-dashboard', component: InstructorDashboardComponent }
  // Add more routes as needed
];

// ,canActivate: [AuthGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
