var xnime = requirePlugin("imePlugin");
Page({
	data:{
		insert:{
			type:'settext',
			text: 'ᠮᠣᠩᠭᠤᠯ ᠦᠰᠦᠭ ᠮᠣᠩᠭᠤᠯ ᠦᠰᠦᠭ ᠮᠣᠩᠭᠤᠯ ᠦᠰᠦᠭ ᠮᠣᠩᠭᠤᠯ ᠦᠰᠦᠭ ᠮᠣᠩᠭᠤᠯ ᠦᠰᠦᠭ ', //String.fromCharCode(13)+String.fromCharCode(10)
		},
		keyboardOpen:true,
		focusId:'textbox-1'
	},
	 /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		// setInterval(()=>{
		// 	this.setData({
		// 		'text':'a',
		// 		'delete': 'delete'
		// 	})
		// }, 2000);
	},
	onEditorChange(event){
		console.log('focus',event);
		if(event.detail.focus){
			this.setData({
				'focusId':event.detail.focus,
				'keyboardOpen': true
			})
		}else if(event.detail.cursorPreWord){
			// 计算联想词
		}
	},
	onOutput(event){
		if(event.detail.type==='close'){
			this.setData({focusId : ''});
		}else{
			this.setData({ 'insert':event.detail });
		}
	},
	onCommit(event){
		this.setData({
			insert: event.detail
		});
	},
	onClose(event){
		console.log('onClose',event);
	},
	onEdit(event){
		this.setData({
			keyboardOpen:true, 
		})
	}
})