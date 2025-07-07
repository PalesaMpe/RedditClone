import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { CarouselItemDirective } from './carousel-item.directive';
import {
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  animate,
  style,
} from '@angular/animations';

@Directive({
  selector: '.carousel-item',
})
export class CarouselItemElement { }

@Component({
  standalone: true,
  imports: [CommonModule, MaterialModule],
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective)
  items!: QueryList<CarouselItemDirective>;
  @ViewChildren('carouselItem', { read: ElementRef })
  private itemsElements!: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel!: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  private itemWidth = 0;
  private currentSlide = 0;
  carouselWrapperStyle = {};

  private player?: AnimationPlayer;

  constructor(private builder: AnimationBuilder) { }

  ngAfterViewInit() {
    this.itemWidth =
      this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${this.itemWidth * 2}px`,
    };
  }
  next() {
    if (this.currentSlide + 1 === this.items.length) return;

    this.currentSlide = (this.currentSlide + 1) % this.items.length;

    const offset = this.currentSlide * this.itemWidth;

    const myAnimation: AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` })),
    ]);

    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }
  prev() {
    if (this.currentSlide === 0) return;

    this.currentSlide =
      (this.currentSlide - 1 + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;

    const myAnimation: AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` })),
    ]);

    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }
}
