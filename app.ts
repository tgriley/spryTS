module Spryts {
    export class SprytAnimation {
        public Name: string;
        public Row: number;
        public FirstFrameIndex: number;
        public LastFrameIndex: number;

        constructor(name: string, row: number, firstFrameIndex: number, lastFrameIndex: number) {
            this.Name = name;
            this.Row = row;
            this.FirstFrameIndex = firstFrameIndex;
            this.LastFrameIndex = lastFrameIndex;
        }
    }

    export class Spryt {
        private sprite: HTMLImageElement
        private frameWidth: number;
        private frameHeight: number;
        private animations: { [name: string]: SprytAnimation; } = {};
        private currentAnimation: SprytAnimation;
        private animationFrameIndex: number = 0;
        private canvasContext: CanvasRenderingContext2D;

        constructor(canvasContext: CanvasRenderingContext2D, sprite: HTMLImageElement, frameWidth: number, frameHeight: number, defaultAnimation: SprytAnimation) {
            this.canvasContext = canvasContext;
            this.sprite = sprite;
            this.frameWidth = frameWidth;
            this.frameHeight = frameHeight;
            this.animations[defaultAnimation.Name] = defaultAnimation;
            this.currentAnimation = this.animations[defaultAnimation.Name];
        }

        public Draw(x: number, y: number) {
            if (this.animationFrameIndex > this.currentAnimation.LastFrameIndex) {
                this.animationFrameIndex = 0;
            }

            let frameX = (this.animationFrameIndex) * this.frameWidth;
            let frameY = (this.currentAnimation.Row) * this.frameHeight;
            this.canvasContext.drawImage(this.sprite, frameX, frameY, this.frameWidth, this.frameHeight, x, y, this.frameWidth, this.frameHeight);

            this.animationFrameIndex++;
        }

        public AddAnimation(sprytAnimation: SprytAnimation) {
            this.animations[sprytAnimation.Name] = sprytAnimation;
        }

        public SetAnimation(name: string): void {
            this.currentAnimation = this.animations[name];
            this.animationFrameIndex = 0;
        }

        public GetCurrentAnimation() {
            return this.currentAnimation.Name;
        }
    }
}

class Startup {
    public static main() {
        window.onload = () => {
            let canvas = <HTMLCanvasElement>document.getElementById('canvas');
            let canvasContext = canvas.getContext('2d');

            let sprite = new Image();
            sprite.src = 'coin-sprite.png';

            let animation1 = new Spryts.SprytAnimation('animation1', 0, 0, 9)
            let animation2 = new Spryts.SprytAnimation('animation2', 1, 0 ,9)

            let spryt = new Spryts.Spryt(canvasContext, sprite, 100, 100, animation1);
            spryt.AddAnimation(animation2);

            spryt.SetAnimation('animation2');

            let ticks = 0

            console.log(spryt.GetCurrentAnimation());

            window.setInterval(function () {
                canvasContext.clearRect(0, 0, canvas.width, canvas.height);
                
                if(ticks === 9){
                    spryt.SetAnimation('animation1');
                    console.log(spryt.GetCurrentAnimation());
                }
                
                ticks++;

                spryt.Draw(10, 10);
            }, 100);
        }
    }
}

Startup.main();