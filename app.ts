declare var canvasContext: CanvasRenderingContext2D;

class SpryT{
    private sprite: HTMLImageElement   

    constructor(sprite){
        this.sprite = sprite
    }

    public Draw(){
        canvasContext.drawImage(this.sprite, 0, 0);
    } 
}

class Startup {
    public static main() {
        window.onload = () => {
            var canvas = <HTMLCanvasElement>document.getElementById("canvas");
            canvasContext = canvas.getContext("2d");

            var sprite = new Image();
            sprite.src = "coin-sprite.png";

            var spryt = new SpryT(sprite);

            window.setInterval(function () {
                spryt.Draw();
            }, 100);
        }
    }
}

Startup.main();