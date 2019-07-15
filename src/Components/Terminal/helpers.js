

function getHelp(command) {
  const terms = {
    help: 'Display information about builtin commands.',
    pwd: 'pwd: Print the name of the current working directory',
    cd: 'cd: Change the shell working directory.',
    ls: 'ls -- list directory contents',
    clear: 'Clear -- clear the terminal display of previously run commands',
	};
	if (terms.hasOwnProperty(command)) {
		return [terms[command]];
	} else if (!command.length) {
    return Object.keys(terms);
  } else {
		return `-bash: help: no help topics match '${command}'.  Try 'help help' or 'man ${command}' or 'info ${command}'.`;
	}
}

function clear() {
  this.setState(st => ({ loadIdx: st.commands.length }));
}

function showPath() {
  return [this.state.pwd];
}

function handleCD(dirName, rootDir, oldPwd) {
  let pwd = { pwd: oldPwd };

  if (dirName[0].indexOf('/') > -1) {
    let dirArr = dirName[0]
      .split('/')
      .filter(Boolean);

    dirArr.forEach(dir => {
      // debugger;
      if (pwd.pwd) {
        pwd = changeDir(dir, rootDir, pwd.pwd);
      } else {
        return [`-bash: cd: ${pwd.badDir}: No such file or directory`];
      }
    });
  } else {
    pwd = changeDir(dirName[0], rootDir, pwd.pwd);
  }
  if (pwd.pwd) this.setState({ pwd: pwd.pwd });
  else return [`-bash: cd: ${pwd.badDir}: No such file or directory`];
}

function changeDir(dirName, rootDir, oldPwd) {
  
  if (dirName === '..') {
    const pwdArr = oldPwd.split('/').slice(1);
    pwdArr.pop();
    const pwd = `/${pwdArr.join('/')}`;
    return { pwd };
  } else if (dirName) {
    // need to move one more in the root heirarchy
    let curDir = getCurDir(oldPwd, rootDir);
    
    if (curDir.hasOwnProperty(dirName)) {
      curDir = curDir[dirName];
      const pwd = `${oldPwd}/${dirName}`;
      return { pwd };
    } else {
      return { pwd: null, badDir: dirName };
    }
  }
}

function listContents(flagsArr, pwd, rootDir) {
  let curDir = getCurDir(pwd, rootDir);
  let inFolder = Object.keys(curDir);
  
  return flagsArr[0] === '-a'
    ? [inFolder.join(`\xa0`.repeat(7))]
    : [inFolder.filter(item => item[0] !== '.')
      .join(`\xa0`.repeat(7))];
}

function getCurDir(pwd, rootDir) {
  return pwd
    .split('/')
    .filter(Boolean)
    .reduce((acc, fol) => acc[fol], rootDir);
}

export {
  getHelp,
  clear,
  showPath,
  handleCD,
  listContents,
};
