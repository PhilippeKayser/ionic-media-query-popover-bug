import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverContentComponent } from './popover-content/popover-content.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private readonly _popoverController: PopoverController) {}

    async openPopover(event) {
        const popover = await this._popoverController.create({
            component: PopoverContentComponent,
        });
    
        popover.present();
    }

}
