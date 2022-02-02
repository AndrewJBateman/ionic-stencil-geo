import { ICommune } from '../interfaces/gouv-data.interface';

class GouvDataController {
  apiData: ICommune[];

  async load(): Promise<ICommune[]> {
    if (this.apiData) {
      return this.apiData;
    } else {
      return this.apiData;
    }
  }
  async getCommuneData() {
    try {
      let response = await fetch(
        'https://geo.api.gouv.fr/departements/05/communes?fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre',
      )
      this.handleErrors(response);
      const apiData = await response.json();
      console.log('API data: ', apiData);
      return apiData;
    } catch (err) {
      console.log(err);
    }
  }

  handleErrors(response: Response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  }
}

export const GouvDataService = new GouvDataController();
