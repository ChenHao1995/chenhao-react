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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var MyComponent = /** @class */ (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyComponent.prototype.render = function () {
        return <span>{this.props.foo}</span>;
    };
    return MyComponent;
}(react_1.default.Component));
<MyComponent foo="bar"/>; // 正确
<MyComponent foo={0}/>; // 错误
// questionId不能重复
[
    {
        moduleTitle: "订单问题",
        moduleId: 1,
        children: [
            {
                questionId: 1,
                questionTitle: "我需要客人的联系方式",
                content: "<div>進入【全部訂單】查看所有訂單信息。<div>"
            },
            {
                questionId: 2,
                questionTitle: "我需要客人的联系方式",
                content: "<div>進入【全部訂單】查看所有訂單信息。<div>"
            }
        ]
    },
    {
        moduleTitle: "产品使用问题",
        moduleId: 2,
        children: [
            {
                questionId: 3,
                questionTitle: "收到订单如何确认",
                content: "<div>進入【全部訂單】查看所有訂單信息。<div>"
            }
        ]
    }
];
// order
[
    {
        moduleId: 1,
        moduleTitle: "订单问题",
        childrenOrder: [
            {
                questionId: 3,
                questionTitle: "收到订单如何确认"
            },
            {
                questionId: 4,
                questionTitle: "收到订单如何确认"
            },
            {
                questionId: 5,
                questionTitle: "收到订单如何确认"
            }
        ]
    },
    {
        moduleId: 2,
        moduleTitle: "订单问题",
        childrenOrder: [
            {
                questionId: 6,
                questionTitle: "收到订单如何确认"
            },
            {
                questionId: 7,
                questionTitle: "收到订单如何确认"
            },
            {
                questionId: 8,
                questionTitle: "收到订单如何确认"
            }
        ]
    }
];
