import { Component, h, State } from '@stencil/core';
import { GouvData } from '../../providers/gouv-data';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @State() reportData: any;

  async componentDidLoad() {
    try {
      this.reportData = await GouvData.getData();
    } catch (err) {
			console.log(err);
    }

    console.log("this.reportData: ", this.reportData);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding"></ion-content>,
    ];
  }
}
