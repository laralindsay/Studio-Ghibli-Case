/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Locations } from '../models/locations';
@Injectable({
  providedIn: 'root',
})
class LocationsService extends __BaseService {
  static readonly getLocationsPath = '/locations';
  static readonly getLocationsIdPath = '/locations/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Return all locations
   *
   * The Locations endpoint returns information about all of the Studio Ghibli locations. This broadly includes lands, countries, and places.
   * @param params The `LocationsService.GetLocationsParams` containing the following parameters:
   *
   * - `limit`: amount of results (default 50) (maximum 250)
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return An array of locations
   */
  getLocationsResponse(params: LocationsService.GetLocationsParams): __Observable<__StrictHttpResponse<Array<Locations>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/locations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Locations>>;
      })
    );
  }
  /**
   * Return all locations
   *
   * The Locations endpoint returns information about all of the Studio Ghibli locations. This broadly includes lands, countries, and places.
   * @param params The `LocationsService.GetLocationsParams` containing the following parameters:
   *
   * - `limit`: amount of results (default 50) (maximum 250)
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return An array of locations
   */
  getLocations(params: LocationsService.GetLocationsParams): __Observable<Array<Locations>> {
    return this.getLocationsResponse(params).pipe(
      __map(_r => _r.body as Array<Locations>)
    );
  }

  /**
   * Location ID
   *
   * Returns an individual location.
   * @param params The `LocationsService.GetLocationsIdParams` containing the following parameters:
   *
   * - `id`: location `id`
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return A single location is returned
   */
  getLocationsIdResponse(params: LocationsService.GetLocationsIdParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/locations/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Location ID
   *
   * Returns an individual location.
   * @param params The `LocationsService.GetLocationsIdParams` containing the following parameters:
   *
   * - `id`: location `id`
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return A single location is returned
   */
  getLocationsId(params: LocationsService.GetLocationsIdParams): __Observable<{}> {
    return this.getLocationsIdResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module LocationsService {

  /**
   * Parameters for getLocations
   */
  export interface GetLocationsParams {

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
   * Parameters for getLocationsId
   */
  export interface GetLocationsIdParams {

    /**
     * location `id`
     */
    id: string;

    /**
     * comma-separated list of fields to include in the response
     */
    fields?: string;
  }
}

export { LocationsService }
