module.exports = {
  "ignorePatterns": [
    "projects/**/*",
    "**/dist/*",
    "**/.*"
  ],
  "overrides": [
    {
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "airbnb",
        "airbnb-typescript"
      ],
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "tsconfigRootDir": __dirname,
        "project": [
          "tsconfig.(app|spec).json",
          "tsconfig.json",
        ]
      },
      "rules": {
        "@angular-eslint/component-selector": [
          "error",
          {
            "prefix": "app",
            "style": "kebab-case",
            "type": "element",
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "prefix": "app",
            "style": "camelCase",
            "type": "attribute",
          }
        ],
        "linebreak-style": "off",
      }
    },
    {
      "extends": [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility"
      ],
      "files": [
        "*.html"
      ],
      "rules": {}
    }
  ],
  "plugins": [
    "import",
    "simple-import-sort"
  ],
  "root": true,
  "rules": {
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "sort-keys": [
      "error",
      "asc",
      {
        "caseSensitive": true,
        "minKeys": 3,
        "natural": false,
      }
    ]
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx"
      ]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "./"
      }
    }
  }
}