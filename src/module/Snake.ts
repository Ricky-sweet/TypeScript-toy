class Snake{
  // 表示蛇头的元素
  head: HTMLElement;
  // 蛇的身体
  bodies: HTMLCollection;
  element: HTMLElement;
  constructor() {
    this.head = document.querySelector('#snake > div') as HTMLElement ;
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
    this.element = document.getElementById('snake')!;
  }
  getX() {
    return this.head.offsetLeft;
  }
  getY() {
    return this.head.offsetTop;
  }
  //设置蛇头的坐标
  setX(value: number) {
    if (value < 0 || value >=290) {
      // 说明蛇撞墙了
     
      throw new Error('蛇撞墙了！')
    }
     // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // console.log('水平方向发生了掉头');
            // 如果发生了掉头，让蛇向方向继续移动
            if (value > this.getX()) {
                // 如果新值value大于旧值X， 则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.getX() - 10;
            }else {
                // 向左走
                value = this.getX() + 10;
            }
    }
    this.moveBody()
    this.head.style.left = value + 'px';
    
    // this.checkHeadBody();
  }
  setY(value: number) {
    
    if (value < 0 || value >= 290) {
     
      // 说明蛇撞墙了
      throw new Error('蛇撞墙了！')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // console.log('水平方向发生了掉头');
            // 如果发生了掉头，让蛇向方向继续移动
            if (value > this.getY()) {
                // 如果新值value大于旧值X， 则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.getY() - 10;
            }else {
                // 向左走
                value = this.getY() + 10;
            }
    }
    this.moveBody()
    this.head.style.top = value + 'px'
    
    // this.checkHeadBody();
  }
  //蛇增加身体的方法
  addBody() {
    // 在element最后添加一个div
    this.element.insertAdjacentHTML("beforeend","<div></div>");
  }
  // 添加一个蛇身体移动的方法
  moveBody() {
    // 遍历获取所有的身体
    
   for(let i = this.bodies.length-1; i > 0; i--){
            // 获取前面身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            // 将这个值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';

        }
  }
   // 检查蛇头是否撞到身体的方法
    checkHeadBody(){
        // 获取所有的身体，检查是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.getX() === bd.offsetLeft && this.getY() === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error("撞到自己了~~");

            }

        }
    }
}
export default Snake;