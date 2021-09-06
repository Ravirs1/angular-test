import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details/details.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  data = {
    name: '',
    job: ''
  };

  constructor(private readonly detailService: DetailsService) { }

  ngOnInit(): void {
  }
  addData() {
    if(!this.data.name) {
      alert('Please provide name');
      return;
    } else if(!this.data.job) {
      alert('Please provide job');
      return;
    } else {
      this.detailService.addData(this.data).subscribe((res) => {
        alert('data add successfully');
      },err => console.log(err))
    }

  }
}
