<template><div><h1 id="ai智能pdf阅读器" tabindex="-1"><a class="header-anchor" href="#ai智能pdf阅读器"><span>AI智能pdf阅读器</span></a></h1>
<p>展示链接：<a href="https://aipdfreader-uf9wmdxwd7uqej45j3ip3w.streamlit.app/">AI智能pdf阅读器</a>
仓库地址：https://github.com/Nuage123/ai_pdf_reader</p>
<h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈"><span>技术栈：</span></a></h2>
<p>开发：Python+Langchain+Streamlit
部署：Github+Streamlit cloud</p>
<h2 id="展示" tabindex="-1"><a class="header-anchor" href="#展示"><span>展示：</span></a></h2>
<p><img src="@source/posts/image-1.png" alt="alt text"></p>
<h2 id="utils-部分代码" tabindex="-1"><a class="header-anchor" href="#utils-部分代码"><span>utils 部分代码：</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"></span>
<span class="line">def qa_agent(openai_api_key, memory, uploaded_file, question):</span>
<span class="line">&lt;!-- 因为无法充值openai官网的token我使用了一下代理，只要在相关网站获取token,然后修改一下base_url即可 --></span>
<span class="line">&lt;!-- 创建ChatOpenAI模型 --></span>
<span class="line">    model = ChatOpenAI(model="gpt-3.5-turbo",</span>
<span class="line">                       openai_api_key=openai_api_key,</span>
<span class="line">                       base_url="https://api.openai-hub.com/v1"</span>
<span class="line">                       )</span>
<span class="line">     &lt;!-- 上传文件 --></span>
<span class="line">    file_content = uploaded_file.read()</span>
<span class="line">    temp_file_path = "temp.pdf"</span>
<span class="line">    with open(temp_file_path, "wb") as temp_file:</span>
<span class="line">        temp_file.write(file_content)</span>
<span class="line">    &lt;!-- 加载器 --></span>
<span class="line">    loader = PyPDFLoader(temp_file_path)</span>
<span class="line">    docs = loader.load()</span>
<span class="line">    &lt;!-- 分片 --></span>
<span class="line">    text_splitter = RecursiveCharacterTextSplitter(</span>
<span class="line">        chunk_size=1000,</span>
<span class="line">        chunk_overlap=50,</span>
<span class="line">        &lt;!-- 适合中文的分隔符 --></span>
<span class="line">        separators=["\n", "。", "！", "？", "，", "、", ""]</span>
<span class="line">    )</span>
<span class="line">    texts = text_splitter.split_documents(docs)</span>
<span class="line">    &lt;!-- 如果没有设置虚拟环境，嵌入模型需要输入参数openai_api_key，base_url解释同上 --></span>
<span class="line">    embeddings_model = OpenAIEmbeddings(</span>
<span class="line">        openai_api_key=openai_api_key,</span>
<span class="line">        base_url="https://api.openai-hub.com/v1"</span>
<span class="line">    )</span>
<span class="line">    &lt;!-- 数据库 --></span>
<span class="line">    db = FAISS.from_documents(texts, embeddings_model)</span>
<span class="line">    &lt;!-- 检索器 --></span>
<span class="line">    retriever = db.as_retriever()</span>
<span class="line">    &lt;!-- 链 --></span>
<span class="line">    qa = ConversationalRetrievalChain.from_llm(</span>
<span class="line">        llm=model,</span>
<span class="line">        retriever=retriever,</span>
<span class="line">        memory=memory</span>
<span class="line">    )</span>
<span class="line">    &lt;!-- 调用链 --></span>
<span class="line">    response = qa.invoke({"chat_history": memory, "question": question})</span>
<span class="line">    return response</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


