var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fly;
(function (fly) {
    var BattleScene = (function (_super) {
        __extends(BattleScene, _super);
        function BattleScene() {
            var _this = _super.call(this) || this;
            _this.sprites = []; // 当前所有需要计算位置的精灵	
            _this.lastCreateCandy = 0;
            return _this;
        }
        BattleScene.prototype.update = function (dt) {
            if (this.touchLayer.isTouchMove) {
                var direct = this.touchLayer.direct;
                var forceScale = this.touchLayer.forceScale;
                this.player.body.applyForce([direct[0] * forceScale, direct[1] * forceScale], this.player.body.position);
            }
            this.sprites.forEach(function (value) {
                if (!value.isDestroy) {
                    value.updatePosition();
                }
            });
            this.createCandy(dt);
        };
        BattleScene.prototype.createCandy = function (dt) {
            this.lastCreateCandy += dt;
            if (this.lastCreateCandy > 3) {
                var width = fly.FlyConfig.stageWidth * Math.random();
                var height = fly.FlyConfig.stageHeight * Math.random();
                var radious = 30 * (Math.random() + 1);
                var candy = new fly.Candy(width, height, radious);
                this.addToWorld(candy);
                this.lastCreateCandy = 0;
                console.log("Add One Candy!");
            }
        };
        BattleScene.prototype.initScene = function () {
            this.createWorld();
            this.createScene();
            this.createTouchLayer();
        };
        BattleScene.prototype.createWorld = function () {
            var world = new p2.World({
                gravity: [0, 0]
            });
            world.sleepMode = p2.World.BODY_SLEEPING;
            this.world = world;
            //添加帧事件侦听
            egret.Ticker.getInstance().register(function (dt) {
                //使世界时间向后运动
                world.step(dt / 1000);
                this.update(dt / 1000);
            }, this);
            world.on("beginContact", this.onBeginContact, this);
        };
        BattleScene.prototype.createScene = function () {
            var wall1 = new fly.Wall(0, 0, fly.FlyConfig.stageWidth, 10);
            var wall2 = new fly.Wall(0, 0, 10, fly.FlyConfig.stageHeight);
            var wall3 = new fly.Wall(fly.FlyConfig.stageWidth, fly.FlyConfig.stageHeight, fly.FlyConfig.stageWidth - 10, 0);
            var wall4 = new fly.Wall(fly.FlyConfig.stageWidth, fly.FlyConfig.stageHeight, 0, fly.FlyConfig.stageHeight - 10);
            this.addToWorld(wall1);
            this.addToWorld(wall2);
            this.addToWorld(wall3);
            this.addToWorld(wall4);
            var player = new fly.Player(fly.FlyConfig.stageWidth / 2, fly.FlyConfig.stageHeight / 2, 50);
            this.addToWorld(player);
            this.player = player;
        };
        BattleScene.prototype.createTouchLayer = function () {
            var touchLayer = new fly.BattleTouchLayer(this, 200, 1);
            this.touchLayer = touchLayer;
        };
        BattleScene.prototype.onBeginContact = function (event) {
            console.log("Contact: " + event.bodyA.id + " and " + event.bodyB.id);
            if (2000 <= event.bodyA.id && event.bodyA.id < 3000) {
                this.delFromWorldById(event.bodyA.id);
            }
            if (2000 <= event.bodyB.id && event.bodyB.id < 3000) {
                this.delFromWorldById(event.bodyB.id);
            }
        };
        BattleScene.prototype.addToWorld = function (obj) {
            var _this = this;
            this.world.addBody(obj.body);
            obj.body.displays.forEach(function (value) {
                _this.addChild(value);
            });
            if (obj.body.type != p2.Body.STATIC) {
                this.sprites.push(obj);
            }
        };
        BattleScene.prototype.delFromWorldById = function (id) {
            var _this = this;
            this.sprites.forEach(function (value) {
                if (value.body.id == id) {
                    _this.delFromWorldByObj(value);
                    return;
                }
            });
        };
        BattleScene.prototype.delFromWorldByObj = function (obj) {
            var _this = this;
            obj.isDestroy = true;
            obj.body.displays.forEach(function (value) {
                _this.removeChild(value);
            });
            this.world.removeBody(obj.body);
        };
        return BattleScene;
    }(egret.DisplayObjectContainer));
    fly.BattleScene = BattleScene;
    __reflect(BattleScene.prototype, "fly.BattleScene");
})(fly || (fly = {}));
//# sourceMappingURL=BattleScene.js.map