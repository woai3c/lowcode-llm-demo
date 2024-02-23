# lowcode-llm-demo

低代码平台与大语言模型的结合实践 demo，本分支是使用 chatglm-6b 开源模型的示例代码，如果想查看 chatgpt 示例代码，请查看 [openai](https://github.com/woai3c/lowcode-llm-demo/tree/openai) 分支。

## 安装

请先查看这篇文章安装相关依赖 [手把手教你本地部署清华大学KEG的ChatGLM-6B模型——Windows+6GB显卡版本和CPU版本的本地部署](https://zhuanlan.zhihu.com/p/620455056)。本仓库的代码使用的是 Windows + CPU 版本。

模型文件太大，无法上传到 GitHub，需要自行下载。打开这个地址 <https://huggingface.co/THUDM/chatglm-6b-int4/tree/main> 找到模型文件 `pytorch_model.bin`，文件右边有一个向下箭头，点击下载。然后放到项目根目录下。

## 使用

通过命令行使用：

```sh
python ./cli-demo.py
```

通过浏览器使用：

```sh
python ./web-demo.py
```

浏览器网页不能正常显示响应内容，有 BUG，但是通过接口是可以看到返回内容的，没时间修复，先这样了。

**注意**：如果运行后没有任何反应，也没有报错，程序直接结束。说明系统资源不足，请关掉无关的程序后，再重新运行。

### 低代码示例

`prompts` 目录里有两个 markdown 文件，是关于生成低代码页面的 prompt。可以直接复制里面的文本跟模型交互。它会返回一个 JSON 字符串，然后把这个 JSON 放到[低代码平台](https://woai3c.github.io/visual-drag-demo/)里导入使用，可以直接生成页面。

![cli 截图](imgs/lowcode-page3.png)

不过 chatglm-6b 模型的生成结果不是很理想，生成的 JSON 不一定能直接使用，如果有 chatgpt 的话，最好使用 chatgpt 来生成。

## DEMO 截图

![cli 截图](imgs/lowcode.jpg)

![cli 截图](imgs/cli-demo.jpg)

![web 截图](imgs/web-demo.jpg)
