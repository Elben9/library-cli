import { defineBuildConfig } from 'unbuild'
// import fg from 'fast-glob'


export default defineBuildConfig({
  entries: [
    // ...fg.sync('src/*.ts').map(i => i.slice(0, -3)),
    './src/index'
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
