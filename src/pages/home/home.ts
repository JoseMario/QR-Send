import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	layoutType : {};
	scanData : {};
	options :BarcodeScannerOptions;

  constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner) {
  	this.layoutType = {
  		"TD" : "Tarjeta de débito",
  		"TC" : "Tarjeta de crédito",
  		"CL" : "CLABE interbancaria",
  		"00012" : "BBVA Bancomer",
  		"MX" : "México"
  	};
  }

  scan(){
    this.options = {
      prompt : "Primero una disculpa, pero scannea tu QR!!"
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      this.scanData = JSON.parse(barcodeData["text"]);
    }, (err) => {
        console.log("Error occured : " + err);
    });         
	}    

}
