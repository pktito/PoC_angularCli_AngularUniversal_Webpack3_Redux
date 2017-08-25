import { Injectable } from '@angular/core';

@Injectable()
export class SeriesService {
  constructor() {}

  getSeries(): any {
    let series = [
      {
        'serie' : 'DB',
        'autor' : ' Akira Toriyama',
        'titulo': 'Dragon Ball',
        'tituloOriginal': 'ドラゴンボール',
        'ano' : '1984'
      },
      {
        'serie' : 'DBZ',
        'autor' : ' Akira Toriyama',
        'titulo': 'Dragon Ball Z',
        'tituloOriginal': 'ドラゴンボール',
        'ano' : '1984'
      }
    ];
    return series;
  }
}
