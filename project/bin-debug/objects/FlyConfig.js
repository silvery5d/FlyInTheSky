var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var fly;
(function (fly) {
    var ObjectType;
    (function (ObjectType) {
        ObjectType[ObjectType["None"] = 0] = "None";
        ObjectType[ObjectType["Rect"] = 1] = "Rect";
        ObjectType[ObjectType["Circle"] = 2] = "Circle";
    })(ObjectType = fly.ObjectType || (fly.ObjectType = {}));
    var ObjectGroup;
    (function (ObjectGroup) {
        ObjectGroup[ObjectGroup["None"] = 0] = "None";
        ObjectGroup[ObjectGroup["Block"] = Math.pow(2, 0)] = "Block";
        ObjectGroup[ObjectGroup["Player"] = Math.pow(2, 1)] = "Player";
        ObjectGroup[ObjectGroup["Obstacle"] = Math.pow(2, 2)] = "Obstacle";
        ObjectGroup[ObjectGroup["Property"] = Math.pow(2, 3)] = "Property";
    })(ObjectGroup = fly.ObjectGroup || (fly.ObjectGroup = {}));
    var ObjectMask;
    (function (ObjectMask) {
        ObjectMask[ObjectMask["None"] = 0] = "None";
        ObjectMask[ObjectMask["Block"] = ObjectGroup.Block | ObjectGroup.Player | ObjectGroup.Obstacle] = "Block";
        ObjectMask[ObjectMask["Player"] = ObjectGroup.Player | ObjectGroup.Block | ObjectGroup.Obstacle] = "Player";
        ObjectMask[ObjectMask["Obstacle"] = ObjectGroup.Obstacle | ObjectGroup.Block | ObjectGroup.Player] = "Obstacle";
        ObjectMask[ObjectMask["Property"] = 0] = "Property";
    })(ObjectMask = fly.ObjectMask || (fly.ObjectMask = {}));
    var FlyConfig = (function () {
        function FlyConfig() {
        }
        FlyConfig.getPlayerId = function () {
            FlyConfig.PlayerId++;
            if (FlyConfig.PlayerId >= FlyConfig.PlayerMaxId) {
                FlyConfig.PlayerId = FlyConfig.PlayerMinId;
            }
            return FlyConfig.PlayerId;
        };
        FlyConfig.getBlockId = function () {
            FlyConfig.BlockId++;
            if (FlyConfig.BlockId >= FlyConfig.BlockMaxId) {
                FlyConfig.BlockId = FlyConfig.BlockMinId;
            }
            return FlyConfig.BlockId;
        };
        FlyConfig.getPropertyId = function () {
            FlyConfig.PropertyId++;
            if (FlyConfig.PropertyId >= FlyConfig.PropertyMaxId) {
                FlyConfig.PropertyId = FlyConfig.PropertyMinId;
            }
            return FlyConfig.PropertyId;
        };
        FlyConfig.getObstacleId = function () {
            FlyConfig.ObstacleId++;
            if (FlyConfig.ObstacleId >= FlyConfig.ObstacleMaxId) {
                FlyConfig.ObstacleId = FlyConfig.ObstacleMinId;
            }
            return FlyConfig.ObstacleId;
        };
        FlyConfig.isPlayer = function (id) {
            return FlyConfig.PlayerMinId <= id && id < FlyConfig.PlayerMaxId;
        };
        FlyConfig.isBlock = function (id) {
            return FlyConfig.BlockMinId <= id && id < FlyConfig.BlockMaxId;
        };
        FlyConfig.isProperty = function (id) {
            return FlyConfig.PropertyMinId <= id && id < FlyConfig.PropertyMaxId;
        };
        FlyConfig.isObstacle = function (id) {
            return FlyConfig.ObstacleMinId <= id && id < FlyConfig.ObstacleMaxId;
        };
        FlyConfig.DebugMode = true; // debug模式
        FlyConfig.PlayerMinId = 0;
        FlyConfig.BlockMinId = 1000;
        FlyConfig.PropertyMinId = 2000;
        FlyConfig.ObstacleMinId = 3000;
        FlyConfig.PlayerMaxId = 1000;
        FlyConfig.BlockMaxId = 2000;
        FlyConfig.PropertyMaxId = 3000;
        FlyConfig.ObstacleMaxId = 4000;
        FlyConfig.PlayerId = FlyConfig.PlayerMinId;
        FlyConfig.BlockId = FlyConfig.BlockMinId;
        FlyConfig.PropertyId = FlyConfig.PropertyMinId;
        FlyConfig.ObstacleId = FlyConfig.ObstacleMinId;
        return FlyConfig;
    }());
    fly.FlyConfig = FlyConfig;
    __reflect(FlyConfig.prototype, "fly.FlyConfig");
    var FlyParam = (function () {
        function FlyParam() {
        }
        FlyParam.LayerScale = 0.5; // 屏幕缩放比例
        FlyParam.forceScale = 1000; // 力量因子
        FlyParam.PlayerMaxPower = 300; // 人物最大能量
        FlyParam.PlayerMinPower = 20; // 人物最小能量
        FlyParam.PlayerInitPower = 100; // 人物初始能量
        FlyParam.PlayerInitMass = 1; // 人物初始重量
        FlyParam.PlayerStep = [51, 151, 251]; // 能量阶段
        FlyParam.PlayerTijiScale = [0.5, 1, 2]; // 体积倍数
        FlyParam.PlayerMassScale = [10, 25, 50]; // 重量因素
        FlyParam.PlayerVeloScale = [2, 1, 0.5]; // 速度倍数
        FlyParam.candy_power = 15; // 糖果能量
        FlyParam.move_power = -3; // 移动消耗能量
        FlyParam.PlayerBaseScale = 2; // 基本缩放
        FlyParam.CandyBaseScale = 2;
        FlyParam.TrapsBaseScale = 1;
        FlyParam.WeightTrapsBaseScale = 2;
        return FlyParam;
    }());
    fly.FlyParam = FlyParam;
    __reflect(FlyParam.prototype, "fly.FlyParam");
})(fly || (fly = {}));
//# sourceMappingURL=FlyConfig.js.map