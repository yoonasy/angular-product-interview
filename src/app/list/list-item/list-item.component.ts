import { Component, HostBinding, Input, OnInit, SimpleChanges } from '@angular/core';
import { MenuData, Product } from "../../domain/product.module";
import {
  animate,
  animation, group, query,
  style,
  transition,
  trigger,
  useAnimation
} from "@angular/animations";

export const slideInAnimation = animation([
  style({ transform: 'translateY({{ from }})', opacity: 0, color: '#333' }),
  animate('{{ timings }}', style({ transform: 'translateY(0)', opacity: 1, color: 'green' })),
  animate('{{ timings }}', style({ color: 'red' })),
  animate('{{ timings }}', style({ transform: 'translateY(0)', opacity: 1, color: 'green' })),
  animate('{{ timings }}', style({ color: 'red' }))
]);

export const slideOutAnimation = animation([
  animate(
    '{{ timings }}',
    style({ transform: 'translateY({{ to }})', opacity: 0 }),
  )
]);

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  animations: [
    trigger('visibilityChange', [
      // 重新更新插入进来
      transition(':enter', [
        group([ // group并行执行以下样式（同时执行）
          query('.anim', useAnimation(slideInAnimation, {
            params: { from: '20%', timings: '0.6s ease-in' }
          }), { optional: true }),
          query('.anim .txt', useAnimation(slideInAnimation, {
            params: { from: '20%', timings: '0.6s ease-in' }
          }), { optional: true })
        ])
      ]),
      // transition(':leave', [
      //   query('.anim', useAnimation(slideOutAnimation, {
      //     params: { to: '-200%', timings: '200ms ease-in' }
      //   }), { optional: true })
      // ])
    ])
  ]
})
export class ListItemComponent implements OnInit {
  constructor() {
  }

  @HostBinding('@visibilityChange')

  @Input() enableAnim = false;
  @Input() hidden: boolean = false;
  @Input() item: Product = {
    id: '',
    name: '',
    type: 0,
    price: 0,
    img: '',
    desc: '',
    volume: 0
  };
  // @Input()
  // get item(): Product {
  //   return this._item
  // }
  // set item(val: any) {
  //   this._item = val
  // }
  // _item: Product = {
  //   id: '',
  //   name: '',
  //   type: 0,
  //   price: 0,
  //   img: '',
  //   desc: '',
  //   volume: 0
  // }

  ngOnInit(): void {
  }

  typeName(type: number): string {
    return MenuData.find(e => e.type == type)?.name as string
  }
}
