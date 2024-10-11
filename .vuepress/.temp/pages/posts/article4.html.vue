<template><div><h1 id="自动化办公工具1-python-docx的使用-含tkinter" tabindex="-1"><a class="header-anchor" href="#自动化办公工具1-python-docx的使用-含tkinter"><span>自动化办公工具1-Python-docx的使用（含Tkinter)</span></a></h1>
<p>工作简单但是琐碎。譬如将多份报告转换为ld期望的格式，又或者将报告第一页的留言进行修改，传统方式下会采取复制粘贴的方式。但是使用<strong>Python-Docx</strong>库可以<s>轻松（因为还在学习这个库的原因，所以写脚本其实花了一点时间）</s>，对word进行批量编辑，替代。效果请看最后。</p>
<h2 id="python-docx库" tabindex="-1"><a class="header-anchor" href="#python-docx库"><span>Python-docx库</span></a></h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3>
<p>python-docx库 是一个用于创建和更新 Microsoft Word（.docx）文件的Python库
👉<a href=https://python-docx.readthedocs.io/en/latest/index.html>Python-docx官网</a></p>
<h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入"><span>引入</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">from docx import Document</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="python处理word" tabindex="-1"><a class="header-anchor" href="#python处理word"><span>Python处理word</span></a></h2>
<h3 id="打开文件" tabindex="-1"><a class="header-anchor" href="#打开文件"><span>打开文件</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">#path是你想编辑的文件的地址</span>
<span class="line"> doc=Document(path)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储" tabindex="-1"><a class="header-anchor" href="#存储"><span>存储</span></a></h3>
<p>每次编辑结束之后记得存储word</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">doc.save(你想存储的位置)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="替代制定文字" tabindex="-1"><a class="header-anchor" href="#替代制定文字"><span>替代制定文字</span></a></h3>
<p>要批量撰写报告，比如批量填写公文中的事项名称。那么首先需要制作一个模板(见示例模板)。然后对制定内容进行替代。譬如，将示例模板中的{name}替代成真正的事项名称。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">#用于替代的具体事项名称name是从excel中读取的</span>
<span class="line">#读取和编辑excel需要使用Pandas库，详见下回</span>
<span class="line">for paragraph in doc.paragraphs:</span>
<span class="line">    for run in paragraph.runs:</span>
<span class="line">        text=run.text</span>
<span class="line">        if '{{name}}' in run.text:</span>
<span class="line">            text = text.replace('{{name}}', name)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例模板：
<img src="@source/posts/feb341d91607994d043cae7a9911747.jpg" alt="alt text"></p>
<p>替换效果：
<img src="@source/posts/e613191a15357eb78841e893d64303e.jpg" alt="alt text"></p>
<h3 id="编辑word中的表格" tabindex="-1"><a class="header-anchor" href="#编辑word中的表格"><span>编辑word中的表格</span></a></h3>
<p>在某些情况下，需要读取word中的表格数据。</p>
<h4 id="读取所有表格" tabindex="-1"><a class="header-anchor" href="#读取所有表格"><span>读取所有表格</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"> tables = doc.tables</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="遍历表格" tabindex="-1"><a class="header-anchor" href="#遍历表格"><span>遍历表格</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">for i in range(1, len(tables)):</span>
<span class="line">     tb = tables[i]</span>
<span class="line">     #读取行</span>
<span class="line">     tb_rows = tb.rows</span>
<span class="line">     #获取单元格内容</span>
<span class="line">     for i in range(1, len(tb_rows)):</span>
<span class="line">        row_cells1 = tb_rows[i].cells：</span>
<span class="line">                # 读取每一行单元格内容</span>
<span class="line">                for cell in row_cells1:</span>
<span class="line">                    #处理逻辑</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加内容" tabindex="-1"><a class="header-anchor" href="#添加内容"><span>添加内容</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">paragraph = doc.add_paragraph("你要添加到段落")</span>
<span class="line">run=paragraph.add_run("你要添加到内容")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置字体和格式" tabindex="-1"><a class="header-anchor" href="#设置字体和格式"><span>设置字体和格式</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">def setFont(run, fontName, size, bold=False):</span>
<span class="line">    #字号</span>
<span class="line">    run.font.size = Pt(size)</span>
<span class="line">    #字体名称</span>
<span class="line">    run.font.name = fontName</span>
<span class="line">    #如果是中文字体需要加上这一句生效</span>
<span class="line">    run._element.rPr.rFonts.set(qn('w:eastAsia'), fontName)</span>
<span class="line">    #是否加粗</span>
<span class="line">    run.bold=bold</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除段落或图片" tabindex="-1"><a class="header-anchor" href="#删除段落或图片"><span>删除段落或图片</span></a></h3>
<p>有时候需要删除特定的word段落</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">def delete_paragraph(paragraph):</span>
<span class="line">    p = paragraph._element</span>
<span class="line">    p.getparent().remove(p)</span>
<span class="line">    paragraph._p = paragraph._element = None</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除图片</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">#需要先确定图片的位置</span>
<span class="line">para = docx1.paragraphs[1]</span>
<span class="line">#删除</span>
<span class="line">para.clear()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tkinter" tabindex="-1"><a class="header-anchor" href="#tkinter"><span>TKinter</span></a></h2>
<p>其实以上内容不用使用Tkinter，但是为了让同办公室不会代码的姐姐也能用一下这个脚本，于是我做了一个丑陋的UI界面，顺便学习一下Tkinter和exe文件打包命令。</p>
<h3 id="引入-1" tabindex="-1"><a class="header-anchor" href="#引入-1"><span>引入</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">import tkinter as tk</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="创建窗口" tabindex="-1"><a class="header-anchor" href="#创建窗口"><span>创建窗口</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">#窗口</span>
<span class="line"> window = tk.Tk()</span>
<span class="line">#大小</span>
<span class="line"> window.geometry("400x350")</span>
<span class="line">#事件循环</span>
<span class="line">window.mainloop()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件-以按钮为例" tabindex="-1"><a class="header-anchor" href="#组件-以按钮为例"><span>组件(以按钮为例)</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">#创建按钮</span>
<span class="line">button=tk.Button(window,text="点我",command=lambda:writeReport())</span>
<span class="line">#放在窗口上，必须有这一步，组件才会生效    </span>
<span class="line">button.pack(pady=(20, 0))</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tkinter最终页面-真的超级古早风😅" tabindex="-1"><a class="header-anchor" href="#tkinter最终页面-真的超级古早风😅"><span>Tkinter最终页面（真的超级古早风😅）：</span></a></h3>
<p><img src="@source/posts/bac99e28d4f8fa800bddfd798d3e7bf.jpg" alt="alt text"></p>
<h2 id="exe文件打包" tabindex="-1"><a class="header-anchor" href="#exe文件打包"><span>exe文件打包</span></a></h2>
<p>安装Pyinstaller</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">pip install pyinstaller</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>打包命令</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">Pyinstaller -F -w -i 你的脚本.py</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>打包完成后exe文件在dist文件夹中</p>
</div></template>


