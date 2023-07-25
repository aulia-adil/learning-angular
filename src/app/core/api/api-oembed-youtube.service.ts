import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiOembedYoutubeService {
  private _path: string | null = "http://noembed.com/embed";

  constructor() { }

  getPath() {
    return this._path;
  }
}
