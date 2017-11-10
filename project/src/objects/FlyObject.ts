 /**
* 物体基类
* @param x 左上角的 x 坐标。
* @param y 左上角的 y 坐标。
* @param type 物体的形状。
*/
module fly {
	export class FlyObject {
		body:p2.Body;
		shape:p2.Shape;
		bodyType:number;
		isDestroy:boolean = false;
		
		public updatePosition()
		{
			if (this.body)
			{
				this.body.displays.forEach(value => {
					value.x = this.body.position[0];
					value.y = this.body.position[1];
				})

				if (!fly.FlyConfig.DebugMode)
					return;

				if (this.body.sleepState == p2.Body.SLEEPING)
				{
					this.body.displays[0].alpha = 0.5;
				}
				else
				{
					this.body.displays[0].alpha = 1;
				}
			}
		}

		public setGroupAndMask(group:number, mask:number)
		{
			if (this.shape)
			{
				this.shape.collisionGroup = group;
				this.shape.collisionMask = mask;
			}
		}

		public addChild(child:any)
		{
			if (!this.body.displays)
			{
				this.body.displays = []
			}
			this.body.displays.push(child);
		}
	}
}