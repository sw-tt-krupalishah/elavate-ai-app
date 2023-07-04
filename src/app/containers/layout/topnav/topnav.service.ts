import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopnavService {

  constructor(private http: HttpClient) { }
  getGitURL(selectedList){
    return this.http.post(`https://abf9-111-93-95-94.in.ngrok.io/api/get_git_url`,selectedList).pipe(map(rsp => rsp));
  }
}
