import NodePath from 'path'
import includePaths from 'rollup-plugin-includepaths'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupCopy from 'rollup-plugin-copy'
import { terser } from 'rollup-plugin-terser'
import Package from '../package.json'

const resolveFile = path => NodePath.resolve(__dirname, '..', path)

const externalPackages = [
  'react',
  'react-dom',
  '@tarojs/components',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react'
]

// 需要映射tsconfig.absolute.path.json中的绝对路径
const includePathOptions = {
  include: {},
  paths: ['./', 'src'],
  external: ['dist', 'lib', 'node_modules', 'config'],
  extensions: ['.js', '.json', '.html', 'scss', 'sass', 'ts', 'tsx']
}

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: resolveFile(Package.module),
      format: 'es',
      sourcemap: true
    }
  ],
  external: externalPackages,
  plugins: [
    includePaths(includePathOptions),
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    RollupCommonjs({
      include: /\/node_modules\//
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: resolveFile('tsconfig.rollup.json')
    }),
    RollupCopy({
      targets: [
        {
          src: resolveFile('src/style'),
          dest: resolveFile('dist')
        }
      ]
    }),
    terser()
  ]
}
