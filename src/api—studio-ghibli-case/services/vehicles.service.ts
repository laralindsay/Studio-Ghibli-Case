/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Vehicles } from '../models/vehicles';
@Injectable({
  providedIn: 'root',
})
class VehiclesService extends __BaseService {
  static readonly getVehiclesPath = '/vehicles';
  static readonly getVehiclesIdPath = '/vehicles/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Vehicles
   *
   * The Vehicles endpoint returns information about all of the Studio Ghibli vechiles. This includes cars, ships, and planes.
   * @param params The `VehiclesService.GetVehiclesParams` containing the following parameters:
   *
   * - `limit`: amount of results (default 50) (maximum 250)
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return An array of vehicles
   */
  getVehiclesResponse(params: VehiclesService.GetVehiclesParams): __Observable<__StrictHttpResponse<Array<Vehicles>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vehicles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Vehicles>>;
      })
    );
  }
  /**
   * Vehicles
   *
   * The Vehicles endpoint returns information about all of the Studio Ghibli vechiles. This includes cars, ships, and planes.
   * @param params The `VehiclesService.GetVehiclesParams` containing the following parameters:
   *
   * - `limit`: amount of results (default 50) (maximum 250)
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return An array of vehicles
   */
  getVehicles(params: VehiclesService.GetVehiclesParams): __Observable<Array<Vehicles>> {
    return this.getVehiclesResponse(params).pipe(
      __map(_r => _r.body as Array<Vehicles>)
    );
  }

  /**
   * Vehicle ID
   *
   * An individual vehicle
   * @param params The `VehiclesService.GetVehiclesIdParams` containing the following parameters:
   *
   * - `id`: film `id`
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return A single vehicle is returned
   */
  getVehiclesIdResponse(params: VehiclesService.GetVehiclesIdParams): __Observable<__StrictHttpResponse<Array<Vehicles>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vehicles/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Vehicles>>;
      })
    );
  }
  /**
   * Vehicle ID
   *
   * An individual vehicle
   * @param params The `VehiclesService.GetVehiclesIdParams` containing the following parameters:
   *
   * - `id`: film `id`
   *
   * - `fields`: comma-separated list of fields to include in the response
   *
   * @return A single vehicle is returned
   */
  getVehiclesId(params: VehiclesService.GetVehiclesIdParams): __Observable<Array<Vehicles>> {
    return this.getVehiclesIdResponse(params).pipe(
      __map(_r => _r.body as Array<Vehicles>)
    );
  }
}

module VehiclesService {

  /**
   * Parameters for getVehicles
   */
  export interface GetVehiclesParams {

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
   * Parameters for getVehiclesId
   */
  export interface GetVehiclesIdParams {

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

export { VehiclesService }
