import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { BaseUrl } from 'src/environments/environment';
import { ToggleNavService } from '../sharedService/toggle-nav.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @ViewChild('card', { static: true })
  card!: ElementRef<HTMLDivElement>;

  @ViewChild('card2', { static: true })
  card2!: ElementRef<HTMLDivElement>;

  @ViewChild('card3', { static: true })
  card3!: ElementRef<HTMLDivElement>;

  datas: any;
  search: string = '';

  constructor(
    private router: Router,
    private service: ToggleNavService,
    private httpService: HttpService
  ) {}

  initAnimations(): void {
    gsap.from(this.card.nativeElement.children, {
      delay: 0.5,
      duration: 0.5,
      y: -40,
      opacity: 0,
      stagger: 0.15,
    });
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

  back() {
    this.router.navigate(['/']);
  }

  next() {
    this.router.navigate(['/sub-category']);
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

  listData() {
    if (this.datas == undefined) {
      this.httpService.getSingleNoAuth(BaseUrl.login).subscribe((data: any) => {
        this.datas = data;
        this.service.setMessage(data);
      });
    } else {
    }
  }

  ngOnInit(): void {
    this.initAnimations();
    this.listData();
  }
}
