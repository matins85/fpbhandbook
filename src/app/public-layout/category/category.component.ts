import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HttpService } from 'src/app/services/http.service';
import { HandbookData } from '../shared/handbook';
import { ToggleNavService } from '../sharedService/toggle-nav.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @ViewChild('card2', { static: true })
  card2!: ElementRef<HTMLDivElement>;

  @ViewChild('card3', { static: true })
  card3!: ElementRef<HTMLDivElement>;

  datas: any;
  search: string = '';
  searchData: any;
  loading = false;

  constructor(
    private router: Router,
    private service: ToggleNavService,
    private httpService: HttpService
  ) {
    // if (!this.service.getMessage()) {
    //   this.listData();
    // } else {
    // this.datas = this.service.getMessage();
    // this.searchData = this.service.getMessage();
    this.datas = HandbookData;
    this.searchData = HandbookData;
    this.service.setMessage(HandbookData);
    // }
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
      return data?.chapter.toLowerCase().includes(search.toLowerCase());
    });
    this.datas = data;
  }

  initAnimations(): void {
    gsap.from(this.card2.nativeElement.children, {
      delay: 0.5,
      duration: 0.5,
      x: 40,
      opacity: 0,
      stagger: 0.15,
    });
    gsap.from(this.card3.nativeElement.children, {
      delay: 0.5,
      duration: 0.5,
      x: -40,
      opacity: 0,
      stagger: 0.15,
    });
  }

  listData() {
    this.loading = true;
    // this.httpService.getAuthSingle(BaseUrl.handbook).subscribe((data: any) => {
    //   this.datas = data;
    //   this.searchData = data;
    //   console.log(data);
    this.datas = HandbookData;
    this.searchData = HandbookData;
    this.service.setMessage(HandbookData);
    this.loading = false;
    // });
  }

  ngOnInit(): void {
    this.initAnimations();
  }
}
