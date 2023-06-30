import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-industry-options-list",
  templateUrl: "./industry-options-list.component.html",
  styleUrls: ["./industry-options-list.component.scss"],
})
export class IndustryOptionsListComponent implements OnInit {
  displayMode = "image";
  data = [
    {
      id: 18,
      img: "/assets/img/e-commerce.jpg",
      title: "e-commerce",
    },
    {
      id: 18,
      img: "/assets/img/food.jpg",
      title: "Food",
    },
    {
      id: 18,
      img: "/assets/img/e-commerce.jpg",
      title: "Health",
    },
    {
      id: 18,
      img: "/assets/img/e-commerce.jpg",
      title: "customized ",
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.loadData()
  }
  // loadData() {}
  changeDisplayMode(mode) {
    this.displayMode = mode;
  }
  // if (this.searchKey && this.searchKey.length > 1) {
  //   this.router.navigate(['/app/pages/miscellaneous/search'], { queryParams: { key: this.searchKey.toLowerCase().trim() } });
  //   this.searchKey = '';
  // }
  onIndustrySelect(industry) {
    // this.router.navigate(['/app/pages/feature']);
    console.log(industry);
    if (industry) {
      this.router.navigate(["/app/pages/feature"], {
        queryParams: { key: industry.title.toLowerCase().trim() },
      });
    }
  }
}
