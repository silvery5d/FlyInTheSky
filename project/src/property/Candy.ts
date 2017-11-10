module fly {
	export class Candy extends FlyCircle {
		radious:number;
		x:number;
		y:number;
		
		static candy_id:number = 2000;
		public constructor(x:number, y:number, radious:number) {
			super();
			this.x = x + radious;
			this.y = y + radious;
			this.radious = radious;

			this.initBody(Candy.candy_id++, p2.Body.DYNAMIC, this.x, this.y, this.radious);
			if (Candy.candy_id >= 3000)
			{
				Candy.candy_id = 2000;
			}
			// this.setGroupAndMask(ObjectGroup.Property, ObjectMask.Property);

			this.initRender(this.radious);
			this.initBitmap();

			this.updatePosition();
		}

		private initBitmap()
		{
			let png = FlyTools.createBitmapByName("candy_png");
			png.anchorOffsetX = png.width/2;
			png.anchorOffsetY = png.height/2;
			png.scaleX = 1.5;
			png.scaleY = 1.5;
			this.addChild(png);
		}
	}
}