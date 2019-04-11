import React, { Component, Fragment } from "react";

interface Props {
  foo: string;
}

class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>;
  }
}

<MyComponent foo="bar" />; // 正确
<MyComponent foo={0} />; // 错误

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
