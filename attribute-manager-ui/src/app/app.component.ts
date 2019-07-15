import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { defaultLanguage } from './core/models/translate.model';
import { EN } from '../assets/i18n/en';

import { LoadingIndicatorService } from './core/service/loading-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  isLoading = false;

  constructor(private translateService: TranslateService,
              private loadingIndicatorService: LoadingIndicatorService) {
    loadingIndicatorService.onLoadingChanged.subscribe(isLoading => setTimeout(()=> this.isLoading = isLoading, 0));

    translateService.setDefaultLang(defaultLanguage);
    translateService.setTranslation('en', EN);
    translateService.use('en');
  }
}
