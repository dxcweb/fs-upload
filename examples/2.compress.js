/**
 * Created by guowei on 17/3/31.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Upload from 'fs-upload'
class Compress extends Component {
    state = {
        originalSize: [],
        compressSize: [],
        dataURL: [],
    };

    onUploadChange(files) {
        //Upload.filesToDataURL(files).then((dataURL2)=> {
        //    this.setState({dataURL2});
        //});
        const originalSize = [];
        for (let i = 0, file; file = files[i]; i++) {
            originalSize.push(file.size);
        }
        const compressSize = [];
        Upload.compressImage(files).then((afterCompress)=> {
            for (let i = 0, file; file = afterCompress[i]; i++) {
                compressSize.push(file.size);
            }
            Upload.filesToDataURL(afterCompress).then((dataURL)=> {
                this.setState({dataURL, originalSize, compressSize});
            });
        });

    }

    render() {
        const {dataURL,originalSize,compressSize}=this.state;
        return (
            <div style={{padding:40}}>
                <Upload onChange={this.onUploadChange.bind(this)}
                        style={{padding:5,border:"1px solid",width: 150,marginTop:10}}>
                    点击压缩图片上传
                </Upload>
                <br />
                {dataURL.map((row, i)=> {
                    return <div key={i}>
                        <p>压缩前:{originalSize[i]}字节 压缩后:{compressSize[i]}字节</p>
                        <img src={row} style={{width:200,height:200}}/>
                    </div>
                })}
            </div>
        )
    }
}
ReactDOM.render(
    <Compress />,
    document.getElementById('__react-content')
);