/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { People } from '../models/people';
@Injectable({
  providedIn: 'root',
})
class PeopleService extends __BaseService {
  static readonly getPeoplePath = '/people';
  static readonly getPeopleIdPath = '/people/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Return all people
   *
   * The People endpoint returns information about all of the Studio Ghibli people. This broadly includes all Ghibli characters, human and non-.
   * @param params The `PeopleService.GetPeopleParams` containing the following parameters:
   *
   * - `limit`: amount of results (default 50) (maximum 250)
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return An array of people
   */
  getPeopleResponse(params: PeopleService.GetPeopleParams): __Observable<__StrictHttpResponse<Array<People>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/people`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<People>>;
      })
    );
  }
  /**
   * Return all people
   *
   * The People endpoint returns information about all of the Studio Ghibli people. This broadly includes all Ghibli characters, human and non-.
   * @param params The `PeopleService.GetPeopleParams` containing the following parameters:
   *
   * - `limit`: amount of results (default 50) (maximum 250)
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return An array of people
   */
  getPeople(params: PeopleService.GetPeopleParams): __Observable<Array<People>> {
    return this.getPeopleResponse(params).pipe(
      __map(_r => _r.body as Array<People>)
    );
  }

  /**
   * People ID
   *
   * Returns a person based on a single ID
   * @param params The `PeopleService.GetPeopleIdParams` containing the following parameters:
   *
   * - `id`: person `id`
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return A single person is returned
   */
  getPeopleIdResponse(params: PeopleService.GetPeopleIdParams): __Observable<__StrictHttpResponse<Array<People>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/people/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<People>>;
      })
    );
  }
  /**
   * People ID
   *
   * Returns a person based on a single ID
   * @param params The `PeopleService.GetPeopleIdParams` containing the following parameters:
   *
   * - `id`: person `id`
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return A single person is returned
   */
  getPeopleId(params: PeopleService.GetPeopleIdParams): __Observable<Array<People>> {
    return this.getPeopleIdResponse(params).pipe(
      __map(_r => _r.body as Array<People>)
    );
  }
}

module PeopleService {

  /**
   * Parameters for getPeople
   */
  export interface GetPeopleParams {

    /**
     * amount of results (default 50) (maximum 250)
     */
    limit?: number;

    /**
     * comma-separated list of fields to include in the response
     */
    fields?: string;
  }

  /**
   * Parameters for getPeopleId
   */
  export interface GetPeopleIdParams {

    /**
     * person `id`
     */
    id: string;

    /**
     * comma-separated list of fields to include in the response
     */
    fields?: string;
  }
}

export { PeopleService }
