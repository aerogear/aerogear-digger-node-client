## AeroGear Digger Node.js client

AeroGear digger node.js command line client. 
Create Jenkins job and build your application using Jenkinsfile located in your source code.
For more information about this project go to https://github.com/aerogear/digger-jenkins

## Sample use case

Login to Jenkins. Your credentials will be stored in configuration.
```
digkins login http://myjenkins.com
```

Create job that would use your repository as source code
```
digkins job create my-androip-build https://github.com/android-build/project master
```

Trigger build
```
digkins job build my-androip-build
```

## Supported commands
```
  Trigger build for Jenkins job
  digkins job build <jobname>                

  Create jenkins job for git repository with Jenkinsfile                         
  digkins job create <name> [repository] [branch]  

  Setup jenkins credetials and login into jenkins                          
  digkins login <url> [user] [password] 

  Stream jenkins logs for triggered build
  digkins log <job> <queueid>       

  Generate bash completion script
  digkins completion                     
```
## Development

1. Install node.js
2. Checkout repository
3. Link library to use directly from source code

`npm link .` 

