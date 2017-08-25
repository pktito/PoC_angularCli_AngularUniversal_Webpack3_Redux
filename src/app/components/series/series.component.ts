import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  title   : string;
  series  : any;

  constructor( private seriesService: SeriesService) {
    this.series =   this.seriesService.getSeries();
    this.title  =   {...this.series}[0].titulo;
  }

  ngOnInit() {}
}
