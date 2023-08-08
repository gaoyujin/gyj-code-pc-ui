import { h } from 'vue'
import Markdown from '/@/components/Markdown.vue'

import { html as Intro } from '../../markdown/intro.md'

const md = (str: string) => h(Markdown, { content: str, key: str })
const IntroDoc = md(Intro)
import ButtonDoc from '/@/views/doc/button/index.vue'

const docMenus = {
  文档: [{ path: 'intro', component: IntroDoc, name: '介绍' }],
  通用组件: [{ path: 'button', component: ButtonDoc, name: '按钮 Button' }],
}

let docRoutes: any[] = []
for (let i in docMenus) {
  docRoutes = [...docRoutes, ...docMenus[i]]
}

export { docRoutes, docMenus }
