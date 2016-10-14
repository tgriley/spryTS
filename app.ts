declare let canvasContext: CanvasRenderingContext2D;

class SprytAnimation{
    public FirstFrameIndex: number;
    public LastFrameIndex: number;

    constructor(firstFrameIndex: number, lastFrameIndex: number){
        this.FirstFrameIndex = firstFrameIndex;
        this.LastFrameIndex = lastFrameIndex;
    }
}

class Spryt {
    private sprite: HTMLImageElement
    private frameWidth: number;
    private frameHeight: number;
    private animations: {[name: string]: SprytAnimation;} = {};
    private animationFrameIndex: number = 0;

    constructor(sprite: HTMLImageElement, frameWidth: number, frameHeight: number, defaultAnimation: SprytAnimation) {
        this.sprite = sprite;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.animations['default'] = defaultAnimation;
    }

    public Draw(x: number, y: number) {
        if(this.animationFrameIndex > this.animations['default'].LastFrameIndex)
        {
            this.animationFrameIndex = 0;
        }

        let frameX = (this.animationFrameIndex+1)*this.frameWidth;
        canvasContext.drawImage(this.sprite, frameX, 0, this.frameWidth, this.frameHeight, x, y, this.frameWidth, this.frameHeight);
        
        this.animationFrameIndex++;
    }
}

class Startup {
    public static main() {
        window.onload = () => {
            let canvas = <HTMLCanvasElement>document.getElementById("canvas");
            canvasContext = canvas.getContext("2d");

            let sprite = new Image();
            sprite.src = "coin-sprite.png";

            let spryt = new Spryt(sprite, 100, 100, new SprytAnimation(0,9));

            window.setInterval(function () {
                canvasContext.clearRect(0, 0, canvas.width, canvas.height);
                spryt.Draw(10, 10);
            }, 100);
        }
    }
}

Startup.main();