import { name } from '../package.json'
import rollupVue from 'rollup-plugin-vue'
import rollupCss from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'


const file = (type) => `dist/${ name }-${ type }.js`
const override = { compilerOptions: { declaration: true }, exclude: ['node_modules'] }
export { file, name }
export default {
    input: 'src/index.ts',
    output: {
        name,
        file: file('esm'),
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        rollupVue(),
        rollupCss({ output: 'bundle.css' }),
        typescript({ tsconfigOverride: override }),
    ],
    external: ['vue', 'lodash']
}
