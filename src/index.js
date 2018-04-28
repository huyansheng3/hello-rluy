import './index.css'
import { App } from 'rluy'

App.router(require('./router')) //router文件引入

App.onError(e => {
  //全局错误
  console.log('发生错误', e)
})

//第一个参数：挂载的 DOM元素
//第二个参数：是否开启debug模式
App.run(document.getElementById('root'), true)

// registerServiceWorker();
