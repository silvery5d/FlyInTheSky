module fly {
	export class MoveTraps extends FlyRect{
		x:number
		y:number
		width:number
		height:number
		tx:number
		ty:number

		pVelocity:number

		source:number[] = []
		target:number[] = []

		baseScale:number = FlyParam.TrapsBaseScale

		public constructor(x:number, y:number, width:number, height:number, op?) {
			super()
			this.x = x + width/2
			this.y = y + height/2
			this.width = width
			this.height = height
			this.tx = op.tx + width/2
			this.ty = op.ty + height/2
			this.pVelocity = op.pVelocity || 200

			this.source = [this.x, this.y]
			this.target = [this.tx, this.ty]

			this.initBody({
				id:FlyConfig.getObstacleId()
				, mass:op.mass || 1
				, type:op.type || p2.Body.DYNAMIC
				, fixedRotation:true
				, position:[this.x, this.y]
				, damping:op.damping || 0.7
			})
			this.initShape(this.width, this.height)
			this.setGroupAndMask(ObjectGroup.Obstacle, ObjectMask.Obstacle)

			this.initBitmap(op.path)
			this.updatePosition()

			this.setRotation(op.rotation)
		}

		private initBitmap(path:string)
		{
			let png = FlyTools.createBitmapByName(path)
			png.anchorOffsetX = png.width/2
			png.anchorOffsetY = png.height/2
			png.scaleX = this.baseScale * this.width/png.width
			png.scaleY = this.baseScale * this.height/png.height
			this.addChild(png)
		}

		public onTrigger(pid:number)
		{
			this.objmgr.players.forEach(player => {
				if (player.body.id == pid)
				{
					player.died(3)
					return true
				}
			})
			return true
		}

		public updatePosition(dt:number = 0)
		{
			super.updatePosition(dt)

			let dist = p2.vec2.dist(this.body.position, this.target)
			if (dist < 10)
			{
				let tmp = this.target
				this.target = this.source
				this.source = tmp
			}

			let dir = [this.target[0] - this.body.position[0], this.target[1] - this.body.position[1]]
			let normal = []
			p2.vec2.normalize(normal, dir)

			let forceScale = this.pVelocity
			this.body.velocity = [normal[0]*forceScale,  normal[1]*forceScale]
		}
	}
}