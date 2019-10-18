import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  public infoCity = [];

  constructor(public formService: FormService) {}

  ngOnInit() {
     this.getDataDetails();
  }

  getDataDetails() {
    this.formService.getData()
        .subscribe( data => this.infoCity = data );
        console.log('testing info');
  }
}
