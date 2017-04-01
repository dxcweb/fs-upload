/**
 * Created by guowei on 17/4/1.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Upload from 'fs-upload'
class Multiple extends Component {
    state = {
        dataURL: [],
        dataURL2: []
    };

    onUploadChange(files) {
        Upload.filesToDataURL(files).then((dataURL)=> {
            this.setState({dataURL});
        });
    }
    onUploadChange2(files) {
        Upload.filesToDataURL(files).then((dataURL2)=> {
            this.setState({dataURL2});
        });
    }

    render() {
        const {dataURL,dataURL2}=this.state;
        return (
            <div style={{padding:40}}>
                <Upload domain="self" onChange={this.onUploadChange.bind(this)}
                        style={{padding:5,border:"1px solid",width: 200,height:200,marginTop:10}}>
                    点击上传<br />
                    截图后粘贴、拖拽图片到这里上传
                </Upload>
                <br />
                {dataURL.map((row, i)=> {
                    return <div key={i}>
                        <img src={row} style={{width:200,height:200}}/>
                    </div>
                })}

                <Upload domain="self" onChange={this.onUploadChange2.bind(this)}
                        style={{padding:5,border:"1px solid",width: 200,height:200,marginTop:10}}>
                    点击上传<br />
                    截图后粘贴、拖拽图片到这里上传
                </Upload>
                <br />
                {dataURL2.map((row, i)=> {
                    return <div key={i}>
                        <img src={row} style={{width:200,height:200}}/>
                    </div>
                })}
            </div>
        )
    }
}
ReactDOM.render(
    <Multiple />,
    document.getElementById('__react-content')
);