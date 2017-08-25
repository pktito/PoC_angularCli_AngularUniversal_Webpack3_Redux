var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SeriesService } from '../../services/series.service';
var SeriesComponent = (function () {
    function SeriesComponent(seriesService) {
        this.seriesService = seriesService;
        this.series = this.seriesService.getSeries();
        this.title = __assign({}, this.series)[0].titulo;
    }
    SeriesComponent.prototype.ngOnInit = function () { };
    SeriesComponent = __decorate([
        Component({
            selector: 'app-series',
            templateUrl: './series.component.html',
            styleUrls: ['./series.component.css']
        }),
        __metadata("design:paramtypes", [SeriesService])
    ], SeriesComponent);
    return SeriesComponent;
}());
export { SeriesComponent };
