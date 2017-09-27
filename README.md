# spryTS
TypeScript Sprite Lib

```javascript
  
  //Create standard image
  let sprite = new Image().src = 'coin-sprite.png';

  //Configure Spryt Animations
  let animation1 = new SprytAnimation('animation1', 0, 0, 9)

  //Create Spryt with initial animation configuration
  let spryt = new Spryt(canvasContext, sprite, 100, 100, animation1);

  //Loop through the animation frames every every 100ms at coordinates
  window.setInterval(function () {
    spryt.Draw(10, 10);
  }, 100);
```
