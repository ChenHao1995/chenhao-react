import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { tujiaAction } from '@store/actions'
import { Input, Form, Upload, Button, UploadOutlined } from 'antd'

const Item = Form.Item
function mapStateToProps(state) {
  const { tujiaReducer } = state
  return {
    tujiaReducer
  }
}
function mapDispatchToProps(dispatch, ownprops) {
  return {
    tujiaUploadAction: (...arg) => {
      return dispatch(tujiaAction.upload.bind(null, ...arg))
    }
  }
}
@connect(mapStateToProps, mapDispatchToProps)
export default class TujiaUpload extends Component {
  componentDidMount() {
    this.props.tujiaUploadAction({ a: 1 })
  }
  render() {
    console.log(this.props)
    return (
      <Fragment>
        <div>途家上传</div>
        <Form>
          <Item label="subfolder">
            <Input />
          </Item>
          <Item label="图片">
            <Upload
              onChange={(...data) => {
                console.log(data)
              }}
            >
              <Button>Upload</Button>
            </Upload>
          </Item>
        </Form>
      </Fragment>
    )
  }
}
