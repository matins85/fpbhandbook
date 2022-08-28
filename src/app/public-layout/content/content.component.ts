import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ToggleNavService } from '../sharedService/toggle-nav.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor(
    private router: Router,
    private service: ToggleNavService,
    private httpService: HttpService
  ) {
    // if (this.service.getMessage() == undefined) {
    //   this.router.navigate(['/']);
    // } else {
    //   this.datas = this.service.getMessage();
    // }
  }

  back() {
    this.router.navigate(['/sub-category']);
  }

  next() {
    this.router.navigate(['/content']);
  }

  ngOnInit(): void {}
}
