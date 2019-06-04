import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { TabSettingsPage } from './tab-settings.page'
import { TranslateModule } from '@ngx-translate/core'
import { ComponentsModule } from '../../components/components.module'

const routes: Routes = [
  {
    path: '',
    component: TabSettingsPage
  }
]

@NgModule({
  imports: [CommonModule, ComponentsModule, FormsModule, IonicModule, RouterModule.forChild(routes), TranslateModule],
  declarations: [TabSettingsPage]
})
export class TabSettingsPageModule {}