// 在全局作用域中检查 navigator.clipboard 是否可用
const clipboardAvailable = navigator.clipboard && window.isSecureContext;

export function copyToClipboard(text) {
  // 如果 navigator.clipboard 可用，则使用新的 API 复制文本
  if (clipboardAvailable) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      // 兜底处理：如果复制失败，尝试使用旧的 API 或者提示用户手动复制
      fallbackCopyTextToClipboard(text);
    });
  } else {
    // 浏览器不支持 navigator.clipboard API，使用旧的 API 或者提示用户手动复制
    fallbackCopyTextToClipboard(text);
  }
}

// 兜底处理函数：使用旧的 API 或者提示用户手动复制
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      console.log('Text copied to clipboard using fallback method');
    } else {
      console.error('Fallback copy method failed');
    }
  } catch (err) {
    console.error('Fallback copy method failed', err);
  }
  
  document.body.removeChild(textArea);
}

