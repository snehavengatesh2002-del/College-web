import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export class Departments {
  departments = [
    { name: 'Computer Science', degree: 'B.Sc, M.Sc', seats: 60, about: 'Programming, databases, networks and web development.' },
    { name: 'Commerce', degree: 'B.Com', seats: 120, about: 'Accounting, taxation, banking and business law.' },
    { name: 'English', degree: 'BA', seats: 60, about: 'Literature, linguistics and professional writing.' },
    { name: 'Mathematics', degree: 'B.Sc', seats: 40, about: 'Algebra, analysis and statistics.' },
    { name: 'Physics', degree: 'B.Sc', seats: 40, about: 'Mechanics, electronics and modern physics labs.' },
    { name: 'Business Administration', degree: 'BBA', seats: 60, about: 'Management, marketing and entrepreneurship.' },
  ];
}
