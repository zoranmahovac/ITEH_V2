import { Component, Input, OnInit } from '@angular/core';
import { AranzmanService } from '../services/aranzman.service';
import { Aranzman } from '../models/aranzman';
import { Router } from '@angular/router';
import { ShareService } from '../services/shared/share.service';

@Component({
  selector: 'app-aranzman',
  templateUrl: './aranzman.component.html',
  styleUrl: './aranzman.component.scss'
})
export class AranzmanComponent implements OnInit {

//@Input() aranzmani: Aranzman[]=[];
aranzmani: Aranzman[] = [];

buttonClick=true;

@Input() aranzman: Aranzman;
constructor(private aranzmanService: AranzmanService, private router:Router, private shareService:ShareService){}

//u vreme incijializacije stranice
ngOnInit(){

this.fetchAranzmani();


}




fetchAranzmani(): void {

  this.aranzmanService.getAranzmani().subscribe(
  (data) => {

    this.aranzmani = data;
    console.log(this.aranzmani);
  },
  (error) => {
    console.log("Error fetching aranzmani:",error);
  });
}


onAddToCart(aranzman:Aranzman) {

  if(!localStorage.getItem('token')){
    this.router.navigate(['/login']); 
    return;
  }


  if(aranzman.br_mesta > 0){
    //console.log(aranzman);
    aranzman.br_mesta--;
    this.shareService.setAranzman(aranzman);
    this.router.navigate(['/profile']); 

  }

  for( const a of this.aranzmani){
    console.log(a);
  }
}

onRemoveFromCart(aranzman:Aranzman) {
  aranzman.br_mesta++;

  for( const a of this.aranzmani){
    console.log(a);
  }
}










}
