class Cell {
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.width = square;
      this.height = square;
    }
    createSquare() {
      ctx.strokeStyle = "black";
      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
  }