import { SprytAnimation } from "./sprytanimation";
export declare class Spryt {
    private sprite;
    private frameWidth;
    private frameHeight;
    private animations;
    private currentAnimation;
    private animationFrameIndex;
    private canvasContext;
    constructor(canvasContext: CanvasRenderingContext2D, sprite: HTMLImageElement, frameWidth: number, frameHeight: number, defaultAnimation: SprytAnimation);
    Draw(x: number, y: number): void;
    AddAnimation(sprytAnimation: SprytAnimation): void;
    SetAnimation(name: string): void;
    GetCurrentAnimation(): string;
}
