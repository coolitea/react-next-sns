# 프로젝트 생성 과정

```bash
cd /Users/hjpark/Documents/web_projects/react-next-sns/frontend
```

```bash
yarn init
```

yarn init v1.16.0
question name (frontend): react-next-sns-frontend
question version (1.0.0):
question description:
question entry point (index.js):
question repository url:
question author: coolitea
question license (MIT):
question private:
success Saved package.json
✨ Done in 29.30s.

```bash
yarn add react react-dom next
```

yarn add v1.16.0
info No lockfile found.
[1/4] 🔍 Resolving packages...
[2/4] 🚚 Fetching packages...
[3/4] 🔗 Linking dependencies...
[4/4] 🔨 Building fresh packages...
success Saved lockfile.
success Saved 417 new dependencies.
info Direct dependencies
├─ next@8.1.0
├─ react-dom@16.8.6
└─ react@16.8.6
info All dependencies
├─ @babel/core@7.1.2
├─ @babel/generator@7.4.4
├─ @babel/helper-builder-binary-assignment-operator-visitor@7.1.0
├─ @babel/helper-builder-react-jsx@7.3.0
├─ @babel/helper-call-delegate@7.4.4
├─ @babel/helper-define-map@7.4.4
├─ @babel/helper-explode-assignable-expression@7.1.0
├─ @babel/helper-wrap-function@7.2.0
├─ @babel/helpers@7.4.4
├─ @babel/highlight@7.0.0
├─ @babel/plugin-proposal-async-generator-functions@7.2.0
├─ @babel/plugin-proposal-class-properties@7.1.0
├─ @babel/plugin-proposal-json-strings@7.2.0
├─ @babel/plugin-proposal-object-rest-spread@7.0.0
├─ @babel/plugin-proposal-optional-catch-binding@7.2.0
├─ @babel/plugin-proposal-unicode-property-regex@7.4.4
├─ @babel/plugin-syntax-async-generators@7.2.0
├─ @babel/plugin-syntax-class-properties@7.2.0
├─ @babel/plugin-syntax-dynamic-import@7.0.0
├─ @babel/plugin-syntax-json-strings@7.2.0
├─ @babel/plugin-syntax-object-rest-spread@7.2.0
├─ @babel/plugin-syntax-optional-catch-binding@7.2.0
├─ @babel/plugin-transform-arrow-functions@7.2.0
├─ @babel/plugin-transform-async-to-generator@7.4.4
├─ @babel/plugin-transform-block-scoped-functions@7.2.0
├─ @babel/plugin-transform-block-scoping@7.4.4
├─ @babel/plugin-transform-classes@7.4.4
├─ @babel/plugin-transform-computed-properties@7.2.0
├─ @babel/plugin-transform-destructuring@7.4.4
├─ @babel/plugin-transform-dotall-regex@7.4.4
├─ @babel/plugin-transform-duplicate-keys@7.2.0
├─ @babel/plugin-transform-exponentiation-operator@7.2.0
├─ @babel/plugin-transform-for-of@7.4.4
├─ @babel/plugin-transform-function-name@7.4.4
├─ @babel/plugin-transform-literals@7.2.0
├─ @babel/plugin-transform-modules-amd@7.2.0
├─ @babel/plugin-transform-modules-commonjs@7.1.0
├─ @babel/plugin-transform-modules-systemjs@7.4.4
├─ @babel/plugin-transform-modules-umd@7.2.0
├─ @babel/plugin-transform-new-target@7.4.4
├─ @babel/plugin-transform-object-super@7.2.0
├─ @babel/plugin-transform-parameters@7.4.4
├─ @babel/plugin-transform-react-display-name@7.2.0
├─ @babel/plugin-transform-react-jsx-self@7.2.0
├─ @babel/plugin-transform-react-jsx-source@7.2.0
├─ @babel/plugin-transform-react-jsx@7.3.0
├─ @babel/plugin-transform-regenerator@7.4.4
├─ @babel/plugin-transform-runtime@7.1.0
├─ @babel/plugin-transform-shorthand-properties@7.2.0
├─ @babel/plugin-transform-spread@7.2.2
├─ @babel/plugin-transform-sticky-regex@7.2.0
├─ @babel/plugin-transform-template-literals@7.4.4
├─ @babel/plugin-transform-typeof-symbol@7.2.0
├─ @babel/plugin-transform-unicode-regex@7.4.4
├─ @babel/preset-env@7.1.0
├─ @babel/preset-react@7.0.0
├─ @babel/runtime-corejs2@7.1.2
├─ @babel/runtime@7.1.2
├─ @webassemblyjs/floating-point-hex-parser@1.7.11
├─ @webassemblyjs/helper-code-frame@1.7.11
├─ @webassemblyjs/helper-fsm@1.7.11
├─ @webassemblyjs/helper-wasm-section@1.7.11
├─ @webassemblyjs/wasm-edit@1.7.11
├─ @webassemblyjs/wasm-opt@1.7.11
├─ @xtuc/ieee754@1.2.0
├─ abbrev@1.1.1
├─ acorn-dynamic-import@4.0.0
├─ acorn@6.1.1
├─ ajv-errors@1.0.1
├─ amp-toolbox-core@0.1.6
├─ amp-toolbox-optimizer@0.5.2-beta.6
├─ amp-toolbox-runtime-version@0.2.7
├─ amphtml-validator@1.0.23
├─ ansi-colors@3.2.4
├─ ansi-html@0.0.7
├─ ansi-regex@2.1.1
├─ ansi-styles@3.2.1
├─ anymatch@2.0.0
├─ aproba@1.2.0
├─ are-we-there-yet@1.1.5
├─ arr-flatten@1.1.0
├─ array-differ@1.0.0
├─ array-filter@0.0.1
├─ array-map@0.0.0
├─ array-reduce@0.0.0
├─ array-uniq@1.0.3
├─ asn1.js@4.10.1
├─ assert@1.5.0
├─ assign-symbols@1.0.0
├─ async-each@1.0.3
├─ async-sema@2.2.0
├─ atob@2.1.2
├─ autodll-webpack-plugin@0.4.2
├─ babel-core@7.0.0-bridge.0
├─ babel-loader@8.0.2
├─ babel-plugin-dynamic-import-node@2.2.0
├─ babel-plugin-react-require@3.0.0
├─ babel-plugin-syntax-jsx@6.18.0
├─ babel-plugin-transform-async-to-promises@0.8.9
├─ babel-plugin-transform-react-remove-prop-types@0.4.15
├─ babel-runtime@6.26.0
├─ babel-types@6.26.0
├─ balanced-match@1.0.0
├─ base@0.11.2
├─ base64-js@1.3.0
├─ big.js@5.2.2
├─ binary-extensions@1.13.1
├─ bluebird@3.5.4
├─ brace-expansion@1.1.11
├─ braces@2.3.2
├─ browserify-aes@1.2.0
├─ browserify-cipher@1.0.1
├─ browserify-des@1.0.2
├─ browserify-sign@4.0.4
├─ browserify-zlib@0.2.0
├─ browserslist@4.5.6
├─ buffer-xor@1.0.3
├─ buffer@4.9.1
├─ builtin-status-codes@3.0.0
├─ cacache@11.3.2
├─ cache-base@1.0.1
├─ caniuse-lite@1.0.30000967
├─ chalk@2.4.2
├─ chokidar@2.1.5
├─ chownr@1.1.1
├─ chrome-trace-event@1.0.0
├─ class-utils@0.3.6
├─ code-point-at@1.1.0
├─ collection-visit@1.0.0
├─ color-convert@1.9.3
├─ color-name@1.1.3
├─ colors@1.1.2
├─ commander@2.9.0
├─ concat-map@0.0.1
├─ concat-stream@1.6.2
├─ console-browserify@1.1.0
├─ console-control-strings@1.1.0
├─ constants-browserify@1.0.0
├─ convert-source-map@1.6.0
├─ copy-concurrently@1.0.5
├─ copy-descriptor@0.1.1
├─ core-js@2.6.5
├─ core-util-is@1.0.2
├─ create-ecdh@4.0.3
├─ create-hmac@1.1.7
├─ crypto-browserify@3.12.0
├─ css@2.2.4
├─ cyclist@0.2.2
├─ date-now@0.1.4
├─ debug@2.6.9
├─ decode-uri-component@0.2.0
├─ deep-extend@0.6.0
├─ del@2.2.2
├─ delegates@1.0.0
├─ depd@1.1.2
├─ des.js@1.0.0
├─ destroy@1.0.4
├─ detect-libc@1.0.3
├─ diffie-hellman@5.0.3
├─ domain-browser@1.2.0
├─ duplexify@3.7.1
├─ ee-first@1.1.1
├─ electron-to-chromium@1.3.133
├─ emitter-mixin@0.0.3
├─ encodeurl@1.0.2
├─ enhanced-resolve@4.1.0
├─ errno@0.1.7
├─ error-ex@1.3.2
├─ es-abstract@1.13.0
├─ es-to-primitive@1.2.0
├─ escape-html@1.0.3
├─ escape-string-regexp@1.0.5
├─ eslint-scope@4.0.3
├─ esrecurse@4.2.1
├─ estraverse@4.2.0
├─ esutils@2.0.2
├─ etag@1.8.1
├─ events@3.0.0
├─ expand-brackets@2.1.4
├─ extglob@2.0.4
├─ fast-deep-equal@2.0.1
├─ fast-json-stable-stringify@2.0.0
├─ fill-range@4.0.0
├─ find-up@2.1.0
├─ flush-write-stream@1.1.1
├─ for-in@1.0.2
├─ from2@2.3.0
├─ fs-minipass@1.2.5
├─ fs.realpath@1.0.0
├─ fsevents@1.2.9
├─ gauge@2.7.4
├─ get-value@2.0.6
├─ glob-parent@3.1.0
├─ globby@5.0.0
├─ graceful-readlink@1.0.1
├─ has-flag@3.0.0
├─ has-unicode@2.0.1
├─ has-value@1.0.0
├─ has-values@1.0.0
├─ has@1.0.3
├─ hash.js@1.1.7
├─ hmac-drbg@1.0.1
├─ hosted-git-info@2.7.1
├─ html-entities@1.2.1
├─ http-errors@1.6.3
├─ https-browserify@1.0.0
├─ iconv-lite@0.4.24
├─ ieee754@1.1.13
├─ ignore-walk@3.0.1
├─ indexof@0.0.1
├─ inflight@1.0.6
├─ ini@1.3.5
├─ invariant@2.2.4
├─ is-accessor-descriptor@1.0.0
├─ is-arrayish@0.2.1
├─ is-binary-path@1.0.1
├─ is-data-descriptor@1.0.0
├─ is-date-object@1.0.1
├─ is-descriptor@1.0.2
├─ is-extglob@2.1.1
├─ is-fullwidth-code-point@1.0.0
├─ is-glob@4.0.1
├─ is-path-inside@1.0.1
├─ is-plain-object@2.0.4
├─ is-regex@1.0.4
├─ is-symbol@1.0.2
├─ is-windows@1.0.2
├─ isarray@1.0.0
├─ js-levenshtein@1.1.6
├─ js-tokens@4.0.0
├─ jsesc@2.5.2
├─ json-parse-better-errors@1.0.2
├─ json-schema-traverse@0.4.1
├─ jsonify@0.0.0
├─ junk@1.0.3
├─ kind-of@3.2.2
├─ launch-editor@2.2.1
├─ load-json-file@2.0.0
├─ loader-runner@2.4.0
├─ loader-utils@1.2.3
├─ locate-path@2.0.0
├─ loose-envify@1.4.0
├─ lru-cache@5.1.1
├─ map-visit@1.0.0
├─ maximatch@0.1.0
├─ memory-fs@0.4.1
├─ micromatch@3.1.10
├─ miller-rabin@4.0.1
├─ mime@2.4.2
├─ minimalistic-crypto-utils@1.0.1
├─ minimatch@3.0.4
├─ minimist@1.2.0
├─ minizlib@1.2.1
├─ mississippi@3.0.0
├─ mixin-deep@1.3.1
├─ mkdirp@0.5.1
├─ move-concurrently@1.0.1
├─ nan@2.13.2
├─ nanomatch@1.2.13
├─ needle@2.3.1
├─ next-server@8.1.0
├─ next@8.1.0
├─ node-fetch@2.3.0
├─ node-libs-browser@2.2.0
├─ node-pre-gyp@0.12.0
├─ node-releases@1.1.18
├─ nopt@4.0.1
├─ normalize-package-data@2.5.0
├─ normalize-path@3.0.0
├─ npm-bundled@1.0.6
├─ npm-packlist@1.4.1
├─ npmlog@4.1.2
├─ number-is-nan@1.0.1
├─ object-assign@4.1.1
├─ object-copy@0.1.0
├─ object-is@1.0.1
├─ object.getownpropertydescriptors@2.0.3
├─ on-finished@2.3.0
├─ os-browserify@0.3.0
├─ os-homedir@1.0.2
├─ os-tmpdir@1.0.2
├─ osenv@0.1.5
├─ p-limit@1.3.0
├─ p-locate@2.0.0
├─ p-map@1.2.0
├─ p-try@1.0.0
├─ pako@1.0.10
├─ parallel-transform@1.1.0
├─ parse-json@2.2.0
├─ parse5-htmlparser2-tree-adapter@5.1.0
├─ pascalcase@0.1.1
├─ path-browserify@0.0.0
├─ path-dirname@1.0.2
├─ path-is-inside@1.0.2
├─ path-parse@1.0.6
├─ path-to-regexp@2.1.0
├─ path-type@2.0.0
├─ pinkie@2.0.4
├─ pkg-dir@2.0.0
├─ posix-character-classes@0.1.1
├─ private@0.1.8
├─ process-nextick-args@2.0.0
├─ process@0.11.10
├─ progress@2.0.3
├─ promise-inflight@1.0.1
├─ promise@7.1.1
├─ prop-types-exact@1.2.0
├─ prr@1.0.1
├─ public-encrypt@4.0.3
├─ pump@3.0.0
├─ pumpify@1.5.1
├─ punycode@1.3.2
├─ querystring-es3@0.2.1
├─ querystring@0.2.0
├─ randomfill@1.0.4
├─ range-parser@1.2.1
├─ rc@1.2.8
├─ react-dom@16.8.6
├─ react-error-overlay@5.1.4
├─ react-ssr-prepass@1.0.2
├─ react@16.8.6
├─ read-pkg@2.0.0
├─ readdirp@2.2.1
├─ recursive-copy@2.0.6
├─ reflect.ownkeys@0.2.0
├─ regenerate-unicode-properties@8.0.2
├─ regenerator-transform@0.13.4
├─ regjsgen@0.5.0
├─ regjsparser@0.6.0
├─ remove-trailing-separator@1.1.0
├─ repeat-element@1.1.3
├─ resolve-url@0.2.1
├─ resolve@1.10.1
├─ ret@0.1.15
├─ rimraf@2.6.3
├─ run-queue@1.0.3
├─ safer-buffer@2.1.2
├─ sax@1.2.4
├─ schema-utils@0.4.7
├─ semver@5.7.0
├─ send@0.16.1
├─ serialize-javascript@1.6.1
├─ set-blocking@2.0.0
├─ set-value@2.0.0
├─ setimmediate@1.0.5
├─ setprototypeof@1.1.0
├─ sha.js@2.4.11
├─ shell-quote@1.6.1
├─ signal-exit@3.0.2
├─ slash@1.0.0
├─ snapdragon-node@2.1.1
├─ snapdragon-util@3.0.1
├─ source-list-map@2.0.1
├─ source-map-resolve@0.5.2
├─ source-map-support@0.5.12
├─ source-map-url@0.4.0
├─ spdx-correct@3.1.0
├─ spdx-exceptions@2.2.0
├─ split-string@3.1.0
├─ ssri@6.0.1
├─ static-extend@0.1.2
├─ statuses@1.3.1
├─ stream-browserify@2.0.2
├─ stream-each@1.2.3
├─ stream-http@2.8.3
├─ string_decoder@1.2.0
├─ string-width@1.0.2
├─ strip-ansi@3.0.1
├─ strip-bom@3.0.0
├─ strip-json-comments@2.0.1
├─ styled-jsx@3.2.1
├─ stylis-rule-sheet@0.0.10
├─ stylis@3.5.4
├─ supports-color@5.5.0
├─ tar@4.4.8
├─ terser-webpack-plugin@1.2.3
├─ terser@3.16.1
├─ through2@2.0.5
├─ timers-browserify@2.0.10
├─ to-arraybuffer@1.0.1
├─ to-fast-properties@1.0.3
├─ to-regex-range@2.1.1
├─ trim-right@1.0.1
├─ tslib@1.9.3
├─ tty-aware-progress@1.0.3
├─ tty-browserify@0.0.0
├─ typedarray@0.0.6
├─ unfetch@4.1.0
├─ unicode-canonical-property-names-ecmascript@1.0.4
├─ unicode-match-property-ecmascript@1.0.4
├─ unicode-match-property-value-ecmascript@1.1.0
├─ unicode-property-aliases-ecmascript@1.0.5
├─ union-value@1.0.0
├─ unique-filename@1.1.1
├─ unique-slug@2.0.1
├─ unset-value@1.0.0
├─ upath@1.1.2
├─ uri-js@4.2.2
├─ use@3.1.1
├─ util-deprecate@1.0.2
├─ util.promisify@1.0.0
├─ util@0.11.1
├─ uuid@3.3.2
├─ validate-npm-package-license@3.0.4
├─ vm-browserify@0.0.4
├─ watchpack@1.6.0
├─ webpack-dev-middleware@3.6.0
├─ webpack-hot-middleware@2.24.3
├─ webpack-log@2.0.0
├─ webpack-merge@4.2.1
├─ webpack-sources@1.3.0
├─ webpack@4.29.0
├─ wide-align@1.1.3
├─ worker-farm@1.5.2
├─ xtend@4.0.1
├─ y18n@4.0.0
└─ yallist@3.0.3
✨ Done in 10.94s.

