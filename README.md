# nodejs-express-example
給親愛學弟妹的node.js架站教學，使用express套件。express的官方文件在此:https://expressjs.com/
而開發環境方面，建議你們使用Visual Studio Code(不是Visual Studio喔，不一樣)，下載網址: https://code.visualstudio.com/download

## 事前準備:
1. 前往 https://nodejs.org/en/ 安裝node.js 
  (它是後端版的javascript, 所以使用的程式語法跟javascript一模一樣)
2. 打開cmd查看node.js是否成功安裝，輸入以下指令，若已成功安裝，會顯示node.js版本:
```
node -v
```
3. 下載範例nodejs-express-example-master後，解壓縮並放置於任意位置，打開cmd把路徑切換至該專案的根目錄，並執行指令:
```
npm install
```
此舉會把指定的library(可以在package.json查看)安裝好，目前只有express套件需要安裝

## 執行範例程式碼:
本專案的所有範例都放在example資料夾中，以ex1為例子，請先把cmd的路徑切換至專案的/example/ex1-helloworld/，並執行指令:
```
node app.js
```
成功啟動後，在cmd中會看到訊息:
```
Express網站正在監聽3000 port.
```
打開任一瀏覧器，輸入以下網址便能執行網頁:
```
localhost:3000
```

若要停止網頁(需要更改程式碼後再執行等等...)，則回到cmd並按Ctrl+C。停止後，瀏覧器輸入網址便不會再有反應。

## 範例目錄(2019/07/25更新)
### ex1 - helloworld
最簡單的Express範例
### ex2 - route
透過網址分流到不同網頁
