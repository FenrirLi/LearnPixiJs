PIXI.loader
    .add('spritesheet', 'Animation/Explosion/mc.json')
    .load(explosion);

function explosion() {

    // create an array to store the textures
    var explosionTextures = [],
        i;

    for (i = 0; i < 26; i++) {
        var texture = PIXI.Texture.fromFrame('Explosion_Sequence_A ' + (i+1) + '.png');
        explosionTextures.push(texture);
    }

    for (i = 0; i < 50; i++) {
        // create an Explosion AnimatedSprite
        var explosion = new PIXI.extras.AnimatedSprite(explosionTextures);

        explosion.x = Math.random() * app.renderer.width;
        explosion.y = Math.random() * app.renderer.height;
        explosion.anchor.set(0.5);
        explosion.rotation = Math.random() * Math.PI;
        explosion.scale.set(0.75 + Math.random() * 0.5);
        explosion.gotoAndPlay(Math.random() * 27);
        app.stage.addChild(explosion);
    }
}