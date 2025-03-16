// 用户数据结构
const users = [
    {
      username: 'admin@123', // 唯一标识
      password: '123', // 明文存储（仅限测试环境）
      role: 'admin',
      createdAt: new Date().toISOString()
    },
    {
      username: 'user@123',
      password: '123',
      role: 'user',
      createdAt: new Date().toISOString()
    }
  ];
  
  // 初始化存储
  localStorage.setItem('users', JSON.stringify(users));