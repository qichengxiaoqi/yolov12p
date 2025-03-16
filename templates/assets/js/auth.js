// 初始化本地存储
function initStorage() {
    if (!localStorage.getItem('users')) {
        const users = [
            { username: 'admin', password: 'admin123', role: 'admin' },
            { username: 'user', password: 'user123', role: 'user' }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// 显示错误信息
function showError(message) {
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
    setTimeout(() => errorMsg.style.display = 'none', 3000);
}

// 登录验证逻辑
function validateLogin(username, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.find(u => u.username === username && u.password === password);
}

// 表单提交处理
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember').checked;

    // 输入验证
    if (!username || !password) {
        showError('请输入用户名和密码');
        return;
    }

    const user = validateLogin(username, password);

    if (user) {
        // 记住用户名
        if (rememberMe) {
            localStorage.setItem('rememberedUser', username);
        } else {
            localStorage.removeItem('rememberedUser');
        }

        // 跳转逻辑
        switch(user.role) {
            case 'admin':
                window.location.href = 'admin.html';
                break;
            case 'user':
                window.location.href = 'user.html';
                break;
            default:
                showError('未知用户类型');
        }
    } else {
        showError('用户名或密码错误');
    }
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initStorage();

    // 自动填充记住的用户名
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        document.getElementById('username').value = rememberedUser;
        document.getElementById('remember').checked = true;
    }
});