import { Injectable } from '@angular/core';
import { RequestAction, RequestActionType, RequestAvailability, RequestSort, RequestStatus, RequestType } from 'src/models/requests';
import { ToastType } from 'src/models/toast';
import { ApiService } from './api.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private api: ApiService,
    private toast: ToastService
  ) { }

  public list(
    type: RequestType = RequestType.MOVIE,
    count: number = 10, 
    position: number = 0,
    sort: RequestSort = RequestSort.REQUEST_DATE_DESC,
    status: RequestStatus = RequestStatus.NO_FILTER,
    availability: RequestAvailability = RequestAvailability.NO_FILTER
  ) {
    return this.api.get(`/Request/${type}/${count}/${position}/${sort}/${status}/${availability}`, {}, {});
  }

  public search(
    type: RequestType = RequestType.MOVIE,
    term: string
  ) {
    return this.api.get(`/Request/${type}/search/${term}`, {}, {});
  }

  public request(type: RequestActionType, id: number) {
    return this.api.post(`/Request/${type}`, {}, this.requestBody(type, id))
            .then((res) => this.toast.show(res.isError ? ToastType.ERROR : ToastType.SUCCESS, res[res.isError ? 'errorMessage': 'message']));
  }

  public deny(type: RequestActionType, id: number = 0): Promise<any> {
    return this.performAction(RequestAction.DENY, type, id);
  }

  public approve(type: RequestActionType, id: number = 0): Promise<any> {
    return this.performAction(RequestAction.APPROVE, type, id);
  }

  private performAction(action: RequestAction, type: RequestActionType, id: number = 0) {
    return this.api.put(`/Request/${type}/${action}`, {}, {id: id})
            .then(() => this.toast.show(ToastType.SUCCESS, `Successfully ${action == RequestAction.APPROVE ? 'approved' : 'denied'} request`));
  }

  private requestBody(type: RequestActionType, id: number) {
    return type == RequestActionType.MOVIE ?
          {"theMovieDbId": id,"languageCode": "en"}
          : {"firstSeason": false, "latestSeason": false, "requestAll": true, "tvDbId": id}
  }
}
