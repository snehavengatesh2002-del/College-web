import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.html',
  styleUrl: './faculty.css',
})
export class Faculty {
  filter = signal('All');
  staff = [
    { name: 'Dr. Anita Rao', role: 'Professor & HOD', dept: 'Computer Science' },
    { name: 'Prof. Rahul Menon', role: 'Associate Professor', dept: 'Commerce' },
    { name: 'Dr. Sunita Das', role: 'Professor', dept: 'English' },
    { name: 'Prof. Kiran Shetty', role: 'Assistant Professor', dept: 'Mathematics' },
    { name: 'Dr. Mohan Iyer', role: 'Professor & HOD', dept: 'Physics' },
    { name: 'Prof. Neha Verma', role: 'Assistant Professor', dept: 'Computer Science' },
  ];
  depts = ['All', ...new Set(this.staff.map(s => s.dept))];
  shown = computed(() => this.filter() === 'All' ? this.staff : this.staff.filter(s => s.dept === this.filter()));
  initials(name: string) { return name.replace(/^(Dr|Prof)\.\s*/, '').split(' ').map(w => w[0]).join(''); }
}
