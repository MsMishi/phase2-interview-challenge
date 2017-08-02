- When you run a command in the terminal, where does BASH look for that command?
  
  It looks through the directories set in the $PATH.

- On a UNIX computer, how do you stop a running process?
  
  Use the kill -n PID command where -n is the signal number. I use kill -2 or it's shortcut control-c

- What packages do you have installed via homebrew?
  
  brew list:
  autoconf
  exercism
  git
  icu4c
  node
  pkg-config
  readline
  shellcheck
  tree
  cowsay
  fortune
  hub
  lolcat
  openssl
  postgresql
  ruby-build

  brew cask list:
  caffeine                                
  dash                                    
  growlnotify                             
  kap
  postman


- On a UNIX computer, how do you find the process id of a running process?
  
  Typing the command ps will show all processes that are running including the PID of each process.

- In a terminal, what does control-c do?
  
  Control-c interrupts which is a form of killing or stopping the current process.

- What would be the result of typing the following commands?
```sh
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd
```
```sh
  $ /Users/steve/
    foo
  $ /Users/steve/
    foo bar
  $ /Users/steve/foo/
    bar
```

- How do you set an environment variable in your shell?
  
  Open your .bashrc then write export variablename='desired variable'

- What keyboard shortcut do you use to split the screen in your editor?
  
  Command-k and then the direction

- How do you create an alias in your shell?
  
  You open your .bashrc add alias aliasname='desired command'

- When a terminal command completes, how can you tell if it was successful or not?
  
  Typing $? will return the ext status code of the previous command: 0 means it was successful, 1 means it failed.


- What does your `~/.gitconfig` have in it? (paste the whole file here)
  
  # This is Git's per-user configuration file.
  [user]
  # Please adapt and uncomment the following lines:
  #	name = Michelle Charles
  #	email = michellecharles@LGs-MacBook-Pro.local
[user]
name = MsMishi
email = mcwcharles@gmail.com
[core]
editor = atom
excludesfile = /Users/michellecharles/.gitignore_global


- What is the difference between a relative and absolute path?
  
  An absolute path is relative to the root directory while a relative path is relative to the current directory.

- Lets say you have the following file structure

  ```sh
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?
  ```sh
  cp ./README.md ../pinterest-for-dogs/
  ```

- What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
  
  command-t will allow me to search for the file in my project.

- What files or folders do you want all git repositories to ignore?
  
  .DS_Store, .gitignore, and node_modules

- What is the main difference between `Array.map` and `Array.forEach` in JavaScript?
  
  Array.map returns a new Array with transformed values, meaning whatever you iterate through map will automatically be pushed to a new array.
  Array.forEach will basically act as a for loop then you can choose what to do with those changes.
