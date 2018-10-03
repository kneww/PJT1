import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Doc1Page } from '../doc1/doc1';
import { Doc2Page } from '../doc2/doc2';
import { Doc3Page } from '../doc3/doc3';

/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2Page');
  }
go1(){
  this.navCtrl.push(Doc1Page);

 }
go2(){
  this.navCtrl.push(Doc2Page);

 }
go3(){
  this.navCtrl.push(Doc3Page);

 }
}
