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
  getAnswer(GitQuestion){
    return this.http.post(`https://abf9-111-93-95-94.in.ngrok.io/api/get_git_question`,GitQuestion).pipe(map(rsp => rsp));
  }
  getDocURL(DocUrl){
    return this.http.post(`https://abf9-111-93-95-94.in.ngrok.io/api/get_doc_url`,DocUrl).pipe(map(rsp => rsp));
  }
  getDocAnswer(DocQue){
    return this.http.post(`https://abf9-111-93-95-94.in.ngrok.io//api/get_doc_que_ans`,DocQue).pipe(map(rsp => rsp));
  }
}
