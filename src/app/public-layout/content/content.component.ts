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
  datas: any;
  previousData: any;
  table: any;
  nextData: any;
  prevData: any;

  constructor(private router: Router, private service: ToggleNavService) {
    if (this.service.getSubMessage() == undefined) {
      this.router.navigate(['/category']);
    } else {
      this.datas = this.service.getContentMessage();
      this.previousData = this.service.getSubMessage();
      const nextPrev: any = this.service.getNextPrevMessage();
      this.nextData = nextPrev.next[0] || null;
      this.prevData = nextPrev.prev[0] || null;
      this.tableData();
    }
  }

  tableData() {
    if (this.datas?.content.length > 0) {
      let table = this.datas?.content?.map((name: any) => {
        return name?.list_table_header;
      });
      if (table[0]?.length !== 0) {
        let table_body: any[] = table[0]?.map((name: any) => {
          return name?.table_body;
        });
        if (table_body !== [] || table_body !== undefined) {
          let table_body2: any[] = table_body[0]?.map(
            (name3: any, index2: number) => {
              return table_body.map((name4: any) => {
                return name4[index2];
              });
            }
          );
          this.table = table_body2;
          console.log(table_body2);
        }
      }
      //
      if (table[0]?.length == 0 && table[1]?.length > 0) {
        let table_body: any[] = table[1]?.map((name: any) => {
          return name?.table_body;
        });
        if (table_body !== [] || table_body !== undefined) {
          let table_body2: any[] = table_body[0]?.map(
            (name3: any, index2: number) => {
              return table_body.map((name4: any) => {
                return name4[index2];
              });
            }
          );
          this.table = table_body2;
          console.log(table_body2);
        }
      }
      //
      if (
        table[0]?.length == 0 &&
        table[1]?.length == 0 &&
        table[2]?.length > 0
      ) {
        let table_body: any[] = table[2]?.map((name: any) => {
          return name?.table_body;
        });
        if (table_body !== [] || table_body !== undefined) {
          let table_body2: any[] = table_body[0]?.map(
            (name3: any, index2: number) => {
              return table_body.map((name4: any) => {
                return name4[index2];
              });
            }
          );
          this.table = table_body2;
          console.log(table_body2);
        }
      }
    }
  }

  back() {
    this.service.setSubMessage(this.previousData);
    this.router.navigate(['/sub-category']);
  }

  next(data: any) {
    this.datas = data;
    const next = this.previousData.sub_category.filter((name: any) => {
      return name.id == data.id + 1;
    });
    const prev = this.previousData.sub_category.filter((name: any) => {
      return name.id == data.id - 1;
    });
    this.nextData = next[0];
    this.prevData = prev[0];
    this.tableData();
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

  ngOnInit(): void {}
}
