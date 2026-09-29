# FileSetGo App Store 网页

此文件夹包含 App Store Connect 的三个网址页面：

- `index.html`：营销网址（产品介绍）
- `support.html`：技术支持网址（常见问题与使用帮助）
- `privacy.html`：隐私政策网址（五种语言）

页面支持简体中文、香港繁体、English、日本語、한국어。页面内容和语言切换只用本地 HTML、CSS、JavaScript；不加载第三方字体、脚本或分析服务。`assets/` 中的 App 图标和 iPhone 首页画面来自当前工程。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个仓库，或选择一个用于发布此网站的仓库。
2. 把本文件夹中的**全部内容**上传到该仓库的根目录，保留 `assets` 文件夹结构。
3. 在仓库 **Settings → Pages** 中，将发布来源设为 `Deploy from a branch`，分支选 `main`、目录选 `/ (root)`，保存并等待 GitHub Pages 发布。
4. 将 GitHub Pages 显示的站点根地址填入 App Store Connect 的「营销网址」；根地址后分别加 `/support.html`、`/privacy.html`，填入「技术支持网址」和「隐私政策网址」。

网址形如：

- 营销网址：`https://<GitHub用户名>.github.io/<仓库名>/`
- 技术支持网址：`https://<GitHub用户名>.github.io/<仓库名>/support.html`
- 隐私政策网址：`https://<GitHub用户名>.github.io/<仓库名>/privacy.html`

页面可用 `?lang=zh-Hans`、`?lang=zh-Hant-HK`、`?lang=en`、`?lang=ja`、`?lang=ko` 指定语言。未指定时会根据浏览器语言选择。

## 上架前请核对

- 「恢复购买」和设备设置项名称是否与最终上架版本一致。
- App Store Connect 中的实际上架地区、内购价格与本页面宣传内容保持一致。
- 可将公开支持邮箱补充到支持页，作为 App Store 联系方式之外的直接联系入口。
