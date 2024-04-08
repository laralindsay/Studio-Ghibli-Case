/* tslint:disable */
export interface Films {

  /**
   * Description of the film
   */
  description?: string;

  /**
   * Director of the film
   */
  director?: string;

  /**
   * Unique identifier representing a specific film
   */
  id?: string;

  /**
   * Locations found in film
   */
  locations?: Array<string>;

  /**
   * Original title of the film
   */
  original_title?: string;

  /**
   * Orignal title in romanised form
   */
  original_title_romanised?: string;

  /**
   * People found in film
   */
  people?: Array<string>;

  /**
   * Producer of the film
   */
  producer?: string;

  /**
   * Release year of film
   */
  release_date?: string;

  /**
   * Rotten Tomato score of film
   */
  rt_score?: string;

  /**
   * Running time of the film in minutes
   */
  running_time?: string;

  /**
   * Species found in film
   */
  species?: Array<string>;

  /**
   * Title of the film
   */
  title?: string;

  /**
   * URL of film
   */
  url?: string;

  /**
   * Vehicles found in film
   */
  vehicles?: Array<string>;
}
