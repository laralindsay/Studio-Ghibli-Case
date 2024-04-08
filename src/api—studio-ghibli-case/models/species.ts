/* tslint:disable */
export interface Species {

  /**
   * Classification of the species
   */
  classification?: string;

  /**
   * Eye color of the species
   */
  eye_color?: string;

  /**
   * Array of films the species appears in
   */
  films?: Array<string>;

  /**
   * Hair color of the species
   */
  hair_color?: string;

  /**
   * Unique identifier representing a specific species
   */
  id?: string;

  /**
   * Name of the species
   */
  name?: string;

  /**
   * People belonging to the species
   */
  people?: Array<string>;

  /**
   * Unique url of the species
   */
  url?: string;
}
