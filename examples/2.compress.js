webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(227);


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _fsUpload = __webpack_require__(185);
	
	var _fsUpload2 = _interopRequireDefault(_fsUpload);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by guowei on 17/3/31.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Compress = function (_Component) {
	    _inherits(Compress, _Component);
	
	    function Compress() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Compress);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	            originalSize: [],
	            compressSize: [],
	            dataURL: []
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Compress.prototype.onUploadChange = function onUploadChange(files) {
	        var _this2 = this;
	
	        //Upload.filesToDataURL(files).then((dataURL2)=> {
	        //    this.setState({dataURL2});
	        //});
	        var originalSize = [];
	        for (var i = 0, file; file = files[i]; i++) {
	            originalSize.push(file.size);
	        }
	        var compressSize = [];
	        _fsUpload2.default.compressImage(files).then(function (afterCompress) {
	            for (var _i = 0, _file; _file = afterCompress[_i]; _i++) {
	                compressSize.push(_file.size);
	            }
	            _fsUpload2.default.filesToDataURL(afterCompress).then(function (dataURL) {
	                _this2.setState({ dataURL: dataURL, originalSize: originalSize, compressSize: compressSize });
	            });
	        });
	    };
	
	    Compress.prototype.render = function render() {
	        var _state = this.state,
	            dataURL = _state.dataURL,
	            originalSize = _state.originalSize,
	            compressSize = _state.compressSize;
	
	        return _react2.default.createElement(
	            'div',
	            { style: { padding: 40 } },
	            _react2.default.createElement(
	                _fsUpload2.default,
	                { onChange: this.onUploadChange.bind(this),
	                    style: { padding: 5, border: "1px solid", width: 150, marginTop: 10 } },
	                '\u70B9\u51FB\u538B\u7F29\u56FE\u7247\u4E0A\u4F20'
	            ),
	            _react2.default.createElement('br', null),
	            dataURL.map(function (row, i) {
	                return _react2.default.createElement(
	                    'div',
	                    { key: i },
	                    _react2.default.createElement(
	                        'p',
	                        null,
	                        '\u538B\u7F29\u524D:',
	                        originalSize[i],
	                        '\u5B57\u8282 \u538B\u7F29\u540E:',
	                        compressSize[i],
	                        '\u5B57\u8282'
	                    ),
	                    _react2.default.createElement('img', { src: row, style: { width: 200, height: 200 } })
	                );
	            })
	        );
	    };
	
	    return Compress;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Compress, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=2.compress.js.map