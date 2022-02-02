import { Component, ComponentDidLoad, h, Prop } from '@stencil/core';
import { GouvDataService } from '../../services/gouv-data.service';
import { ICommune } from '../../interfaces/gouv-data.interface';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome implements ComponentDidLoad {
  @Prop() reportData: ICommune[] = [];

  async componentDidLoad() {
    try {
      this.reportData = await GouvDataService.getCommuneData();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar color="secondary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>List of French Communes</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true} class="ion-padding">
        <ion-grid fixed>
          <ion-row>
            {this.reportData.map(data => (
              <ion-col size="12" size-md="6">
                <ion-card class="data-card">
                  <ion-card-header color="primary">
                    <h2>{data.nom}</h2>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-label>
                      <p>Region: {data.codeRegion}</p>
                      <p>Department: {data.codeDepartement}</p>
                      <p>Population: {data.population}</p>
                      <p>Postcodes: {data.codesPostaux[0]}</p>
                    </ion-label>
                  </ion-card-content>
                </ion-card>
              </ion-col>
            ))}
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
