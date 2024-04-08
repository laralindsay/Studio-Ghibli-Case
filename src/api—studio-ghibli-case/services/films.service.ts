/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Films } from '../models/films';
@Injectable({
  providedIn: 'root',
})
class FilmsService extends __BaseService {
  static readonly getFilmsPath = '/films';
  static readonly getFilmsIdPath = '/films/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Return all films
   *
   * The Films endpoint returns information about all of the Studio Ghibli films.
   * @param params The `FilmsService.GetFilmsParams` containing the following parameters:
   *
   * - `limit`: amount of results (default 50) (maximum 250)
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return An array of films
   */
  getFilmsResponse(params: FilmsService.GetFilmsParams): __Observable<__StrictHttpResponse<Array<Films>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/films`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Films>>;
      })
    );
  }
  /**
   * Return all films
   *
   * The Films endpoint returns information about all of the Studio Ghibli films.
   * @param params The `FilmsService.GetFilmsParams` containing the following parameters:
   *
   * - `limit`: amount of results (default 50) (maximum 250)
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return An array of films
   */
  getFilms(params: FilmsService.GetFilmsParams): __Observable<Array<Films>> {
    return this.getFilmsResponse(params).pipe(
      __map(_r => _r.body as Array<Films>)
    );
  }

  /**
   * Film ID
   *
   * Returns a film based on a single ID
   * @param params The `FilmsService.GetFilmsIdParams` containing the following parameters:
   *
   * - `id`: film `id`
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return A single film is returned
   */
  getFilmsIdResponse(params: FilmsService.GetFilmsIdParams): __Observable<__StrictHttpResponse<Array<Films>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/films/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Films>>;
      })
    );
  }
  /**
   * Film ID
   *
   * Returns a film based on a single ID
   * @param params The `FilmsService.GetFilmsIdParams` containing the following parameters:
   *
   * - `id`: film `id`
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return A single film is returned
   */
  getFilmsId(params: FilmsService.GetFilmsIdParams): __Observable<Array<Films>> {
    return this.getFilmsIdResponse(params).pipe(
      __map(_r => _r.body as Array<Films>)
    );
  }
}

module FilmsService {

  /**
   * Parameters for getFilms
   */
  export interface GetFilmsParams {

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
   * Parameters for getFilmsId
   */
  export interface GetFilmsIdParams {

    /**
     * film `id`
     */
    id: string;

    /**
     * comma-separated list of fields to include in the response
     */
    fields?: string;
  }
}

export { FilmsService }
