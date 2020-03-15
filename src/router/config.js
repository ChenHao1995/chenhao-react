const config = [
  {
    path: '/app/index',
    componentPath: () => import('../view/StarScore')
  },
  {
    path: '/app/drop',
    componentPath: () => import('../view/DropTable')
  },
  {
    path: '/app/signature',
    componentPath: () => import('../view/signature')
  },
  {
    path: '/app/exceldispose',
    componentPath: () => import('../view/ExcelDispose')
  },
  {
    path: '/app/indexdb',
    componentPath: () => import('../view/IndexDB')
  },
  {
    path: '/app/TujiaUpload',
    componentPath: () => import('../view/TujiaUpload')
  },
  {
    path: '/app/LargeForm',
    componentPath: () => import('../view/LargeForm')
  }
]
export default config
