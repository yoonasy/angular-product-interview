import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { MenuData, MenuType, Product, responseData } from "../../domain/product.module";
import { HttpClient } from "@angular/common/http";
import { interval, Observable, switchMap, tap, Subscription } from "rxjs";

@Component({
  selector: 'app-list-main',
  templateUrl: './list-main.component.html',
  styleUrls: ['./list-main.component.scss']
})
export class ListMainComponent implements OnInit {
  // 是否开启更新后文字动画
  enableAnim = false

  // 分类
  curType = MenuData[0]

  // 数据
  list: Product[] = []

  // 订阅集
  subList: Subscription[] = []

  constructor(private $http: HttpClient, private routeInfo: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.routeInfo.queryParams.subscribe((query: Params) => {
      const type = Number(query['category']) || 0
      this.curType = MenuData.find(e => e.type === type) as MenuType

      console.log(this.curType.name, this.curType.type)
      this.loadData(this.curType.type)
    })
  }

  getData(type: number, size: number = 0): Observable<any> {
    return this.$http.post<responseData>('/api/getProductList', { type, size })
  }

  genRandom(limit: number, count: number): Array<number> {
    limit = limit - 1 // 0~299 300个偏移数
    const temp: number[] = []

    while (temp.length < count) {
      const rand = Number.parseInt(String(Math.random() * limit)) // 随机生成

      if (!temp.some(e => e === rand)) { // 不存在就添加
        temp.push(rand)
      }
    }

    return temp.sort((a, b) => a - b)
  }

  loadData(type: number): void {
    const size = 300 // 初始数据多少条
    const updateSize = 50 // 需要随机更新多少条 必须小于等于size
    const timer = 5e3 // 多久随机更新一次

    // 取消之前的订阅 初始数据
    // this.list = []
    this.enableAnim = false
    this.subList.forEach(e => e.unsubscribe())
    this.subList = []

    let initSub = this.getData(type, size)
      .subscribe((response: responseData) => {
        this.list = response.data
      })

    // 这里选择更新50条属性       TODO 每隔5秒自动随机更新（增加，删除，属性变化都可以）不小于50条产品
    let intervalSub = interval(timer)
      .pipe(switchMap(() => this.getData(type, updateSize)))
      .subscribe((response: any) => {
        this.enableAnim = true // 开始随机更新开启文字颜色动画
        const updateIndex = this.genRandom(size, updateSize)
        console.log('需要随机更新的索引：', updateIndex);

        this.list = this.list.map((e, i) => {
          const resIndex = updateIndex.findIndex(j => j === i)

          if (resIndex !== -1) {
            return {
              ...response.data[resIndex],
              id: e.id
            }
          }

          return e
        })
        response.data
      })

    this.subList.push(initSub)
    this.subList.push(intervalSub)
  }
}
