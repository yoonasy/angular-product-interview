import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss'],
})
export class ListDetailComponent implements OnInit {

  id = ''
  cur = { x: 0, y: 0 }
  preview = { x: 0, y: 0 }
  @ViewChild('img') img?: ElementRef<HTMLImageElement>

  constructor(public routeInfo: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.routeInfo.params.subscribe((params: any) => {
      this.id = params.id as string
    })
  }

  onBack(): void {
    this.location.back()
  }

  onMove(event: MouseEvent) {
    const w = this.img?.nativeElement.width as number
    const h = this.img?.nativeElement.height as number
    const left = this.img?.nativeElement.x as number
    const top = this.img?.nativeElement.y as number
    const glassWH = 218
    const glassHalf = glassWH / 2

    let x = event.pageX - left - glassHalf
    let y = event.pageY - top - glassHalf

    x = Math.max(0, x)
    y = Math.max(0, y)
    x = Math.min(w - glassWH, x)
    y = Math.min(h - glassWH, y)


    this.cur = { x, y }
    this.preview = { x: w / glassWH * x, y: h / glassWH * y }
    // console.log(w / glassWH);
  }
}
