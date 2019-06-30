const fs = require('fs')
const xlsx = require('node-xlsx')
var pdftext = require('pdf-textstring')

// fs.readFile(
//   'C:/Users/陈浩/Desktop/2017-2018供应链.xlsx',
//   'utf8',
//   (err, data) => {
//     if (err) throw err
//     console.log(data)
//   }
// )

const workSheetsFromBuffer = xlsx.parse(
  fs.readFileSync('C:/Users/陈浩/Desktop/2017-2018供应链.xlsx')
)
console.log(workSheetsFromBuffer[0].data[1])

// const data = [
//   [1, 2, 3],
//   [true, false, null, 'sheetjs'],
//   ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
//   ['baz', null, 'qux']
// ]
// var buffer = xlsx.build([{ name: 'mySheetName', data: data }])
// fs.appendFile('C:/Users/陈浩/Desktop/result.xlsx', buffer, err => {
//   if (err) throw err
//   console.log('数据已追加到文件')
// })

// pdftext.setBinaryPath_PdfToText(
//   'C:/Users/陈浩/Downloads/xpdf-tools-win-4.01.01/xpdf-tools-win-4.01.01/bin64/pdftotext.exe'
// )
// pdftext.setBinaryPath_PdfFont(
//   'C:/Users/陈浩/Downloads/xpdf-tools-win-4.01.01/xpdf-tools-win-4.01.01/bin64/pdffonts.exe'
// )
// pdftext.pdftotext(
//   'C:/Users/陈浩/Desktop/pdffile/002732：2018年年度报告.PDF',
//   function(err, data) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data.replace(/S/, ','))
//     }
//   }
// )

var extract = require('pdf-text-extract')
extract('C:/Users/陈浩/Desktop/pdffile/002732：2018年年度报告.pdf', function(
  err,
  pages
) {
  if (err) {
    console.dir(err)
    return;
  }
  console.dir(pages)
})
