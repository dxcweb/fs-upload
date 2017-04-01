/**
 * Created by guowei on 17/3/31.
 */
import Promise from 'bluebird'
const filesToDataURL = (files)=> {
    if (typeof files != "object") {
        return false;
    }
    if (files instanceof Array) {
        return new Promise((resolve, reject)=> {
            const dataURL = [];
            let i = 0;
            const handle = ()=> {
                if (files.length == i) {
                    resolve(dataURL);
                    return false;
                }
                const file = files[i];
                fileToDataURL(file).then((res)=> {
                    dataURL.push(res);
                    i++;
                    handle();
                });
            };
            handle();
        });

    } else {
        return fileToDataURL(files);
    }
};
const fileToDataURL = (file)=> {
    return new Promise((resolve, reject)=> {
        var a = new FileReader();
        a.onload = (e)=> {
            resolve(e.target.result)
        };
        a.readAsDataURL(file);
    });
};
const canvasCompress = (file, ratio)=> {
    return new Promise((resolve, reject)=> {
        fileToDataURL(file).then((res)=> {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const img = new Image();
            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);
                const dataURL = canvas.toDataURL('image/jpeg', ratio);
                const blob = dataURLtoBlob(dataURL);
                if (file.size < blob.size) {
                    resolve(file)
                } else {
                    resolve(blob);
                }
            };
            img.src = res;
        });
    });

};
const compressImage = (files, ratio = 0.9)=> {
    if (typeof files != "object") {
        return false;
    }
    if (files instanceof Array) {
        return new Promise((resolve, reject)=> {
            const blobs = [];
            let i = 0;
            const handle = ()=> {
                if (files.length == i) {
                    resolve(blobs);
                    return false;
                }
                const file = files[i];
                canvasCompress(file, ratio).then((blob)=> {
                    blobs.push(blob);
                    i++;
                    handle();
                });
            };
            handle();
        });

    } else {
        return canvasCompress(files, ratio);
    }
};
const dataURLtoBlob = (dataurl)=> {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
};
//const dataURLToCanvas = (dataURL)=> {
//    return new Promise((resolve, reject)=> {
//
//    });
//};
export default {filesToDataURL, compressImage}