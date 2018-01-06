//@flow
//copy from D:\OutPut\VUE\vue\src\core\util\debug.js

import { noop } from '../shared/util'

export let warn = noop
export let log = noop
export let error = noop

if (process.env.NODE_ENV !== 'production') {
  error = warn = (msg) => {
    console.error(`[Xiao warn]: ${msg}`)
  }

  log = console.log
}
