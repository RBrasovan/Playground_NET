import { Component, OnInit } from '@angular/core';
import { faSkullCrossbones, faBookDead, faSkull, faCoins } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-bootstrap-home',
  templateUrl: './bootstrap-home.component.html',
  styleUrls: ['./bootstrap-home.component.css']
})
export class BootstrapHomeComponent implements OnInit {
  title='booty';
  faGem = faGem;
  faCrossbones = faSkullCrossbones;
  faBookDead = faBookDead;
  faSkull = faSkull;
  faCoins = faCoins;

  constructor() { }

  ngOnInit(): void {
  }

  noWhere() {
    alert('This goes nowhere, mate.');
  }

  noBooty() {
    alert('No booty for you.');
  }

}
