import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {
industryType : string
  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.industryType = params['key'];
    });
    console.log(this.industryType);
  }

  ngOnInit(): void {
  }

}
