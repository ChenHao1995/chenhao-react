"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
//import {render} from 'react-dom'
//import { Router,hashHistory,Route,BrowserRouter,Switch } from 'react-router-dom'
//import { createStore } from 'redux'
var prop_types_1 = require("prop-types");
//import Api from '../api'
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
require("./dropTable.less");
var source = {
    width: 100,
    height: 100,
    background: 'red'
};
var source2 = {
    width: 100,
    height: 100,
    background: 'yellow'
};
var cardSource = {
    beginDrag: function (props, monitor, component) {
        console.log(props, monitor, component);
        return {
            id: props.id
        };
    },
    endDrag: function (props, monitor, component) {
        console.log(props, monitor, component);
    }
};
function sourceCollect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging()
    };
}
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card(props) {
        return _super.call(this, props) || this;
    }
    Card.prototype.render = function () {
        var _a = this.props, isDragging = _a.isDragging, connectDragSource = _a.connectDragSource;
        return connectDragSource(<div style={source} id={1}/>);
    };
    Card = __decorate([
        react_dnd_1.DragSource('source', cardSource, sourceCollect)
    ], Card);
    return Card;
}(react_1.Component));
var cardTarget = {
    hover: function (props, monitor, component) {
        console.log(props, monitor, component);
    },
    drop: function (props, monitor, component) {
        console.log(console.log(props, monitor, component));
    }
};
function targetCollect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    function Target(props) {
        return _super.call(this, props) || this;
    }
    Target.prototype.render = function () {
        var connectDropTarget = this.props.connectDropTarget;
        return connectDropTarget(<div style={source2}>target</div>);
    };
    Target = __decorate([
        react_dnd_1.DropTarget('source', cardTarget, targetCollect)
    ], Target);
    return Target;
}(react_1.Component));
Card.propTypes = {
    isDragging: prop_types_1.PropTypes.any,
    connectDragSource: prop_types_1.PropTypes.any
};
Target.propTypes = {
    isDragging: prop_types_1.PropTypes.any,
    connectDropTarget: prop_types_1.PropTypes.any
};
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content(props) {
        return _super.call(this, props) || this;
    }
    Content.prototype.render = function () {
        return (<div>
        <Card />
        <Target />
      </div>);
    };
    Content = __decorate([
        react_dnd_1.DragDropContext(react_dnd_html5_backend_1.default)
    ], Content);
    return Content;
}(react_1.Component));
exports.default = Content;
