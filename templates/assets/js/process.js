// 主JavaScript文件，用于交通标志识别功能
// assets/js/prediction.js

//图片预览
document.getElementById('imageInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const previewContainer = document.getElementById('imagePreview');
    const displayImage = document.getElementById('displayImage');
    const uploadPrompt = previewContainer.querySelector('.upload-prompt');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            displayImage.src = e.target.result;
            uploadPrompt.style.display = 'none';
            displayImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// 修改后的上传函数
async function uploadMedia() {
  const input = document.getElementById('imageInput');
  const resultContainer = document.getElementById('resultContainer');
  const file = input.files[0];

  if (!file) {
    showError('请先选择文件');
    return;
  }


  // window.alert("chenggong")

  // 显示加载状态
  resultContainer.innerHTML = '<p class="loading">处理中，请稍候...</p>';

  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/predict', {
      method: 'POST',
      body: formData
    });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || '服务器错误');
  }

  const data = await response.json();

  // 显示处理结果
  resultContainer.innerHTML = `
    <div class="result-content">
        <div class="result-text mb-3">
            <i class="fas fa-chart-line mr-2"></i>
            识别类别：<span class="color-primary">${data.ttype}</span>
        </div>
        <div class="result-text mb-3">
            <i class="fas fa-chart-line mr-2"></i>
            预测概率：<span class="color-primary">${data.confidence}%</span>
        </div>
        <div class="result-text mb-4">
            <i class="fas fa-clock mr-2"></i>
            处理耗时：<span class="color-muted">${data.processing_time}秒</span>
        </div>
        <div>
             ${data.result_url.endsWith('.mp4') ?
            `<video controls><source src="${data.result_url}" type="video/mp4"></video>` :
            `<img src="${data.result_url}" alt="检测结果">`
          }                                       
        </div>
    </div>
  `;

  } catch (error) {
    showError(error.message);
  }
}

function showError(message) {
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = `<p class="error">错误: ${message}</p>`;
  setTimeout(() => resultContainer.innerHTML = '', 3000);
}