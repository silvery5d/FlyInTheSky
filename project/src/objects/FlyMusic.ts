module fly {
	export class FlyMusic {

		private _sound: egret.Sound = new egret.Sound()
		private _channel: egret.SoundChannel
		private _time:number = 0

		private _initFinish:boolean = false

		public constructor() {
		}

		// 加载音乐
		public loadMusic(path:string, time:number = 0)
		{
			this.stop();
			this._initFinish = false

			this._sound.load(path)
        	this._sound.addEventListener(egret.Event.COMPLETE, this.onLoad, this)
			this._time = time
		}

		public loadMusicOnly(path:string)
		{
			this.stop();
			this._initFinish = false

			this._sound.load(path)
        	this._sound.addEventListener(egret.Event.COMPLETE, this.onLoadOnly, this)
		}

		//播放
		public play(time:number = 0)
		{
			if (!this._initFinish) return
			
			//sound 播放会返回一个 SoundChannel 对象，暂停、音量等操作请控制此对象
			this._channel = this._sound.play(0, time);
			this._channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onComplete, this);
		}

		//停止
		public stop():void {
			if (this._channel) {
				this._channel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onComplete, this);
				this._channel.stop();
				this._channel = null;
			}
		}

		private onLoad()
		{
			this._sound.removeEventListener(egret.Event.COMPLETE, this.onLoad, this)
			this._initFinish = true
			this.play(this._time)
		}

		private onLoadOnly()
		{
			this._sound.removeEventListener(egret.Event.COMPLETE, this.onLoadOnly, this)
			this._initFinish = true
		}

		//播放完成
		public onComplete()
		{
			// console.log("播放完成")
			this.stop();
		}

		public playObject(obj:string, time:number = 0)
		{
			this.loadMusic("resource/music/" + obj, time)
		}
		
		public loadObject(obj:string)
		{
			this.loadMusicOnly("resource/music/" + obj)
		}
	}
}