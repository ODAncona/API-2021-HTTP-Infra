import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from './interface';
import { API_URL } from './interface';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private apiUrl = API_URL + 'team/';
  private auth = 'Bearer ' + localStorage.getItem('token');
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.auth,
    }),
  };
  constructor(private http: HttpClient) {}
  /**
   * Create a
   * @param member to the database
   * @returns an observable
   */
  createMember(member: Member) {
    return this.http.post<Member>(this.apiUrl, member, this.httpOptions);
  }

  /**
   * @returns an observable containing all member[]
   */
  getAllMembers() {
    return this.http.get<Member[]>(this.apiUrl, this.httpOptions);
  }

  /**
   * Update the current
   * @param member to the database
   * @returns an observable
   */
  updateMember(member: Member) {
    const formData = new FormData();
    Object.keys(member).forEach((key) =>
      formData.append(key, member[key as keyof Member])
    );
    
    const httpOptions = {
      headers: new HttpHeaders({
        enctype: 'multipart/form-data',
        Authorization: this.auth,
      }),
    };
    return this.http.put<any>(this.apiUrl, formData, httpOptions);
  }

  /**
   * Delete the member defined by his
   * @param memberId
   * @returns an observable
   */
  deleteMember(memberId: string) {
    let url = this.apiUrl + memberId;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
