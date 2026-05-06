module.exports = {
  types: [
    { value: 'feat', name: '✨ feat:     新功能' },
    { value: 'fix', name: '🐛 fix:     修复' },
    { value: 'docs', name: '📝 docs:     文档变更' },
    { value: 'style', name: '💄 style:     代码格式' },
    { value: 'refactor', name: '♻️  refactor:     重构' },
    { value: 'perf', name: '⚡ perf:     性能优化' },
    { value: 'test', name: '✅ test:     测试相关' },
    { value: 'chore', name: '🔧 chore:     工具/配置' },
    { value: 'revert', name: '⏪ revert:     回退' },
    { value: 'build', name: '📦 build:     打包' },
    { value: 'ci', name: '👷 ci:     CI/CD' }
  ],
  messages: {
    type: '选择提交类型:\n',
    customScope: '请输入修改范围 (可选):\n',
    subject: '请简要描述 (必填):\n',
    body: '请输入详细描述 (可选，使用 "|" 换行):\n',
    footer: '关闭的 issue (可选):\n',
    confirmCommit: '确认提交？(y/n/e/h)\n'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'refactor', 'perf'],
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72,
  breaklineChar: '|'
}