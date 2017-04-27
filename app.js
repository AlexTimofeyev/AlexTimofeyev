webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" style=\"height:100%;\" flex>\n\n    <div flex=50 class=\"md-whiteframe-2dp\">\n        <div layout=\"row\" layout-align=\"center center\">\n            <div layout=\"row\" style=\"width: 400px; padding-top: 8px;\"> \n                <ddf-items-edit ddf-items=\"$ctrl.items\" flex> </ddf-items-edit>  \n            </div>\n        </div>\n    </div>\n\n    <div flex=50>\n        <div layout=\"row\" layout-align=\"center center\">\n            <div layout=\"row\" style=\"width: 600px\">                 \n               <ddf-items-view ddf-items=\"$ctrl.items\" flex> </ddf-items-view>  \n            </div>\n        </div>\n    </div>\n\n</div>";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _angularMaterial = __webpack_require__(2);

var _angularMaterial2 = _interopRequireDefault(_angularMaterial);

var _angularUiTree = __webpack_require__(3);

var _angularUiTree2 = _interopRequireDefault(_angularUiTree);

var _elements = __webpack_require__(37);

var _elements2 = _interopRequireDefault(_elements);

var _common = __webpack_require__(23);

var _common2 = _interopRequireDefault(_common);

var _components = __webpack_require__(36);

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(15);

exports.default = _angular2.default.module('ddf', [_angularMaterial2.default, _angularUiTree2.default, _elements2.default, _common2.default, _components2.default]).name;


_angular2.default.module('ui.tree').config(function (treeConfig) {

    console.log(treeConfig);

    treeConfig.placeholderClass = "ddf-element-container-placeholder";
    treeConfig.dragClass = "angular-ui-tree-drag ddf-element-container-dragg";
    //angular-ui-tree-drag
    //md-whiteframe-2dp ng-scope angular-ui-tree-node layout-row
});

/* .ddf-element-container {
     background-color: white;
 }
  .ddf-element-container-dragg {
    @extend .md-whiteframe-8dp;    
     
 }*/

/*

import common     from './common';
import components from './components';
import elements   from './elements';
import services   from './services';
import factories  from './factories';
import config     from './config';
import './libs/common.js';

import 'angular-drag-and-drop-lists';
import 'angular-ui-tree';
import 'angular-local-storage';

export default angular.module('ddf', [
  services,
  factories,
  "dndLists",
  "LocalStorageModule",
  common,
  components,
  elements
]).config(config).name;
*/

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div flex layout=\"row\">\n\n  <ddf-item-loader ddf-item=item  flex class=\"\"> </ddf-item-loader>\n\n  <div layout=\"column\" layout-align=\"center center\" >\n    <a href=\"javascript:void(0)\" ng-click=\"ctrl.showConfig()\" \n      class=\"ddf_item_settings_btn material-icons\">settings</a>    \n  </div>\n\n  <div layout=\"column\" layout-align=\"center center\"  >\n   <a href=\"javascript:void(0)\" ui-tree-handle \n      class=\"ddf_item_move_btn material-icons\">open_with</a>      \n  </div> \n  \n</div>\n\n<div flex class=\"ddf-configs {{ctrl.isShowConfig?'ng-show':'ng-hide'}} \">\n  <ddf-options-loader ddf-item-options=item.options></ddf-options-loader>\n\n  <!--<input type=\"text\" ng-model=\"item.name\"><br/>\n\n  Label\n  <input type=\"text\" ng-model=\"item.config.label\"><br/>  \n\n  Placeholder\n  <input type=\"text\" ng-model=\"item.config.placeholder\"><br/>\n\n  Тип \n  <select>\n      <option value=\"text\">Text</option>\n      <option value=\"password\">Password</option>\n  </select>-->\n\n</div>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<md-input-container class=\"md-block\" >\n    <label>{{item.label}}</label>\n    <input type=\"number\" name=\"{{item.name}}\" />\n</md-input-container>";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<md-input-container class=\"md-block\" >\n    <label>{{item.label}}</label>\n    <input type=\"text\" name=\"{{item.name}}\" />\n</md-input-container>";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<ddf-item-loader \nng-if=\"options\"\nng-repeat=\"option in options\"\nddf-item=setOptionType(option)\n></ddf-item-loader>";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div ui-tree style=\"padding: 0 5px\">\n  <div ui-tree-nodes ng-model=\"items\">\n    <div layout=\"column\" \n          ng-repeat=\"item in items\" \n          ui-tree-node \n          layout=\"row\" \n          class=\"md-whiteframe-2dp\" \n          style=\"margin-bottom: 8px\">\n      <ddf-item-edit ddf-item=item></ddf-item-edit>\n    </div>\n  </div>\n</div>\n</div>";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" ng-repeat=\"item in items\" layout=\"row\" class=\"md-whiteframe-2dp\" style=\"margin-bottom: 8px \">\n    <ddf-item-loader ddf-item=item flex class=\"\"> </ddf-item-loader>\n</div>";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<md-input-container class=\"md-block\" >\n    <label>{{item.config.label||item.name}}</label>\n    <input type=\"{{item.config.type||'text'}}\"\n        ng-required=\"item.required\"        \n        name=\"{{item.name}}\" />\n</md-input-container>";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _itemsEdit = __webpack_require__(34);

