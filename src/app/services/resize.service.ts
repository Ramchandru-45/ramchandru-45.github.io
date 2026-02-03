import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {



  
    public windowSize$: Observable<number> = fromEvent(window, 'resize').pipe(
      startWith(window.innerWidth), // Emit initial size on subscription
      debounceTime(100), // Debounce to prevent excessive updates
      map(() => window.innerWidth),
    );

}

