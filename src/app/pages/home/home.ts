import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  notices = [
    { date: '15 Nov', text: 'Applications for the 2027 batch close' },
    { date: '02 Dec', text: 'Annual Science Exhibition' },
    { date: '18 Dec', text: 'Semester exams begin' },
  ];
  programs = [
    { name: 'B.Sc Computer Science', level: 'UG', blurb: 'Programming, data and systems, with a final-year project.' },
    { name: 'B.Com', level: 'UG', blurb: 'Accounting, finance and taxation with internships.' },
    { name: 'BA English', level: 'UG', blurb: 'Literature, writing and media studies.' },
    { name: 'M.Sc Data Science', level: 'PG', blurb: 'AI, analytics, and applied research for future-ready careers.' },
  ];
}
