import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dataObj: any = [];
  
  constructor(private readonly route: ActivatedRoute,
    private readonly detailService: DetailsService,
    private readonly router: Router) { }

  ngOnInit(): void {
     this.detailService.getPostDetails().subscribe(response => {
      console.log(response);
      this.dataObj = response.slice(0,20);
    }, error => {
     alert(error);
    });
  }

  addData() {
    this.router.navigate(['add-data']);
  }

}
