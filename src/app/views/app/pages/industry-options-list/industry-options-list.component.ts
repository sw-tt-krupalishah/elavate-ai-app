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
      title: "Supply chain",
      module : "SupplyChainModuleLIst"
    },
    {
      id: 18,
      img: "/assets/img/hack-img/Ai.png",
      title: "Artificial Intelligence(AI) and Machine Learning(ML)",
      module : "AIMLModuleList"
    },
    {
      id: 18,
      img: "/assets/img/fintech.png",
      title: "Financial Technology (FinTech)",
    },
    {
      id: 18,
      img: "/assets/img/hack-img/1.jpg",
      title: "HealthTech",
    },
    {
      id: 18,
      img: "/assets/img/hack-img/cyber-security.png",
      title: "Cybersecurity",
    },
    {
      id: 18,
      img: "/assets/img/hack-img/renewable.png",
      title: "Renewable Energy",
    },
    {
      id: 18,
      img: "/assets/img/hack-img/ed-tech.png",
      title: "EdTech",
    },
    {
      id: 18,
      img: "/assets/img/e-commerce.jpg",
      title: "Virtual and Augmented Reality",
    },
    {
      id: 18,
      img: "/assets/img/e-commerce.jpg",
      title: "Transportation and Logistics",
    },
    {
      id: 18,
      img: "/assets/img/e-commerce.jpg",
      title: "Remote Work and Collaboration",
    },
    {
      id: 18,
      img: "/assets/img/e-commerce.jpg",
      title: "customized",
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
        queryParams: { key: industry.title},
      });
    }
  }
}
