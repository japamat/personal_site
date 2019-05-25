

function getHelp(command) {
  console.log('command', command);
  
  const terms = {
    help: 'Display information about builtin commands.',
    pwd: 'pwd: Print the name of the current working directory',
    cd: 'cd: Change the shell working directory.',
    ls: 'ls -- list directory contents',
	};
	if (terms.hasOwnProperty(command)) {
		return terms[command];
	} else {
    
		return `-bash: help: no help topics match '${command}'.  Try 'help help' or 'man ${command}' or 'info ${command}'.`;
	}
}

function clear() {
  this.setState(st => ({commands: []}));
}

function showPath() {
  return this.state.pwd;
}

function changeDir(dirName, rootDir, oldPwd) {
  console.log(dirName[0]);
  
  if (dirName[0] === '..') {
    const pwdArr = oldPwd.split('/').slice(1);
    pwdArr.pop();
    const pwd = `/${pwdArr.join('/')}`;
    this.setState({ pwd })
  } else if (dirName) {
    // need to move one more in the root heirarchy
    let curDir = oldPwd
      .split('/')
      .filter(Boolean)
      .reduce((acc, fol) => acc[fol], rootDir);
    
    if (curDir.hasOwnProperty(dirName)) {
      curDir = curDir[dirName];
      const pwd = `${oldPwd}/${dirName}`;
      this.setState({ pwd })
    }
    console.log(curDir);
  }
}

export {
  getHelp,
  clear,
  showPath,
  changeDir
};
