import { Component } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  specialtyPage : boolean;
  event$;
  title = 'app';

  constructor(private router: Router) {
    this.event$
      =this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                if(event.url.includes("bootstrap-ship")) {
                  this.specialtyPage = true;
                }
                else {
                  this.specialtyPage = false;
                }
              }
            });
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}
