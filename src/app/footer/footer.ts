import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  email: string = '';
  consent: boolean = false;
  copyrightYear = new Date().getFullYear();

  onSubscribe() {
    if (this.email && this.consent) {
      console.log('Email iscritta:', this.email);
      alert('Grazie per esserti iscritto alla newsletter!');
      this.email = '';
      this.consent = false;
    }
  }

}
