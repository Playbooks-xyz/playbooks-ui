module.exports = {
  apps : [{
    name: 'template-web',
    script: 'npm',
    cwd: '/var/apps/template-web',
    output: '/var/log/pm2/output.log',
    error: '/var/log/pm2/error.log',
    log: '/var/log/pm2/log.log',
    args: 'run serve',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '100M',
  }],
};
