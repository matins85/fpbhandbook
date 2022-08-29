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
import { ToggleNavService } from '../sharedService/toggle-nav.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit {
  @ViewChild('card', { static: true })
  card!: ElementRef<HTMLDivElement>;

  @ViewChild('card2', { static: true })
  card2!: ElementRef<HTMLDivElement>;

  @ViewChild('card3', { static: true })
  card3!: ElementRef<HTMLDivElement>;

  datas: any;
  datas2: any;
  searchData: any;
  search2: string = '';

  constructor(private router: Router, private service: ToggleNavService) {
    if (this.service.getSubMessage() == undefined) {
      this.router.navigate(['/category']);
    } else {
      this.datas = this.service.getSubMessage();
      this.datas2 = this.service.getSubMessage();
      this.searchData = this.service.getSubMessage();
      console.log(this.datas);
    }
  }

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
    this.service.setSubMessage(this.datas);
    this.router.navigate(['/category']);
  }

  next(data: any) {
    this.service.setSubMessage(this.searchData);
    this.service.setContentMessage(data);
    this.router.navigate(['/content']);
  }

  modelChange2(search: any) {
    const data = this.searchData?.sub_category.filter((data: any) => {
      return data?.name.toLowerCase().startsWith(search.toLowerCase());
    });
    this.datas = data;
  }

  limit(title: any, limit = 14) {
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

  ngOnInit(): void {
    this.initAnimations();
  }
}
