## 启动项目
```shell
git clone https://github.com/yoonasy/angular-product-interview.git

cd angular-product-interview/

npm i && npm run start
```

## Product（angular-product） 题目1：【交付内容如下】
产品列表（属性包含产品ID，产品名称，分类名称，产品价格，产品图片等），数据自己模拟，单页数量最小300，`每隔 5 秒自动随机更新（增加，删除，属性变化都可以）不小于50条`产品（名称，价格文字类的属性`更新需要有明确的颜色变化`提示）
- 产品列表按产品分类来显示 ✔️
- 页面滑动时保证产品分类在最上方 ✔️
- 产品详细信息，点击产品列表的产品进入到产品详情页，产品详情页可以返回产品列表 ✔️

以下挑战任选其一，并应用到实际的项目中
- 自定义滚动条
- - [x] 图片放大镜功能 ✔️
- 瀑布流布局

## 技术要求：
- 必须使用Angular框架，版本Angular 8及以上
- 除Angular自带组件外，不能引用其它任何第三方组件
- 美观度不做要求

## 参考价值
angular子组件更新之后改变插入节点的文字样式进行过渡加载
[样式](/src/app/list/list-item/list-item.component.ts#L12)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
