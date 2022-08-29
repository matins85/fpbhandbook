import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { BaseUrl } from 'src/environments/environment';
import { ToggleNavService } from '../sharedService/toggle-nav.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  datas: any;
  search: string = '';
  searchData: any;
  loading = false;

  constructor(
    private router: Router,
    private service: ToggleNavService,
    private httpService: HttpService
  ) {
    if (!this.service.getMessage()) {
      this.listData();
    } else {
      this.datas = this.service.getMessage();
      this.searchData = this.service.getMessage();
    }
  }

  back() {
    this.router.navigate(['/']);
  }

  next(data: any) {
    this.service.setSubMessage(data);
    this.router.navigate(['/sub-category']);
  }

  modelChange(search: any) {
    const data = this.searchData?.filter((data: any) => {
      return data?.chapter.toLowerCase().startsWith(search.toLowerCase());
      // data.name.toLowerCase().startsWith(search.toLowerCase()) ||
    });
    this.datas = data;
  }

  listData() {
    this.loading = true;
    if (this.datas) {
    } else {
      this.httpService.getSingleNoAuth(BaseUrl.handbook).subscribe(
        (data: any) => {
          this.datas = data;
          this.searchData = data;
          console.log(data);
          this.service.setMessage(data);
          this.loading = false;
        },
        (err) => {
          this.loading = false;
        }
      );
    }
  }

  ngOnInit(): void {}
}
