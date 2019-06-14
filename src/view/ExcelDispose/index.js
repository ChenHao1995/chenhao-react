import React, { Component, Fragment } from 'react'
import XLSX from 'xlsx'

export default class ExcelDispose extends Component {
  table = null
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.table)
    var workbook = XLSX.utils.book_new()
    var ws1 = XLSX.utils.table_to_sheet(this.table)
    XLSX.utils.book_append_sheet(workbook, ws1, 'Sheet1')

    XLSX.writeFile(workbook, 'out.xlsb')

    var worksheet = workbook.Sheets[workbook.SheetNames[0]]
    var container = document.getElementById('tableau')
    container.innerHTML = XLSX.utils.sheet_to_html(worksheet)
  }
  render() {
    return (
      <Fragment>
        <header>ExcelDispose</header>
        <table
          ref={node => {
            this.table = node
          }}
        >
          <thead>
            <tr>
              <th>姓名</th>
              <th>年级</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>陈浩</td>
              <td>一年级</td>
            </tr>
          </tbody>
        </table>
        <div id="tableau" />
      </Fragment>
    )
  }
}
