import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { HttpService } from 'src/app/services/http.service';
// import { BaseUrl } from 'src/environments/environment';
import { HandbookData } from '../shared/form';
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
    private service: ToggleNavService // private httpService: HttpService,
  ) // private snackBar: MatSnackBar
  {
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
      return data?.chapter.toLowerCase().includes(search.toLowerCase());
      // data.name.toLowerCase().startsWith(search.toLowerCase()) ||
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
    this.datas = HandbookData;
    this.searchData = HandbookData;
    console.log(HandbookData);
    this.service.setMessage(HandbookData);
    this.loading = false;
    // if (this.datas) {
    // } else {
    //   this.httpService.getSingleNoAuth(BaseUrl.handbook).subscribe(
    //     (data: any) => {
    //       this.datas = data;
    //       this.searchData = data;
    //       console.log(data);
    //       this.service.setMessage(data);
    //       this.loading = false;
    //     },
    //     (err) => {
    //       this.loading = false;
    //       this.snackBar.open('Please refresh page', 'x', {
    //         duration: 3000,
    //         panelClass: 'warning',
    //         horizontalPosition: 'center',
    //         verticalPosition: 'top',
    //       });
    //     }
    //   );
    // }
  }

  ngOnInit(): void {
    this.initAnimations();
  }
}
