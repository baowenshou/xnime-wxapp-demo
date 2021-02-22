var plugin = requirePlugin("imePlugin");
Page({
	data:{
		text: 'ᠮᠣᠩᠭᠤᠯ ᠦᠰᠦᠭ '+String.fromCharCode(13)+String.fromCharCode(10),
		xnImeState:{
			keyboardOpen:true,
			id:'123',
			text:'123',
			copy:true,
			paste: true
		}
	},
	 /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		wx.showShareMenu({
			withShareTicket: true
		});
  },
	onCommit(event){
		this.setData({
			text: event.detail.text
		});
		console.log('index onCommit',event);
	},
	onClose(event){
		console.log('index onClose',event);
	},
	onEdit(event){
		this.setData({
			xnImeState:{
				keyboardOpen:true, 
				id:'123',
				text:this.data.text
			}
		})
	}
})