/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue-scoped-css/vue3-recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "vue/no-export-in-script-setup": "off",
    "vue/require-default-prop": "off",
    "no-var": "error",
    "prefer-template": "warn",
    "vue/prefer-template": "warn",
    "vue-scoped-css/no-unused-selector": "off",
    "vue-scoped-css/enforce-style-type": ["error", { allows: ["scoped"] }],
    "vue/component-tags-order": [
      "error",
      {
        order: ["template", "script", "style"],
      },
    ],
    // Проверка на самозакрывающийся тег или компонент:
    // "always" — требовать самозакрытия элементов, у которых нет своего содержимого;
    // "never" — запретить самозакрытие;
    // "any" — не применять самозакрывающийся стиль.
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any", // ("never" по умолчанию) — стиль хорошо известных пустых элементов HTML
          normal: "any", // ("always" по умолчанию) — стиль известных элементов HTML за исключением пустых элементов.
          component: "always", // ("always" по умолчанию) — стиль пользовательских компонентов Vue.js.
        },
        svg: "always", // ("always" по умолчанию) — стиль известных элементов SVG.
        math: "always", // ("always" по умолчанию) — стиль известных элементов MathML.
      },
    ],
    //Проверка регистра для стиля именования компонентов в шаблоне.
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase", //  по умолчанию требует написание имен тегов в "kebab-case"
      {
        registeredComponentsOnly: true, // если true, проверяются только зарегистрированные компоненты, если false проверьте все. По умолчанию true.
        ignores: [], // имена элементов, которые следует игнорировать. Устанавливает разрешающее имя элемента. Например, пользовательские элементы или компоненты Vue со специальным именем. Вы можете установить регулярное выражение, написав его как "/^name/".
      },
    ],

    "vue/prefer-separate-static-class": "error",
    "vue/no-multiple-objects-in-class": "error",
    "vue/no-useless-v-bind": [
      "error",
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    "vue/match-component-import-name": "error",
    "vue/define-props-declaration": ["error", "type-based"],
    "vue/define-emits-declaration": ["error", "type-based"],
    "vue/define-macros-order": [
      "error",
      {
        order: ["defineProps", "defineEmits"],
      },
    ],
    "vue/no-undef-components": [
      "error",
      {
        ignorePatterns: [],
      },
    ],
    "vue/no-useless-mustaches": [
      "error",
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: true,
      },
    ],
    "vue/block-lang": [
      "error",
      {
        script: {
          lang: "ts",
        },
        style: {
          lang: "scss",
        },
      },
    ],
    "vue/component-api-style": [
      "error",
      ["script-setup"], // "script-setup", "composition", "composition-vue2", or "options"
    ],
    "vue/custom-event-name-casing": [
      "error",
      "kebab-case",
      {
        ignores: ["/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u"],
      },
    ],
    "vue/html-button-has-type": [
      "error",
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
    "vue/next-tick-style": ["error", "promise"],
    "vue/no-ref-object-destructure": "warn",
    "vue/no-static-inline-styles": "error",
    "vue/no-v-text": "error",
    "vue/v-for-delimiter-style": ["error", "in"],
    // ! Ниже правила для Options Api
    // Порядок свойств в компонентах.
    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "key",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          ["provide", "inject"],
          "ROUTER_GUARDS",
          "layout",
          "middleware",
          "validate",
          "scrollToTop",
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "emits",
          "setup",
          "asyncData",
          "data",
          "fetch",
          "head",
          "computed",
          "watch",
          "watchQuery",
          "methods",
          ["template", "render"],
          "renderError",
          "LIFECYCLE_HOOKS",
        ],
      },
    ],
    //Проверка на определенный регистр для имени компонента.
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    // Проверка имени компонента — оно должно соответствовать имени файла, в котором он находится.
    "vue/match-component-file-name": [
      "error",
      {
        extensions: ["vue"], // массив расширений файлов для проверки. По умолчанию установлено значение ["jsx"].
        shouldMatchCase: true, // должно ли имя компонента также соответствовать регистру имени файла. По умолчанию установлено значение false.
      },
    ],
  },
};
