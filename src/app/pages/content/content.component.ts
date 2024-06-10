import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {dataFake} from "../../../../dataFake/dataFake";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  private id: string | null = "0";
  photoCover:string="";
  contentTitle:string="";
  contentData:string="";
  contentDescription:string="";
  contentText:string=""

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const result = dataFake
      .filter(a => a.id.toString() == id)[0]

      this.photoCover = result.photo
      this.contentTitle = result.title
      this.contentData = result.data
      this.contentDescription = result.description
      this.contentText = result.text

  }

}
