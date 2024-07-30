import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { AranzmanService } from '../services/aranzman.service';
import { Aranzman } from '../models/aranzman';
import { ShareService } from '../services/shared/share.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

constructor(private userService: UserService,private aranzmanService:AranzmanService, private shareService: ShareService){}

buttonClick = true;


userData:any;
userAranzmani:Aranzman[]=[];

localAranzmani:Aranzman[] = [];

ngOnInit(): void{

  this.getUserInfo();
  this.fetchUserAranzmani();


  if(this.shareService.getAranzman()!=null){
  this.localAranzmani = this.shareService.getAranzman();
    
}
}

getUserInfo(){
  this.userService.getProfile().subscribe(
    (res) => {
      this.userData=res;
      console.log(res);
    }
  )
}



fetchUserAranzmani(): void {
  
  this.aranzmanService.getAranzmaniUser().subscribe(
  (data) => {

    this.userAranzmani = data;
    console.log(this.userAranzmani);
  },
  (error) => {
    console.log("Error fetching brosure:",error);
  }



  );




}



onAddToCart() {}
onRemoveFromCart(){}

}



