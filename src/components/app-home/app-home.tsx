import { Component, ComponentDidLoad, h, State } from '@stencil/core';
import { GouvDataService } from '../../services/gouv-data.service';
import { ICommune } from '../../interfaces/gouv-data.interface';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome implements ComponentDidLoad {
  @State() reportData: ICommune[] = [];

  async componentDidLoad() {
    try {
      const reportData = await GouvDataService.getData();
      return reportData;
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-grid>
          <ion-row>
            <ion-col>
              <div>1 of 3</div>
            </ion-col>
            <ion-col>
              <div>2 of 3</div>
            </ion-col>
            <ion-col>
              <div>3 of 3</div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
