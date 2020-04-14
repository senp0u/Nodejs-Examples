import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  public technology: Technology = {
    name: "",
    description: "",
    logo: "",
    id: "",
    tags: []
  };
  constructor(private _activatedRouted: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit(): void {
    this._activatedRouted.params.subscribe(params => {
      const id: string = params['id'];
      this._httpService
    .getTechnology(id)
    .subscribe((technologies: Technology) => {
      this.technology = technologies["data"]['0'];
      });
    });
  }

}
