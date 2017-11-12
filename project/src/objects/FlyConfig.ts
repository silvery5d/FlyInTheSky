module fly {
	export enum ObjectType { 
		None = 0, 
		Rect = 1, 
		Circle = 2 
	};

	export enum ObjectGroup {
		None     = 0,
		Block    = Math.pow(2,0),
		Player   = Math.pow(2,1),
		Obstacle = Math.pow(2,2),
		Property = Math.pow(2,3)
	};

	export enum ObjectMask {
		None     = 0,
		Block    = ObjectGroup.Block|ObjectGroup.Player,
		Player   = ObjectGroup.Player|ObjectGroup.Block,
		Obstacle = 0,
		Property = 0
	};

	export class FlyConfig {
		static DebugMode:boolean;		// debug模式
		static stageWidth:number;		// 画布宽度
		static stageHeight:number;		// 画布高度

		private static PlayerMinId:number 		= 0;
		private static BlockMinId:number 		= 1000;
		private static PropertyMinId:number 	= 2000;
		private static ObstacleMinId:number 	= 3000;

		private static PlayerMaxId:number 		= 1000;
		private static BlockMaxId:number 		= 2000;
		private static PropertyMaxId:number 	= 3000;
		private static ObstacleMaxId:number 	= 4000;

		private static PlayerId:number 		= FlyConfig.PlayerMinId;
		private static BlockId:number 		= FlyConfig.BlockMinId;
		private static PropertyId:number 	= FlyConfig.PropertyMinId;
		private static ObstacleId:number 	= FlyConfig.ObstacleMinId;


		public static getPlayerId():number
		{
			FlyConfig.PlayerId++;
			if (FlyConfig.PlayerId >= FlyConfig.PlayerMaxId)
			{
				FlyConfig.PlayerId = FlyConfig.PlayerMinId;
			}
			return FlyConfig.PlayerId;
		}

		public static getBlockId():number
		{
			FlyConfig.BlockId++;
			if (FlyConfig.BlockId >= FlyConfig.BlockMaxId)
			{
				FlyConfig.BlockId = FlyConfig.BlockMinId;
			}
			return FlyConfig.BlockId;
		}

		public static getPropertyId():number
		{
			FlyConfig.PropertyId++;
			if (FlyConfig.PropertyId >= FlyConfig.PropertyMaxId)
			{
				FlyConfig.PropertyId = FlyConfig.PropertyMinId;
			}
			return FlyConfig.PropertyId;
		}

		public static getObstacleId():number
		{
			FlyConfig.ObstacleId++;
			if (FlyConfig.ObstacleId >= FlyConfig.ObstacleMaxId)
			{
				FlyConfig.ObstacleId = FlyConfig.ObstacleMinId;
			}
			return FlyConfig.ObstacleId;
		}

		public static isPlayer(id:number): boolean
		{
			return FlyConfig.PlayerMinId <= id && id < FlyConfig.PlayerMaxId;
		}

		public static isBlock(id:number): boolean
		{
			return FlyConfig.BlockMinId <= id && id < FlyConfig.BlockMaxId;
		}

		public static isProperty(id:number): boolean
		{
			return FlyConfig.PropertyMinId <= id && id < FlyConfig.PropertyMaxId;
		}

		public static isObstacle(id:number): boolean
		{
			return FlyConfig.ObstacleMinId <= id && id < FlyConfig.ObstacleMaxId;
		}
	}
}