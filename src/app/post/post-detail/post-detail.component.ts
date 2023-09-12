import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  title_post = 'Lu asik bang';
  user = 'st_kanexghif';
  source = 'ide + generator';

  constructor() {}

  ngOnInit(): void {}
}
