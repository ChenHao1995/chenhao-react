import React, { Component, Fragment } from 'react'


export default class IndexDB extends Component {
  
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var request = window.indexedDB.open('chensssss1', '2')
    var db
    request.onerror = function (event) {
      console.log('数据库打开报错')
    }
    request.onsuccess = function (event) {

      db = request.result
      console.log(db)
      
      console.log('数据库打开成功')
    }
    request.onupgradeneeded = function (event) {
      db = event.target.result
      var transaction=event.target.transaction
      // db = request.result
      var objectStore = db.createObjectStore('person', { keyPath: 'id' })
      objectStore.createIndex('name', 'name', { unique: false })
      objectStore.createIndex('email', 'email', { unique: true })
      var req = transaction.objectStore('person').add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' })
      req.onsuccess = function (event) {
        console.log('数据写入成功')
      }
      req.onerror = function (event) {
        console.log('数据写入失败')
      }
      
      // alert('onupgradeneeded')
    }
    function add(db) {
      var request = db.transaction(['person'], 'readwrite')
        .objectStore('person')
        .add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' })
    
      request.onsuccess = function (event) {
        console.log('数据写入成功')
      }
      request.onerror = function (event) {
        console.log('数据写入失败')
      }
    }
    console.log(db)
    console.log(request)
  }
  render() {
    return (
      <Fragment>
        IndexDB
      </Fragment>
    )
  }
}
