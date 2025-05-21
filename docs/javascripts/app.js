function loadUmamiScript(src, websiteId) {
    // 创建 script 元素
    const script = document.createElement("script");
    script.src = src; // 设置脚本的 URL
    script.defer = true; // 设置 defer 属性
    script.dataset.websiteId = websiteId; // 设置 data-website-id 属性

    // 将 script 元素插入到文档的 head 中
    document.head.appendChild(script);
}

// 调用函数加载脚本
loadUmamiScript(
    "https://track.fantasticjoe.com/script.js",
    "96928401-24ba-4294-917b-a96f2ecf33de"
);
