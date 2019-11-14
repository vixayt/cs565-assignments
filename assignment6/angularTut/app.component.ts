import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: `
    <h1> Hello I'm an Angular app!</h1>
    <h2> Very soon you will learn how to create and bootstrap me!
  `
})
export class AppComponent {}

/*
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello MewTube!</h1>`
})
export class AppComponent {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ HelloWorldComponent ],
  bootstrap: [ HelloWorldComponent ],
})
export class AppModule {}
*/
