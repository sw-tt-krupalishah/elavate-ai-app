import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function importData() {
      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = _ => {
        // you can use this method to get file and perform respective operations
                let files =   Array.from(input.files);
                console.log(files);
            };
      input.click();
      
    }
  }
}
