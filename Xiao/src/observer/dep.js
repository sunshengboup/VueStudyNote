/* @flow */
import { log, warn } from '../util'

import type Watcher from './watcher'
import { remove } from '../util/index'

let uid = 0

/**
 *  Dep （Dependent），表示：被观察对象。
 *
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
export default class Dep {
  // 在watcher里面调用render函数的时候会有值，其他时候为空
  static target: ?Watcher

  id: number
  subs: Array<Watcher>

  constructor() {
    this.id = uid++
    this.subs = []

    log('[Dep] _INIT_ ')
  }

  addSub(sub: Watcher) {
    this.subs.push(sub)
  }

  removeSub(sub: Watcher) {
    remove(this.subs, sub)
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify() {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null
const targetStack = []

export function pushTarget (_target: Watcher) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}

export function popTarget () {
  Dep.target = targetStack.pop()
}
