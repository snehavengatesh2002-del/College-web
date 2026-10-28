import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  facts = [
    { title: 'Founded', text: '1998, by the Riverside Education Trust.' },
    { title: 'Affiliation', text: 'Affiliated to a state university; NAAC accredited.' },
    { title: 'Campus', text: '10 acres with library, labs, sports ground and hostel.' },
  ];
}
