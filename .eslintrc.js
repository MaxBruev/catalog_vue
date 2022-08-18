module.exports = {
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/typescript/recommended'
  ],
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    semi: 'off',
    camelcase: ['off'],
    'arrow-parens': 'off',
    'arrow-spacing': 'error',
    'array-bracket-spacing': 'off',
    'default-param-last': 'off',
    'dot-notation': [2, { allowPattern: '^[a-z]' }],
    'explicit-member-accessibility': 'off',
    'no-useless-constructor': 'off',
    'object-curly-spacing': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true
      }
    ],
    'keyword-spacing': 'error',
    'key-spacing': 'error',
    'no-trailing-spaces': 'error',
    'switch-colon-spacing': 'error',
    'space-before-function-paren': ['error', 'never'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    yoda: ['error', 'never'],
    'max-params': [
      'error',
      {
        max: 6
      }
    ],
    'comma-spacing': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/no-v-html': 'off',
    'vue/no-reserved-keys': 'off',
    "vue/no-v-model-argument": "off",
    "vue/valid-attribute-name": "off",
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'CONDITIONALS',
          'LIST_RENDERING',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'CONTENT',
          'GLOBAL',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          ['RENDER_MODIFIERS', 'SLOT'],
          'EVENTS'
        ],
        alphabetical: false
      }
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'layout',
          'components',
          'mixins',
          'model',
          ['props', 'propsData'],
          'validate',
          'middleware',
          ['asyncData', 'data', 'fetch'],
          'methods',
          'watch',
          'watchQuery',
          'computed',
          'LIFECYCLE_HOOKS',
          'head',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          'extends',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'directives',
          'filters',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'emits',
          'setup',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: [
          'Header',
          'Footer',
          'Table',
          'Form',
          'Details',
          'Menu',
          'Output'
        ]
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ],
    'vue/valid-model-definition': 'off',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/keyword-spacing': 'error',
    'vue/key-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/prop-name-casing': ['off'],
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/multi-word-component-names': ["off"],
    'vue/no-reserved-component-names': ["off"],
    'vue/max-attributes-per-line': ["error", {
      "singleline": {
        "max": 3
      },
      "multiline": {
        "max": 1
      }
    }]
  },
  overrides: [
    {
      files: ['src/typescript/**/*.ts', 'src/store/**/*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json']
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/non-nullable-type-assertion-style': ['error'],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/default-param-last': ['error'],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/member-delimiter-style':
          [
            'error',
            {
              multiline: {
                delimiter: 'semi',
                requireLast: false
              },
              singleline: {
                requireLast: false
              }
            }
          ],
        '@typescript-eslint/member-ordering': [
          'error',
          {
            classes: [
              'public-field',
              'protected-field',
              'private-field',
              'constructor',
              'public-constructor',
              'protected-constructor',
              'private-constructor',
              'public-method',
              'protected-method',
              'private-method'
            ],
            interfaces: ['field', 'constructor', 'method', 'signature'],
            typeLiterals: ['field', 'constructor', 'method', 'signature']
          }
        ],
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        '@typescript-eslint/no-empty-interface': [
          'error',
          { allowSingleExtends: false }
        ],
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/object-curly-spacing': [
          'error',
          'always',
          {
            arraysInObjects: false,
            objectsInObjects: false
          }
        ]
      }
    },
    {
      files: ['src/store/**/*.ts'],
      parserOptions: {
        project: ['./tsconfig.json']
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
      }
    },
    {
      files: ['*.vue'],
      rules: {
        'vue/attribute-hyphenation': [
          'error',
          'never',
          { ignore: ['custom-prop'] }
        ]
      }
    }
  ]
};
