import { Component } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.0.component.html',
  styleUrls: ['./header2.0.component.css'],
})
export class Header20Component {
  menu() {
    // document.getElementById("frame1")?.style.visibility="visible";
    document.getElementById('frame1')?.classList.add('style');
    // (document.getElementById("frame1") as HTMLElement)?.style.visibility = "visible";
    const frame1 = document.getElementById('frame1');
    if (frame1 !== null) {
      frame1.style.visibility = 'visible';
    }
  }
  remove() {
    document.getElementById('frame1')?.classList.remove('style');
    // document.getElementById("frame1")?.style.visibility="visible"
    const frame1 = document.getElementById('frame1') as HTMLElement | null;
    if (frame1 !== null) {
      frame1.style.visibility = 'hidden';
    }
  }
}
