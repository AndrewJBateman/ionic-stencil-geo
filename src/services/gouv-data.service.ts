import { ICommune } from '../interfaces/gouv-data.interface';

class GouvDataController {
  public apiData: ICommune[];

  async load(): Promise<ICommune[]> {
    if (this.apiData) {
      return this.apiData;
    } else {
      return this.apiData;
    }
  }
  async getData() {
    const apiData = fetch(
      'https://geo.api.gouv.fr/departements/05/communes?fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre',
    ).then(response => response.json());
    return apiData;
  }
}

export const GouvDataService = new GouvDataController();
