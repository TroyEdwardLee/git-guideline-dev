# Local Development Enviroment

## Node.js

install [Node.js](https://nodejs.org/zh-cn/)

## Git

- install [GitHub Desktop](https://desktop.github.com/) or install [git](https://git-scm.com/)

- Run below commands for git settings:

  ```shell
  git config --global core.autocrlf input
  git config --global core.safecrlf true
  ```

## VS Code

- [vscode-docs](https://github.com/Microsoft/vscode-docs/blob/master/docs/getstarted/tips-and-tricks.md)

### Sync Common Settings

1.  Open Visual Studio Code
2.  Press `Ctrl+P` to open the Quick Open dialog
3.  Type `ext install Shan.code-settings-sync`, then click enter after find the extesnion
4.  Click reload button after Installed
5.  Press `ctrl+shift+P` , then type `sync: advance options` to select `sync: download from public GIST`
6.  Press `ctrl+shift+P`, then type `sync: download settings`, then input gist-id `2f7c9a3ab543317dd0699f9fb8df4622`

_check [settings](https://gist.github.com/zabelgogo/2f7c9a3ab543317dd0699f9fb8df4622) of above shared gist id_

### Tips for some user settings

- `search.useIgnoreFiles` and `search.exclude` for search settings
- `"editor.renderWhitespace": "all"`
- `"html.format.wrapAttributes": "force"`
- `"xmlTools.splitXmlnsOnFormat": true`
- `"xmlTools.splitAttributesOnFormat": true`

## grunt-ems

See [here](https://github.wdf.sap.corp/Entitlement/ems-grunt/blob/master/README.md) for more.

## Approuter

- xs-app.json
- default-env.json
- default-services.json

_Refer to [Approuter](https://github.wdf.sap.corp/xs2/approuter.js) for more details._

## Run your app locally with mock server or backend service

[Running application with Approuter](https://github.wdf.sap.corp/I074174/ems-ui-app-template/blob/p-list-obj-demo-ems/TemplateDscr.md#running-application-with-approuter)

## EMS Template

_Do start your application from the [EMS App Template](https://github.wdf.sap.corp/I074174/ems-ui-app-template/tree/p-list-obj-demo-ems), note: the branch is `p-list-obj-demo-ems`, find the tempalte introduction [here](https://github.wdf.sap.corp/I074174/ems-ui-app-template/blob/p-list-obj-demo-ems/TemplateDscr.md)._

Configuration in xs-app.json, first one is for local testing using mock server and the second one is using backend service.

```json
{
  "welcomeFile": "/webapp/test/flpSandboxMockServer.html",
  "authenticationMethod": "none",
  "routes": []
}
```

or

```json
{
  "welcomeFile": "/webapp/test/flpSandbox.html",
  "routes": []
}
```

## NPM Scripts

NPM scripts in `package.json` as following:

```json
"scripts": {
"start": "node node_modules/@sap/approuter/approuter.js",
"opa": "grunt coverage",
"lint": "grunt lint:ci",
"test": "grunt test",
"watch": "grunt watch",
"eslint": "grunt lint",
"format-prettier": "node_modules/.bin/prettier --write \"webapp/**/*.{json,css,less,md}\"",
"format-eslint": "node_modules/.bin/eslint --fix \"webapp/**/*.js\"",
"format": "node_modules/.bin/prettier --write \"webapp/**/*.{json,css,less,md}\" & node_modules/.bin/eslint --fix \"webapp/**/*.js\"",
"rule-conflict-check": "node_modules/.bin/eslint --print-config .eslintrc | eslint-config-prettier-check"
},
```

- `npm run start` or `npm start`, to run app locally
- `npm run test` or `npm test`, to run opa and unit test with Karma
- `npm run watch`, using watch model, it is convenient to do coding for opa and unit test
- `npm run eslint`, to run static codes scan.
- `npm run format`, to format all the files in batch. It covers types such as js、json、css、less and md. XML and HTML will be coverd by VSCode when you save the file, but not in batch.
