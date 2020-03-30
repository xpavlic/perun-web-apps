import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepositoryCommitsComponent } from './components/repository-commits/repository-commits.component';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';
import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DefaultOptions } from 'apollo-client';
import { AppConfigService } from '@perun-web-apps/config';
import { StoreService } from '@perun-web-apps/perun/services';
import { GraphanaGraphComponent } from './components/graphana-graph/graphana-graph.component';
import { JednotnePrihlaseniLoginyComponent } from './components/jednotne-prihlaseni-loginy/jednotne-prihlaseni-loginy.component';

export function provideApollo(httpLink: HttpLink, store: StoreService) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const TOKEN = store.get('github_token');

  // Get the authentication token from local storage if it exists
  const auth = setContext((operation, context) => ({
    headers: {
      Authorization: `token ${TOKEN}`
    },
  }));

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri: 'https://api.github.com/graphql' })]);
  const cache = new InMemoryCache();

  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  };

  return {
    link,
    cache,
    defaultOptions
  }
}

const loadConfigs = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppDefaultConfig()
      .then(() => appConfig.loadAppInstanceConfig());
  };
};

@NgModule({
  declarations: [AppComponent, HomePageComponent, RepositoryCommitsComponent, GraphanaGraphComponent, JednotnePrihlaseniLoginyComponent],
  imports: [
    BrowserModule,
    ApolloModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpLinkModule,
    HttpClientModule,
    ChartsModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  providers: [
    {
    provide: APOLLO_OPTIONS,
    useFactory: provideApollo,
    deps: [HttpLink, StoreService]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigs,
      multi: true,
      deps: [AppConfigService]
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