```bash
yarn add -D nodemon webpack
```

yarn add v1.16.0
[1/4] 🔍 Resolving packages...
[2/4] 🚚 Fetching packages...
[3/4] 🔗 Linking dependencies...
[4/4] 🔨 Building fresh packages...
success Saved lockfile.
success Saved 58 new dependencies.
info Direct dependencies
├─ nodemon@1.19.0
└─ webpack@4.31.0
info All dependencies
├─ @webassemblyjs/helper-wasm-section@1.8.5
├─ @webassemblyjs/wasm-edit@1.8.5
├─ @webassemblyjs/wasm-opt@1.8.5
├─ ansi-align@2.0.0
├─ boxen@1.3.0
├─ camelcase@4.1.0
├─ capture-stack-trace@1.0.1
├─ ci-info@1.6.0
├─ cli-boxes@1.0.0
├─ configstore@3.1.2
├─ create-error-class@3.0.2
├─ cross-spawn@5.1.0
├─ crypto-random-string@1.0.0
├─ dot-prop@4.2.0
├─ duplexer3@0.1.4
├─ execa@0.7.0
├─ global-dirs@0.1.1
├─ got@6.7.1
├─ ignore-by-default@1.0.1
├─ import-lazy@2.1.0
├─ is-ci@1.2.1
├─ is-installed-globally@0.1.0
├─ is-npm@1.0.0
├─ is-obj@1.0.1
├─ is-redirect@1.0.0
├─ is-retry-allowed@1.1.0
├─ is-stream@1.1.0
├─ isexe@2.0.0
├─ latest-version@3.1.0
├─ lowercase-keys@1.0.1
├─ mamacro@0.0.3
├─ nodemon@1.19.0
├─ nopt@1.0.10
├─ npm-run-path@2.0.2
├─ p-finally@1.0.0
├─ package-json@4.0.1
├─ path-key@2.0.1
├─ prepend-http@1.0.4
├─ pseudomap@1.0.2
├─ pstree.remy@1.1.6
├─ registry-auth-token@3.4.0
├─ registry-url@3.1.0
├─ semver-diff@2.1.0
├─ shebang-command@1.2.0
├─ shebang-regex@1.0.0
├─ strip-eof@1.0.0
├─ term-size@1.2.0
├─ timed-out@4.0.1
├─ touch@3.1.0
├─ undefsafe@2.0.2
├─ unique-string@1.0.0
├─ unzip-response@2.0.1
├─ update-notifier@2.5.0
├─ url-parse-lax@1.0.0
├─ webpack@4.31.0
├─ which@1.3.1
├─ widest-line@2.0.1
└─ write-file-atomic@2.4.2
✨ Done in 4.86s.

