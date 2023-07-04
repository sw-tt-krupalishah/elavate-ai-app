import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeatureService } from './feature.service';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {
// industryType : string
moduleList = [];
selectedmodules = [];
disableFeature = true;
disablegithub = true;
  constructor(private route: ActivatedRoute,private featureSerive: FeatureService) { 
  }
  @Input()
  industrytype : string;
  @Input() IndustryTitle : string;
  @Input() IndustryDescription : string;
  ngOnInit(): void {
  
    this.moduleList = this.featureSerive.getModuleList(this.industrytype);
  }

ngOnChanges(changes: SimpleChanges) { 
  this.moduleList = this.featureSerive.getModuleList(changes.industrytype.currentValue);
}
  moduleChecked(event){
  }
  onChange(checked, item){
    this.disableFeature = false;
    if(checked){
      this.selectedmodules.push({module: item.module});
      } else {
        this.selectedmodules.splice(this.selectedmodules.indexOf(item), 1)
      }
  }
  onChangeFeature(checked, item,supply){
      for(let i=0;i<this.selectedmodules.length;i++){
        if(this.selectedmodules[i]["module"] == supply.module) {
          if(this.selectedmodules[i].feature && this.selectedmodules[i].feature.indexOf(item)){
            if(checked) {
              this.selectedmodules[i].feature.push(item);
            } else {
              if(this.selectedmodules[i].feature.indexOf(item)){
                this.selectedmodules[i].feature.splice(this.selectedmodules[i].feature.indexOf(item), 1)
              }
            }
          }
          else{
            this.selectedmodules[i].feature = [];
            this.selectedmodules[i].feature.push(item);
          }
        }
      }
    
  }
  createAppClicked(){
    this.featureSerive.getApp({"supplyChain" : this.selectedmodules}).subscribe(data => {});
  }

}
