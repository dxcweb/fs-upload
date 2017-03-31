/**
 * Created by guowei on 17/3/31.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Upload from 'fs-upload'
class Simple extends Component {
    state = {
        dataURL: []
    };

    onUploadChange(files) {
        Upload.filesToDataURL(files).then((dataURL)=> {
            this.setState({dataURL});
        });
    }

    render() {
        return (
            <div style={{padding:40}}>
                <p>上传组件没带任何样式,只是一个div,可以赋予它各种样式或者让它成为你上传UI的父容器</p>
                <p>还可以使用截图后粘贴上传或拖拽至页面中的任意位置上传</p>
                <Upload onChange={this.onUploadChange.bind(this)}
                        style={{padding:5,border:"1px solid",width: 100,marginTop:10}}>
                    点击上传
                </Upload>
                <br />
                {this.state.dataURL.map((row, i)=> {
                    return <img src={row} style={{width:200,height:200}} key={i}/>
                })}
            </div>
        )
    }
}
ReactDOM.render(
    <Simple />,
    document.getElementById('__react-content')
);