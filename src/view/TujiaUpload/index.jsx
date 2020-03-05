import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { tujiaAction } from '@store/actions'
import { Input, Form, Upload, Button, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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
  state = {
    subfolder: 'anban'
  }
  componentDidMount() {}
  render() {
    const {
      tujiaReducer: { urlList }
    } = this.props
    console.log(this.props)
    return (
      <Fragment>
        <h1>上传图片</h1>
        <Form>
          <Item label="subfolder">
            <Input
              value={this.state.subfolder}
              onChange={e => {
                this.setState({
                  subfolder: e.target.value
                })
              }}
            />
          </Item>
          <Item label="图片">
            <Upload
              fileList={[]}
              customRequest={options => {
                console.log(options)
                const { onSuccess, file, onProgress, onError } = options
                const formData = new FormData()
                formData.append('filedata', file)
                formData.append('subfolder', 'anban')
                console.log(formData)
                this.props.tujiaUploadAction(formData)
                return { abort() {} }
              }}
              onChange={(...data) => {
                console.log(data)
              }}
            >
              <Button>
                <UploadOutlined />
                Upload
              </Button>
            </Upload>
          </Item>
        </Form>
        <div>
          {urlList.map((value, key) => {
            return (
              <div key={key}>
                <img src={value.completeUrl} alt="" width="100" height="100" />
                <div>
                  路径：<span>{value.url}</span>
                  <CopyToClipboard
                    text={value.url}
                    onCopy={() => {
                      message.success('复制成功')
                    }}
                  >
                    <Button type="primary">复制</Button>
                  </CopyToClipboard>
                </div>
                <div>
                  全路径<span>{value.completeUrl}</span>
                  <CopyToClipboard
                    text={value.completeUrl}
                    onCopy={() => {
                      message.success('复制成功')
                    }}
                  >
                    <Button type="primary">复制</Button>
                  </CopyToClipboard>
                </div>
              </div>
            )
          })}
        </div>
      </Fragment>
    )
  }
}