var _itemsEdit2 = _interopRequireDefault(_itemsEdit);

var _itemsView = __webpack_require__(35);

var _itemsView2 = _interopRequireDefault(_itemsView);

var _itemEdit = __webpack_require__(24);

var _itemEdit2 = _interopRequireDefault(_itemEdit);

var _itemLoader = __webpack_require__(26);

var _itemLoader2 = _interopRequireDefault(_itemLoader);

var _options = __webpack_require__(33);

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('ddf.common', [_options2.default]).directive('ddfItemsEdit', _itemsEdit2.default).directive('ddfItemsView', _itemsView2.default).directive('ddfItemEdit', _itemEdit2.default).directive('ddfItemLoader', _itemLoader2.default).name;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        restrict: 'EA',
        scope: {
            item: '=ddfItem'
        },
        template: _itemEdit2.default,
        controllerAs: 'ctrl',
        controller: _itemEditController2.default
    };
};

var _itemEdit = __webpack_require__(16);

var _itemEdit2 = _interopRequireDefault(_itemEdit);

var _itemEditController = __webpack_require__(25);

var _itemEditController2 = _interopRequireDefault(_itemEditController);

__webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @ngInject */
var ItemsController = function () {
    ItemsController.$inject = ["$scope"];
    function ItemsController($scope) {
        _classCallCheck(this, ItemsController);

        this.isShowConfig = false;
        this.$scope = $scope;
    }

    _createClass(ItemsController, [{
        key: 'onSelected',
        value: function onSelected(item) {
            console.log('onSelected');
            $event.stopPropagation();
        }
    }, {
        key: 'onRemove',
        value: function onRemove(item, $event) {
            console.log('onRemove');
            $event.stopPropagation();
        }
    }, {
        key: 'onEdit',
        value: function onEdit(item, $event) {
            console.log('onEdit', item.$id);
            $event.stopPropagation();
        }
    }, {
        key: 'showConfig',
        value: function showConfig() {
            this.isShowConfig = !this.isShowConfig;
            console.log('showParams');
        }
    }]);

    return ItemsController;
}();

exports.default = ItemsController;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function ($compile, $injector) {
    return {
        restrict: 'AE',
        scope: {
            item: '=ddfItem'

        },
        transclude: false,

        link: function link(scope, element, attrs) {

            if (!angular.isObject(scope.item)) {
                console.error('itemLoader: Item empty ');
                return false;
            }
            if (!angular.isString(scope.item.type)) {
                console.error('itemLoader: Type empty ');
                return false;
            }

            var type = scope.item.type;

            if ($injector.has(attrs.$normalize('ddf-' + type + '-directive'))) {
                var template = '<ddf-' + type + ' id="el-' + scope.$id + '"></ddf-' + type + '>';
                element.append($compile(template)(scope));
            } else {
                console.error('Directive: "ddf-' + type + '" not found');
            }
        }
    };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @ngInject */
var InputTextController = function InputTextController($scope) {
    _classCallCheck(this, InputTextController);

    console.log($scope);
};
InputTextController.$inject = ["$scope"];

exports.default = InputTextController;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        restrict: 'E',

        template: __webpack_require__(17),
        controllerAs: 'ctrl',
        controller: _number2.default

    };
};

var _number = __webpack_require__(27);

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @ngInject */
var InputTextController = function InputTextController($scope) {
    _classCallCheck(this, InputTextController);

    console.log('InputTextController', $scope);
};
InputTextController.$inject = ["$scope"];

exports.default = InputTextController;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        restrict: 'E',
        template: __webpack_require__(18),
        controllerAs: 'ctrl',
        controller: _text2.default

    };
};

