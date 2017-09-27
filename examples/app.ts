import {Spryt, SprytAnimation} from "../src";

class Startup {
    public static main() {
        window.onload = () => {
            let canvas = <HTMLCanvasElement>document.getElementById('canvas');
            let canvasContext = canvas.getContext('2d');

            let sprite = new Image();
            sprite.src = 'coin-sprite.png';

            let animation1 = new SprytAnimation('animation1', 0, 0, 9)
            let animation2 = new SprytAnimation('animation2', 1, 0 ,9)

            let spryt = new Spryt(canvasContext, sprite, 100, 100, animation1);
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