```bash
yarn add -D eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
```

yarn add v1.16.0
[1/4] 🔍 Resolving packages...
[2/4] 🚚 Fetching packages...
[3/4] 🔗 Linking dependencies...
[4/4] 🔨 Building fresh packages...
success Saved lockfile.
success Saved 60 new dependencies.
info Direct dependencies
├─ eslint-plugin-import@2.17.2
├─ eslint-plugin-react-hooks@1.6.0
├─ eslint-plugin-react@7.13.0
└─ eslint@5.16.0
info All dependencies
├─ acorn-jsx@5.0.1
├─ ansi-escapes@3.2.0
├─ argparse@1.0.10
├─ astral-regex@1.0.0
├─ callsites@3.1.0
├─ chardet@0.7.0
├─ cli-cursor@2.1.0
├─ cli-width@2.2.0
├─ contains-path@0.1.0
├─ cross-spawn@6.0.5
├─ deep-is@0.1.3
├─ doctrine@1.5.0
├─ emoji-regex@7.0.3
├─ eslint-import-resolver-node@0.3.2
├─ eslint-module-utils@2.4.0
├─ eslint-plugin-import@2.17.2
├─ eslint-plugin-react-hooks@1.6.0
├─ eslint-plugin-react@7.13.0
├─ eslint-utils@1.3.1
├─ eslint@5.16.0
├─ espree@5.0.1
├─ esprima@4.0.1
├─ esquery@1.0.1
├─ external-editor@3.0.3
├─ fast-levenshtein@2.0.6
├─ figures@2.0.0
├─ file-entry-cache@5.0.1
├─ flat-cache@2.0.1
├─ flatted@2.0.0
├─ functional-red-black-tree@1.0.1
├─ ignore@4.0.6
├─ import-fresh@3.0.0
├─ inquirer@6.3.1
├─ is-promise@2.1.0
├─ js-yaml@3.13.1
├─ json-stable-stringify-without-jsonify@1.0.1
├─ jsx-ast-utils@2.1.0
├─ levn@0.3.0
├─ mimic-fn@1.2.0
├─ mute-stream@0.0.7
├─ natural-compare@1.4.0
├─ nice-try@1.0.5
├─ object.fromentries@2.0.0
├─ onetime@2.0.1
├─ optionator@0.8.2
├─ parent-module@1.0.1
├─ read-pkg-up@2.0.0
├─ regexpp@2.0.1
├─ resolve-from@4.0.0
├─ restore-cursor@2.0.0
├─ run-async@2.3.0
├─ rxjs@6.5.2
├─ slice-ansi@2.1.0
├─ sprintf-js@1.0.3
├─ table@5.3.3
├─ text-table@0.2.0
├─ through@2.3.8
├─ tmp@0.0.33
├─ wordwrap@1.0.0
└─ write@1.0.3
✨ Done in 7.79s.

```bash
mkdir pages
```
