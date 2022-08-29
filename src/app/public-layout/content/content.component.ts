import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleNavService } from '../sharedService/toggle-nav.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  search: string = '';
  datas: any;
  searchData: any;
  previousData: any;

  constructor(private router: Router, private service: ToggleNavService) {
    if (this.service.getSubMessage() == undefined) {
      this.router.navigate(['/category']);
    } else {
      this.datas = this.service.getContentMessage();
      this.searchData = this.service.getSubMessage();
      this.previousData = this.service.getSubMessage();
      console.log(this.datas);
    }
  }

  back() {
    this.service.setSubMessage(this.previousData);
    this.router.navigate(['/sub-category']);
  }

  next() {
    // this.router.navigate(['/content']);
  }

  limit(title: any, limit = 11) {
    if (title === undefined) {
      return '';
    } else {
      const newTitle: any = [];
      if (title.length > limit) {
        title.split('').reduce((acc: any, cur: any) => {
          if (acc + cur.length <= limit) {
            newTitle.push(cur);
          }
          return acc + cur.length;
        }, 0);
        return `${newTitle.join('')}...`;
      }
      return title;
    }
  }

  modelChange(search: any) {
    const data = this.datas?.filter((data: any) => {
      return '';
      // data.tin.toLowerCase().startsWith(search.toLowerCase()) ||
      // data.name.toLowerCase().startsWith(search.toLowerCase()) ||
      // data.status.toLowerCase().startsWith(search.toLowerCase()) ||
      // data.payment.toLowerCase().startsWith(search.toLowerCase())
    });
    this.datas = data;
  }

  ngOnInit(): void {}
}
