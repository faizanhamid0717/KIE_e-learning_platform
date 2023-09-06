import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent {
  constructor(private http: HttpClient) {
    // ...
  }
  announcements: any[] = [];
  selectedAnnouncement: any = null;

  ngOnInit() {
    // Fetch courses when the component is initialized
    this.fetchAnnouncements();
  }

  toggleAnnouncementDetails(announcement: any) {
    if (this.selectedAnnouncement === announcement) {
      // Clicked on the same announcement, close it
      this.selectedAnnouncement = null;
    } else {
      // Clicked on a different announcement, expand it
      this.selectedAnnouncement = announcement;
    }
  }

  fetchAnnouncements() {
    this.http.get<any[]>('http://localhost:9090/announcement/')
      .subscribe((announcements) => {
        this.announcements = announcements;
      }, (error) => {
        console.error('Error fetching announcements', error);
      });
  }

}
