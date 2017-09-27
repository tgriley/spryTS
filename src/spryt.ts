import {SprytAnimation} from "./sprytanimation"

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