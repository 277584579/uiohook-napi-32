const addon  = require("./build/Release/uiohook_napi.node")// 定义回调函数

const Koa = require('koa');
const app = new Koa();
const port = 3000;

app.use(async (ctx, next) => {
  ctx.body = 'Hello World!';
  await next();
});

console.log(addon)
addon.start()
// const { uIOhook, UiohookKey } = addon
// uIOhook.on('keydown', (e) => {
//   if (e.keycode === UiohookKey.Q) {
//     console.log('Hello!')
//   }

//   if (e.keycode === UiohookKey.Escape) {
//     process.exit(0)
//   }
// })


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

