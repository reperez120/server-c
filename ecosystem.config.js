module.exports = {
  apps : [{
    name: 'server-c',
    script: './index.js'
  }],
  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-18-188-247-88.us-east-2.compute.amazonaws.com',
      key : '~/.ssh/c.pem',
      ref  : 'origin/master',
      repo : 'https://github.com/reperez120/server-c.git',
      path : '/home/ubuntu/server-c',
      'post-deploy' : 'npm install && pm2 startOrrestart ecosystem.config.js'
    }
  }
}


