/* tslint:disable */
export interface Locations {

  /**
   * Climate of location
   */
  climate?: string;

  /**
   * Array of films the location appears in
   */
  films?: Array<string>;

  /**
   * Unique identifier representing a specific location
   */
  id?: string;

  /**
   * Name of location
   */
  name?: string;

  /**
   * Array of residents in location
   */
  residents?: Array<string>;

  /**
   * Percent of location covered in water
   */
  surface_water?: string;

  /**
   * Terrain type of location
   */
  terrain?: string;

  /**
   * Individual URL of the location
   */
  url?: string;
}
