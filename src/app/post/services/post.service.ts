import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/Post.interface';
import { catchError, of } from 'rxjs';

@Injectable()
export class PostService {
  constructor(private _http: HttpClient) {}

  getPosts() {
    return this._http
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        catchError((error) => {
          return of([]);
        })
      );
  }
}
