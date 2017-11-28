webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
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
	
	
	var Simple = function (_Component) {
	    _inherits(Simple, _Component);
	
	    function Simple() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Simple);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	            dataURL: []
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Simple.prototype.onUploadChange = function onUploadChange(files) {
	        var _this2 = this;
	
	        _fsUpload2.default.filesToDataURL(files).then(function (dataURL) {
	            _this2.setState({ dataURL: dataURL });
	        });
	    };
	
	    Simple.prototype.render = function render() {
	        return _react2.default.createElement(
	            'div',
	            { style: { padding: 40 } },
	            _react2.default.createElement(
	                'p',
	                null,
	                '\u4E0A\u4F20\u7EC4\u4EF6\u6CA1\u5E26\u4EFB\u4F55\u6837\u5F0F,\u53EA\u662F\u4E00\u4E2Adiv,\u53EF\u4EE5\u8D4B\u4E88\u5B83\u5404\u79CD\u6837\u5F0F\u6216\u8005\u8BA9\u5B83\u6210\u4E3A\u4F60\u4E0A\u4F20UI\u7684\u7236\u5BB9\u5668'
	            ),
	            _react2.default.createElement(
	                'p',
	                null,
	                '\u8FD8\u53EF\u4EE5\u4F7F\u7528\u622A\u56FE\u540E\u7C98\u8D34\u4E0A\u4F20\u6216\u62D6\u62FD\u81F3\u9875\u9762\u4E2D\u7684\u4EFB\u610F\u4F4D\u7F6E\u4E0A\u4F20'
	            ),
	            _react2.default.createElement(
	                _fsUpload2.default,
	                { onChange: this.onUploadChange.bind(this),
	                    style: { padding: 5, border: "1px solid", width: 100, marginTop: 10 } },
	                '\u70B9\u51FB\u4E0A\u4F20'
	            ),
	            _react2.default.createElement('br', null),
	            this.state.dataURL.map(function (row, i) {
	                return _react2.default.createElement('img', { src: row, style: { width: 200, height: 200 }, key: i });
	            })
	        );
	    };
	
	    return Simple;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Simple, null), document.getElementById('__react-content'));

/***/ })
]);
//# sourceMappingURL=1.simple.js.map