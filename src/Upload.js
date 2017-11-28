/**
 * Created by guowei on 17/3/31.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import utils from './utils'
class Upload extends Component {

    static defaultProps = {
        paste: true,//是否支持粘贴
        drop: true,//是否支持拖拽
        domain: 'document',//域 document或者self 指drop或paste在什么域上
        allow: "png|jpg|jpge",//允许上传文件格式 比如:image或者image|zip
        onError: (msg, type)=> {
        },
        onChange: ()=> {
        }
    };

    componentDidMount() {
        const {paste,drop,domain}=this.props;
        let dom = null;
        if (domain == 'document') {
            dom = document;
        } else {
            dom = this.refs.self;
        }

        if (drop) {
            this.stopBrowserAction = (e)=> {
                e.stopPropagation();
                e.preventDefault();
            };
            //阻止浏览器默行为。
            document.addEventListener('dragover', this.stopBrowserAction);
            document.addEventListener('drop', this.stopBrowserAction);
            this.dropEvent = (e)=> {
                e.stopPropagation();
                e.preventDefault();
                this.drop(e);
            };
            //添加拖拽事件
            dom.addEventListener('drop', this.dropEvent);
        }
        if (paste) {
            this.pasteEvent = (e)=> {
                this.paste(e);
            };
            dom.addEventListener('paste', this.pasteEvent);
        }
    }

    //组件移除前调用。
    componentWillUnmount() {
        const {paste,drop,domain}=this.props;
        let dom = null;
        if (domain == 'document') {
            dom = document;
        } else {
            dom = this.refs.self;
        }
        document.removeEventListener('dragover', this.stopBrowserAction);
        document.removeEventListener('drop', this.stopBrowserAction);
        dom.removeEventListener('drop', this.dropEvent);
        dom.removeEventListener('paste', this.pasteEvent);

    }

    //过滤
    filter(file) {
        const {allow,onError}=this.props;
        //if (!/image\/\w+/.test(file.type)) {
        //    console.log('文件必须为图片！');
        //    return false;
        //}
        const index = file.name.indexOf('.');
        if (index < 0) {
            console.log('文件后缀是不允许的!');
            onError("文件后缀是不允许的!");
            return false;
        }
        const ext = file.name.substr(index + 1).toLowerCase();
        var reg = new RegExp(`(.*)(${allow})+(.*)`);
        if (!reg.test(ext)) {
            console.log('文件后缀是不允许的!');
            onError("文件后缀是不允许的!");
            return false;
        }
        return true;
    }

    //拖拽
    drop(e) {
        const fileList = event.dataTransfer.files;
        if (!fileList || !fileList.length) return;
        const files = [];
        for (let i = 0, item; item = fileList[i]; i++) {
            if (this.filter(item)) {
                files.push(item);
            }
        }
        const {onChange,onError}=this.props;
        if (files.length == 0) {
            onError('文件类型错误!');
            return false;
        }
        onChange(files);
    }

    //粘贴
    paste(e) {
        if (e.clipboardData && e.clipboardData.items && e.clipboardData.items.length) {
            const files = [];
            for (let i = 0, item; item = e.clipboardData.items[i]; i++) {
                if (this.filter(item)) {
                    files.push(item.getAsFile());
                }
            }
            const {onChange,onError}=this.props;
            if (files.length == 0) {
                onError('文件类型错误!');
                return false;
            }
            //console.log(files);
            onChange(files);
        }
    }

    onClick() {
        this.refs.inputFile.click();
    }

    onInputChange(e) {
        var file = e.target.files[0];
        if (file == null) {
            return false;
        }
        const files = [];
        if (this.filter(file)) {
            files.push(file);
        }
        const {onChange,onError}=this.props;
        if (files.length <= 0) {
            onError('文件类型错误!');
            return false;
        }
        this.refs.inputFile.value = '';
        onChange(files);
    }

    render() {
        const {children,onClick,paste,drop,domain,allow,onError,onChange,...other}=this.props;
        return (
            <div {...other} onClick={this.onClick.bind(this)} ref="self">
                <input onChange={this.onInputChange.bind(this)} type="file" ref="inputFile" style={{display:'none'}}/>
                {children}
            </div>
        )
    }
}
Upload.filesToDataURL = utils.filesToDataURL;
Upload.compressImage = utils.compressImage;

export default Upload;