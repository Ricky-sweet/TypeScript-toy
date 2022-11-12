class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('food')!;
  }
  // 定义一个获取食物X轴坐标的方法
  getX(){
    return this.element.offsetLeft;
  }
  getY(){
    return this.element.offsetTop;
  }
  // 修改食物位置
  change() {
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}
export default Food;