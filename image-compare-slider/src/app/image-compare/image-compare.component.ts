import { Component, ElementRef, ViewChild, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-image-compare',
  templateUrl: './image-compare.component.html',
  styleUrls: ['./image-compare.component.css']
})
export class ImageCompareComponent implements OnInit {

  public move = false;
  public scrollerWidth;
  public afterImageWidth;
  public beforeImageWidth;
  public afterImage;
  public color;
  @Input() ImageOne: string;
  @Input() ImageTwo: string;
  @ViewChild('wrapped') wrapperReference: ElementRef;

  constructor() { }

  ngOnInit() {

    this.slide(200);
    this.compare();
  }
  compare() {
    this.beforeImageWidth = <HTMLElement>document.querySelector('#befores');
    this.afterImage = <HTMLElement>document.querySelector('#afters');
    this.afterImage.style.width = (this.wrapperReference.nativeElement.offsetWidth) + 'px';
    this.beforeImageWidth.style.width = (this.wrapperReference.nativeElement.offsetWidth ) + 'px';

    document.querySelector('.scroller').addEventListener('mousedown', this.mousedown);
    document.addEventListener('mouseup', this.mouseup);
    document.addEventListener('mouseleave', this.mouseleave);
    document.addEventListener('mousemove', this.mousemove);

    document.querySelector('.scroller').addEventListener('touchstart', this.mousedown);
    document.addEventListener('touchend', this.mouseleave);
    document.addEventListener('touchcancel', this.mouseleave);

  }

  @HostListener('mousedown', ['$event'])
  mousedown(event) {
    event.preventDefault();
    this.move = true;
    this.color = <HTMLElement>document.querySelector('.scroller');
    this.color.style.background = '#5708aa';
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.move = false;
  }

  @HostListener('mousemove', ['$event'])
  mousemove(event) {
    if (!this.move) {
      return;
    }

    const x = event.pageX - document.querySelector('.wrapper').getBoundingClientRect().left;
    this.slide(x);

  }

  @HostListener('mouseup')
  mouseup() {
    this.move = false;
    this.color.style.background = 'grey';
  }

  slide(x) {
    const transform = Math.max(0, (Math.min(x, this.wrapperReference.nativeElement.offsetWidth)));
    this.afterImageWidth = <HTMLElement>document.querySelector('.afterImage');
    this.scrollerWidth = <HTMLElement>document.querySelector('.scroller');
    this.afterImageWidth.style.width = (transform ) + 'px';
    this.scrollerWidth.style.left = (transform - 25 )   + 'px';
  }

}
