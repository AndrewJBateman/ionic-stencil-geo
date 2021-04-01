class GouvDataController {
  public data: any;

  getData(): any {
    const data = fetch(
      'https://geo.api.gouv.fr/departements/05/communes?fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre',
    ).then(json => json.json());
    return data;
  }
}

export const GouvData = new GouvDataController();
