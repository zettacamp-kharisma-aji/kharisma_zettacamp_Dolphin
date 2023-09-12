import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-ads',
  templateUrl: './sidebar-ads.component.html',
  styleUrls: ['./sidebar-ads.component.css'],
})
export class SidebarAdsComponent implements OnInit {
  sourceAds = 'https://s0.2mdn.net/simgad/8056521551220356251';

  constructor() {}

  ngOnInit(): void {}
}
