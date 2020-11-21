# xnime-wxapp

讯诺蒙古文输入法微信小程序演示版

## 功能简介
本插件为蒙古文微信小程序提供蒙古文输入编辑的功能。

小程序的使用者手机上无需安装蒙古文输入法。

小程序收到统一编码的文本,使文本显示和处理准确率提高。

本插件提供一个组件（component）。

```
<keyboard 
    code-type="输出编码类型" 
    copy="复制" 
    paste="粘贴" 
    ime-state="{ {xnImeState}}" 
    bindimecommit="onCommit" 
    bindimeclose="onClose" 
/>
```

- 1 . 组件的入参(属性)

`code-type` 输出编码类型，可选值为：`delehi`|`menk`|`menk-old`|`minwei`|`standard` 。 分别标识 德力海国标码|蒙科立国标码|蒙科立旧编码|民委共享工程编码|国际标准编码

`copy` 是否开启复制功能， 默认开启

`paste` 是否开启粘贴功能， 默认关闭

`ime-state` 输入法状态，数据格式为:

```
  {
    id: 'sadfasdf',  //为此次编辑 定义一个标识。也可以来自你页面中的表单控件标识符。
    text: 'ᠮᠣᠩᠭᠣᠯ ᠦᠭᠡ', // 你要编辑的蒙古文内容
    keyboardOpen: true, //是否要打开键盘。true为打开， false为关闭
  }
```

- 2 . 组件事件

此组件需要一个入参配置。和触发两种事件。

`imecommit`: 用户在插件种编辑完内容提交后触发。事件对象中可获取编辑内容（text）和内容标识（id）。

`imeclose`: 用户在插件中关闭插件窗口后触发。事件对象中可获取编辑内容（text）和内容标识（id）。

## 插件使用方法
- 1 . `app.json` 文件种添加如下代码：

```
    "plugins": {
        "imePlugin": {
            "version": "2.0.0", // （文档版本可能陈旧）请选用最新版本插件
            "provider": "wx2a9f47650eb7495d"
        }
    },
```

- 2 . 需要使用插件的页面的 .json 文件中（如index.json）增加如下代码：

```
  "usingComponents": {
    "keyboard": "plugin://imePlugin/keyboard"
  }
```

- 3 . 需要使用插件的页面的js文件（如`index.js`）开头增加如下代码：

```
  var plugin = requirePlugin("imePlugin");
```
- 4 . 通过更改 组件的的属性ime-state来启动插件。

- 5 . 处理插件触发的两个事件。

## 完整例子代码

`index.js`

```
var plugin = requirePlugin("imePlugin");
Page({
    data:{
        text: 'ᠮᠣᠩᠭᠣᠯ ᠦᠭᠡ',
        xnImeState:{
            keyboardOpen:false, //'true'
            id:'123',
            text:'',
        }
    },
    onCommit(event){
        this.setData({
            text: event.detail.text
        });
        console.log('onCommit',event);
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
    }
})
```

`index.json`

```
{
  "usingComponents": {
    "keyboard": "plugin://imePlugin/keyboard"
  }
}
```

`index.wxml`

```
<view style="writing-mode:vertical-lr;width:90%; height:200px;bindtap="onEdit">
{ {text}}
</view>

<keyboard id="xvlvn-ime" ime-state="{ {xnImeState}}" bindimecommit="onCommit" bindimeclose="onClose" />
```
