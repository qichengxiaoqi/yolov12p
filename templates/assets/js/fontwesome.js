// Font Awesome 的配置参数
window.FontAwesomeKitConfig = {
    "asyncLoading": { "enabled": true },
    "autoA11y": { "enabled": true },
    "baseUrl": "https://ka-f.fontawesome.com",
    "detectConflictsUntil": null,
    "iconUploads": {},
    "license": "free",
    "method": "css",
    "minify": { "enabled": true },
    "token": "af562a2a63",
    "v4FontFaceShim": { "enabled": true },
    "v4shim": { "enabled": true },
    "version": "5.15.1"
  };
  
  // 立即执行函数 - 核心加载逻辑
  !(function(t) {
    "function" == typeof define && define.amd ? define(t) : t()
  })((function() {
    "use strict";
    
    // 类型判断函数
    function typeCheck(e) { /* ... */ }
  
    // 对象属性扩展
    function extendObj(t, e, n) { /* ... */ }
  
    // 迭代器处理
    function objectKeys(t) { /* ... */ }
  
    // 核心加载逻辑
    function loadFontAwesome(config, env) {
      // 1. 创建<style>标签
      const styleTag = document.createElement("style");
      
      // 2. 动态生成CSS内容
      const cssContent = generateFontCSS(config);
      
      // 3. 插入DOM
      document.head.insertBefore(styleTag, document.head.firstChild);
      
      // 4. 异步加载逻辑
      return new Promise((resolve, reject) => {
        // 使用XMLHttpRequest或fetch加载资源
        // 包含错误处理/超时处理
      });
    }
  
    // 自动可访问性处理
    function autoAccessibility() {
      // 自动为图标添加ARIA标签
      document.querySelectorAll('.fa, .fab, .fas').forEach(icon => {
        if (!icon.getAttribute('aria-label')) {
          const title = icon.getAttribute('title');
          title && icon.setAttribute('aria-label', title);
        }
      });
    }
  
    // 版本兼容处理
    function v4Shim() {
      // 支持FontAwesome 4的语法
      window.FontAwesome = window.FontAwesome || {};
    }
  
    try {
      // 初始化逻辑
      if (window.FontAwesomeKitConfig) {
        const config = window.FontAwesomeKitConfig;
        const env = {
          document: document,
          fetch: window.fetch,
          XMLHttpRequest: window.XMLHttpRequest
        };
  
        // 根据配置加载资源
        loadFontAwesome(config, env)
          .then(() => {
            // 加载后处理
            autoAccessibility();
            v4Shim();
          })
          .catch(error => {
            console.error(`Font Awesome 加载失败: ${error}`);
          });
      }
    } catch (error) {
      console.error(`Font Awesome 初始化异常: ${error}`);
    }
  }));