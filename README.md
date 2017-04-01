# fs-upload
截图后粘贴、拖拽和点击上传预览，图片压缩。
## install

```
npm install fs-upload --save
```
## Development

```
npm install
npm start
```
## Example
[http://github.dxcweb.com/fs-upload/](http://github.dxcweb.com/fs-upload/ "http://github.dxcweb.com/fs-upload/")

## API
<table class="table table-bordered table-striped">
 <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
<tbody>
    <tr>
      <td>paste</td>
      <td>Bool</td>
      <td>true</td>
      <td>是否支持粘贴</td>
    </tr>
     <tr>
      <td>drop</td>
      <td>Bool</td>
      <td>true</td>
      <td>是否支持拖拽</td>
    </tr>
	<tr>
      <td>domain</td>
      <td>String</td>
      <td>document</td>
      <td>域 document或者self 指drop或paste在什么域上</td>
    </tr>
	<tr>
      <td>allow</td>
      <td>String</td>
      <td>image</td>
      <td>允许上传文件格式 比如:image或者image|zip</td>
    </tr>
	<tr>
      <td>onError</td>
      <td>Function</td>
      <td>null</td>
      <td>类型错误时调用参数（msg, type）</td>
    </tr>
	<tr>
      <td>onChange</td>
      <td>Function</td>
      <td>null</td>
      <td>输入参数files</td>
    </tr>
</tbody>
</table>