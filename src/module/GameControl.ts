import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

// 游戏控制器，控制其他所有类
class GameControls{
  // 定义三个属性
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  // 创建一个属性来存储蛇的移动方向
  direction: string = "ArrowRight";
  // 创建一个属性判断蛇是否活着
  isLive: Boolean = true;
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
  }
  // 游戏的初始化
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.run();
  }
  //创建一个键盘按下的回调函数
  keydownHandler(event: KeyboardEvent) {
    console.log(event.key)
    // 需要检查key的合法性 
    // 修改方向
    this.direction = event.key
    
  }
  // 创建一个移动控制蛇的移动方向
  run() {
    let X = this.snake.getX()
    let Y = this.snake.getY()
    // 根据按键方向修改X和Y值
    switch (this.direction) {
      case "ArrowUp":
      
        Y -= 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
      case "ArrowDown":
        Y += 10;
        break;
    }
    // 检查蛇是否吃到了食物
    this.checkEat(X, Y)

    try {
      this.snake.setX(X)
      this.snake.setY(Y)
    } catch (e) {
      // 进入catch，说明出现异常
      alert(e)
      this.isLive = false
    }
    
    this.isLive && setTimeout(this.run.bind(this), 500);
  }
  // 定义一个方法，用来检查蛇是否吃掉食物
  checkEat(X: number, Y: number) {
    
    if (X === this.food.getX() && Y === this.food.getY()) {
       this.food.change()
       this.scorePanel.addScore()
       this.snake.addBody()
    }
  }
  
}
export default GameControls;