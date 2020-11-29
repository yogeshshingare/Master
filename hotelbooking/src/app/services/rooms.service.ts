import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  //API integration to get all agreements base on publisher uid
  getRooms(requestPayload: any) {
    return this.http.post(environment.baseUrl + '/rooms', requestPayload).pipe(map((response: Response) => {
      return response;
    }));
  }

  // getJsonFileData(fileName) {
  //   return this.http.get('../../assets/json_data_files/' + fileName);
  // }

  // //API integration to update agreement detail
  // updateAgreementDetail(requestPayload: any) {
  //   return this.http.put(environment.baseUrl + '/agreements', requestPayload).pipe(map((response: Response) => {
  //     return response;
  //   }));
  // }

  // //API integration to create agreement detail
  // createNewAgreement(requestPayload: any) {
  //   return this.http.post(environment.baseUrl + '/agreements', requestPayload).pipe(map((response: Response) => {
  //     return response;
  //   }));
  // }
}
