# README

## プロジェクトの作成方法


このプロジェクトは `nestjs-cli` を使って作成されています。

<https://docs.nestjs.com/cli/overview>

```sh
npm install -g @nestjs/cli
```

```sh
nest new nestjs-appinsights-example
```

## 依存ライブラリ


```json
// package.json
"dependencies": {
  "applicationinsights": "^2.2.1",
  "nestjs-pino": "^2.5.0",
  "pino-pretty": "^7.5.1",
}
```

|ライブラリ名|説明|リンク|
|:--|:--|:--|
|applicationinsights|Node.js用のApplication Insights SDK。|<https://github.com/microsoft/ApplicationInsights-node.js>|
|nestjs-pino|NestJS用のpinoラッパー。|https://github.com/iamolegga/nestjs-pino|
|pino-pretty|pinoの出力を既定のJSON形式からHuman-readableな形式に変換するためのライブラリ。|<https://github.com/pinojs/pino-pretty>

### 参考：pino-prettyの有効化方法

pinoのインスタンスを作成する際のオプションとして `prettyPrint: true` を指定してください。

```ts
// Create a custom pino instance.
const logger = pino(
  {
    mixin, 
    prettyPrint: true 
  }
)
```

## 起動方法

```
npm run start:dev
```

## 動作確認方法

```
curl http://localhost:3000/hello
```

## 環境変数

|環境変数名|説明|サンプル|
|:--|:--|:--|
|APPLICATION_NAME|アプリケーション名を指定する。設定されたアプリケーション名はログにapplicationフィールドとして出力される。既定ではdefaultという名前が使用される。|APPLICATION_NAME=app1|
|AZURE_APPINSIGHTS_ENABLED|Application Insightsを有効にするかどうかを指定する。有効にする場合はyesまたはtrueを設定する。既定では無効。|AZURE_APPINSIGHTS_ENABLED=true|
|AZURE_APPINSIGHTS_CONNECTION_STRING|Azureの画面上で発行される接続文字列。AZURE_APPINSIGHTS_ENABLEDがyesまたはtrueの場合は設定が必要。|参考：<https://docs.microsoft.com/ja-jp/azure/azure-monitor/app/sdk-connection-string?tabs=net>|