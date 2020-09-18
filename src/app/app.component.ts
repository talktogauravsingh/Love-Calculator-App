import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Love Calculator App';
  public lvpercent :string;

  onClickSubmit(loverDetails : { yname:string, pname:string }){

      var yname = loverDetails.yname.replace(/\s/g, "").length;
      var pname = loverDetails.pname.replace(/\s/g, "").length;

      if(yname >=10){
        alert("Yname length exceeds from 9");
        yname = Math.round(yname/2);
      }
      
      if(pname >=10){
        alert("Pname length exceeds from 9");
        pname = Math.round(pname/2);
      }

      this.lvpercent = `${yname}` + pname + "%";

  }

}
