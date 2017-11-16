import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FormsModule }   from '@angular/forms';
import { TaskComponent }  from './todo/task.component';


export const firebaseConfig = {
  apiKey: "AIzaSyA8NPBbRS-mTAnun7G24NgF_lPzhiTmif0",
  authDomain: "extended-vision-64c3e.firebaseapp.com",
  databaseURL: "https://extended-vision-64c3e.firebaseio.com",
  projectId: "extended-vision-64c3e",
  storageBucket: "",
  messagingSenderId: "893367303017"
};

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent, TaskComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }