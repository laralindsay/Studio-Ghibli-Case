/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Species } from '../models/species';
@Injectable({
  providedIn: 'root',
})
class SpeciesService extends __BaseService {
  static readonly getSpeciesPath = '/species';
  static readonly getSpeciesIdPath = '/species/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Species
   *
   * The Species endpoint returns information about all of the Studio Ghibli species. This includes humans, animals, and spirits et al.
   * @param params The `SpeciesService.GetSpeciesParams` containing the following parameters:
   *
   * - `limit`: amount of results (default 50) (maximum 250)
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return An array of species
   */
  getSpeciesResponse(params: SpeciesService.GetSpeciesParams): __Observable<__StrictHttpResponse<Array<Species>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/species`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Species>>;
      })
    );
  }
  /**
   * Species
   *
   * The Species endpoint returns information about all of the Studio Ghibli species. This includes humans, animals, and spirits et al.
   * @param params The `SpeciesService.GetSpeciesParams` containing the following parameters:
   *
   * - `limit`: amount of results (default 50) (maximum 250)
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return An array of species
   */
  getSpecies(params: SpeciesService.GetSpeciesParams): __Observable<Array<Species>> {
    return this.getSpeciesResponse(params).pipe(
      __map(_r => _r.body as Array<Species>)
    );
  }

  /**
   * Species ID
   *
   * Returns an individual species
   * @param params The `SpeciesService.GetSpeciesIdParams` containing the following parameters:
   *
   * - `id`: film `id`
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return A single species is returned
   */
  getSpeciesIdResponse(params: SpeciesService.GetSpeciesIdParams): __Observable<__StrictHttpResponse<Array<Species>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/species/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Species>>;
      })
    );
  }
  /**
   * Species ID
   *
   * Returns an individual species
   * @param params The `SpeciesService.GetSpeciesIdParams` containing the following parameters:
   *
   * - `id`: film `id`
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return A single species is returned
   */
  getSpeciesId(params: SpeciesService.GetSpeciesIdParams): __Observable<Array<Species>> {
    return this.getSpeciesIdResponse(params).pipe(
      __map(_r => _r.body as Array<Species>)
    );
  }
}

module SpeciesService {

  /**
   * Parameters for getSpecies
   */
  export interface GetSpeciesParams {

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
   * Parameters for getSpeciesId
   */
  export interface GetSpeciesIdParams {

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

export { SpeciesService }
