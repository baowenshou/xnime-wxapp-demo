var plugin = requirePlugin("imePlugin");
Page({
	data:{
		shareModalShown:false,
		shareButtons: [{text: '取消'}, {text: '保存图片'}],
		toDeveloperModalShown: false,
		toDeveloperButtons:[{text: '确定'}],
		selectedCode:{
			code: 'minwei',
			name: '民委新规则(国标)',
			fontFamily: 'MinweiQagan'
		},
		switchCopy:true,
		switchPaste: false,
		text: 'ᠠ ᠡ ᠢ',
		// text: 'ᠡᠭᠡᠰᠢᠭ ᠳᠣᠯᠤᠭᠠᠨ ᠠᠪᠢᠶᠠᠨ ᠤ ᠮᠢᠨᠢ ᠲᠢᠭ ᠨᠢ ᠪᠣᠰᠤᠭ᠎ᠠ '+String.fromCharCode(13)+String.fromCharCode(10)
		// +' '+String.fromCharCode(13)+String.fromCharCode(10)
		// +'ᠦᠷᠢᠶ᠎ᠡ ᠬᠦᠯᠦᠭ ᠮᠣᠷᠢᠨ ᠤ ᠮᠢᠨᠢ ᠳᠡᠯ ᠨᠢ ᠪᠣᠰᠤᠭ᠎ᠠ'+String.fromCharCode(13)+String.fromCharCode(10)
		// +' '+String.fromCharCode(13)+String.fromCharCode(10)
		// +'ᠡᠬᠡ ᠮᠣᠩᠭᠤᠯ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠤ᠋ ᠮᠢᠨᠢ ᠬᠡᠶᠢ᠍ᠮᠣᠷᠢ ᠨᠢ ᠪᠣᠰᠤᠭ᠎ᠠ'+String.fromCharCode(13)+String.fromCharCode(10)
		// +' '+String.fromCharCode(13)+String.fromCharCode(10)
		// +'ᠦᠯᠢᠭᠡᠷ ᠰᠢᠭ ᠳᠡᠭᠡᠳᠦᠰ ᠤ᠋ᠨ ᠮᠢᠨᠢ ᠭᠣᠯᠤᠮᠲᠠ ᠨᠢ ᠪᠣᠰᠤᠭ᠎ᠠ ',
		codeArray: [
			{
        code: 'menk',
				name: '蒙科立(国标)',
				fontFamily: 'MenkQagan'
      },
      {
        code: 'menk-old',
				name: '蒙科立旧编码',
				fontFamily: 'MenkQaganOld'
      },
      {
        code: 'delehi',
				name: '德力海(国标)',
				fontFamily: 'DelehiQagan'
      },
      {
        code: 'minwei',
				name: '民委新规则(国标)',
				fontFamily: 'MinweiQagan'
      },
      {
        code: 'standard',
				name: 'Noto Sans Mongolian(国标)',
				fontFamily: 'NotoSansMongolian'
      }
		],
		xnImeState:{
			keyboardOpen:false,
			id:'123',
			text:'',
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
	},
	onClose(event){
		console.log('onClose',event);
	},
	onEdit(event){
		this.setData({
			xnImeState:{
				keyboardOpen:true, 
				id:'123',
				text:this.data.text
			}
		})
	},
	toDeveloper(){
		this.setData({toDeveloperModalShown:true})
	},
	bindPickerChange: function(e) {
    this.setData({
      selectedCode: this.data.codeArray[e.detail.value],
    })
	},
	switchCopyChange: function(e){
		this.setData({switchCopy:e.detail.value})
	},
	switchPasteChange: function(e) {
		this.setData({switchPaste:e.detail.value})
	},
	
	showShareModal:function(){
		this.setData({ shareModalShown:true })
	},
	closeShareModal:function(){
		this.setData({ shareModalShown:false })
	},
	saveShareImage: function(){
		wx.saveImageToPhotosAlbum({
			filePath: 'images/share.jpg',
			success(res) {
				wx.showToast({
					title: '保存到相册中',
					icon: 'success',
					duration: 2000
				})
			},
			fail(res){
				console.log(res);
				wx.showToast({
					title: '保存失败',
					icon: 'none',
					duration: 1000
				})
			}

		})
	},
	tapDialogButton(e) {
		console.log('e',e);
		let that = this;
		if(e.detail.index==0){
			this.setData({ shareModalShown:false })
		}else if(e.detail.index == 1){
			wx.saveImageToPhotosAlbum({
				filePath: 'images/share.jpg',
				success(res) {
					wx.showToast({
						title: '保存到相册中',
						icon: 'success',
						duration: 2000
					});
					that.setData({ shareModalShown:false })
				},
				fail(res){
					console.log(res);
					wx.showToast({
						title: '保存失败',
						icon: 'none',
						duration: 1000
					})
				}
			})
		}
		this.setData({
				toDeveloperModalShown: false,
				shareModalShown: false
		})
	},

})