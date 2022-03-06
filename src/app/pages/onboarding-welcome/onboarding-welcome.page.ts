import { Component } from '@angular/core'
import { ModalController } from '@ionic/angular'

import { ErrorCategory, handleErrorLocal } from '../../services/error-handler/error-handler.service'
import { VaultStorageKey, VaultStorageService } from '../../services/storage/storage.service'

@Component({
  selector: 'airgap-onboarding-welcome',
  templateUrl: './onboarding-welcome.page.html',
  styleUrls: ['./onboarding-welcome.page.scss']
})
export class OnboardingWelcomePage {
  slideOpts = {
    initialSlide: 0
  }

  disclaimerAccepted: boolean = false

  /**
   * This will be true if the page is opened as a modal from the settings page.
   */
  public isSettingsModal: boolean = false

  constructor(private readonly modalController: ModalController, private readonly storageService: VaultStorageService) {}

  public next() {
    // TODO: Option to show disclaimer

    this.storageService
      .set(VaultStorageKey.DISCLAIMER_INITIAL, true)
      .then(() => {
        this.modalController.dismiss().catch(handleErrorLocal(ErrorCategory.IONIC_MODAL))
      })
      .catch(handleErrorLocal(ErrorCategory.SECURE_STORAGE))
  }
}
