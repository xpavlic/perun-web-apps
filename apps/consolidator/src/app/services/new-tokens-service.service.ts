import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewTokensServiceService {

  private tokens: string[] = [];

  constructor() { }

  addToken(token: string): void {
    this.tokens.push(token);
    console.log('added token: ' + token);
  }

  getTokens(): string[] {
    return this.tokens;
  }
}
