import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  photos = [
    { title: 'Campus', src: 'images/Home.jpg', color: '#2f6f62' },
    { title: 'Cultural fest', src: 'images/cultual fest.jpeg', color: '#4f857c' },
    { title: 'Graduation', src: 'images/graduation.jpeg', color: '#10312b' },
    { title: 'Science lab', src: 'images/science lab.jpeg', color: '#46827a' },
    { title: 'Sports day', src: 'images/sports day.jpeg', color: '#8a6a1f' },
  ];
  selected = signal<number | null>(null);

  bg(i: number) {
    const p = this.photos[i];
    return p.src ? `url(${p.src}) center/cover` : p.color;
  }
}
