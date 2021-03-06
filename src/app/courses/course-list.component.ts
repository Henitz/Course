import { OnInit } from '@angular/core';
import { Component } from '@angular/core'
import { Course } from './course';



@Component({
  selector: 'app-course-list',
  /* template: '<h2> Course List </h2>' */
  templateUrl: './course-list.component.html',

})

export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
    {
     id: 1,
     name: 'Angular: Forms',
     imgUrl:'/assets/images/forms.png ',
     price: 99.99,
     code: 'XPS-8796',
     duration: 120,
     rating: 4.5,
     releaseDate: 'December, 2, 2019'
   },
   {
    id: 2,
    name: 'Angular: HTTP',
    imgUrl: '/assets/images/http.png',
    price: 45.99,
    code: 'LKL-1041',
    duration: 80,
    rating: 4,
    releaseDate: 'November, 4, 2019'
   }
  ]
}


}
