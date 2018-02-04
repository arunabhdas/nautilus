import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects;
  text;
  constructor() { }

  ngOnInit() {
    this.projects = [
      {
        text: 'Launch Mars rocketship'
      },
      {
        text: 'Launch geostationary satellite'
      },
      {
        text: 'Fix supply chain'
      },
    ];
  }

  addProject() {
    console.log(this.text);
  }

}