var _text = __webpack_require__(29);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @ngInject */
var OptionsLoaderController = function OptionsLoaderController($scope) {
    _classCallCheck(this, OptionsLoaderController);

    console.log('++++', $scope.options);
    this.optionItem = {
        type: 'optionText'
    };
};
OptionsLoaderController.$inject = ["$scope"];

exports.default = OptionsLoaderController;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function ($compile, $injector) {
    return {
        restrict: 'E',
        scope: {
            options: '=ddfItemOptions'
        },
        template: __webpack_require__(19),
        /*controllerAs: 'ctrl',
        controller: controller,*/
        link: function link(scope, element, attrs) {

            /* scope.optionItem = {
                 type: 'option-' + options.type
             }*/

            scope.setOptionType = function (option) {
                //console.log('::',option.type)
                option.type = 'option-' + option.type;
                return option;
            };
            /* let type     = 'option-' + options.type;             
             if( $injector.has( attrs.$normalize(`ddf-${type}-directive`) ) ) {
                 let template = `<ddf-${type} id="el-${scope.$id}"></ddf-${type}>`;                    
                 element.append( $compile(template)(scope) );
             } else {
                 element.append(`<p class="error"> Option Directive: "ddf-${type}" not found </p>`);
             }  */
        }
    };
};

var _optionsLoader = __webpack_require__(31);

var _optionsLoader2 = _interopRequireDefault(_optionsLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _optionsLoader = __webpack_require__(32);

var _optionsLoader2 = _interopRequireDefault(_optionsLoader);

var _text = __webpack_require__(30);

var _text2 = _interopRequireDefault(_text);

var _number = __webpack_require__(28);

var _number2 = _interopRequireDefault(_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('ddf.item.options', []).directive('ddfOptionText', _text2.default).directive('ddfOptionNumber', _number2.default).directive('ddfOptionsLoader', _optionsLoader2.default).name;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        restrict: 'EA',
        scope: {
            items: '=ddfItems'
        },
        template: _itemsEdit2.default
    };
};

var _itemsEdit = __webpack_require__(20);

var _itemsEdit2 = _interopRequireDefault(_itemsEdit);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        restrict: 'EA',
        scope: {
            items: '=ddfItems'
        },
        template: _itemsView2.default
    };
};

var _itemsView = __webpack_require__(21);

var _itemsView2 = _interopRequireDefault(_itemsView);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*import itemsEdit from './items-edit/itemsEdit';
import itemsView from './items-view/itemsView';
import itemEdit from './item-edit/itemEdit';
import itemLoader from './item-loader/itemLoader';*/

/*export default angular.module('ddf.component',[]) 
.component('ddfItemsEdit', itemsEdit)
.directive('ddfItemsView', itemsView)
.directive('ddfItemEdit', itemEdit)
.directive('ddfItemLoader', itemLoader)
.name;*/

exports.default = angular.module('ddf.components', []).name;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputText = __webpack_require__(39);

var _inputText2 = _interopRequireDefault(_inputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('ddf.elements', []).directive('ddfInputText', _inputText2.default).name;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* @ngInject */
var InputTextController = function InputTextController($scope) {
    _classCallCheck(this, InputTextController);

    if (angular.isString($scope.item.config['type'])) {
        $scope.inputType = $scope.item.config.type;
    } else {
        $scope.inputType = 'text';
    }

    console.log($scope.inputType);
};
InputTextController.$inject = ["$scope"];

exports.default = InputTextController;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return {
        restrict: 'E',
        template: __webpack_require__(22),
        controllerAs: 'ctrl',
        controller: _inputText2.default

    };
};

var _inputText = __webpack_require__(38);

var _inputText2 = _interopRequireDefault(_inputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _src = __webpack_require__(5);

var _src2 = _interopRequireDefault(_src);

var _example = __webpack_require__(4);

var _example2 = _interopRequireDefault(_example);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('exampleapp', [_src2.default]).component('exampleapp', {
    template: _example2.default,
    controller: function controller() {
        //this.model = {};

        window.iitems = [{
            type: "input-text",
            name: 'Имя',
            config: {},
            options: [{ type: 'text', 'label': 'Название поля', 'name': 'name' }],
            subitems: []
        },
        /*     ,{
                 type   : "input-text",
                 name   : 'Фамилия',
                 config : {},
                 subitems: []
             },{
                 type   : "input-text",
                 name   : 'отечство',
                 config : {},
                 subitems: []
             },*/
        {
            type: "input-text",
            name: 'Лет',
            config: { type: 'number' },
            options: [{ type: 'number', 'label': 'Максимальная длина', 'name': 'max' }],
            subitems: []
        }];

        this.items = window.iitems;
    }
});

/***/ })
],[40]);