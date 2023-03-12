# Install
## curl install
### github
```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### gitee
```bash
sh -c "$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)"
```

## wget install
### github
```bash
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

### gitee
```bash
sh -c "$(wget -O- https://gitee.com/pocmon/mirrors/raw/master/tools/install.sh)"
```

# Theme configuration
## configuration file
```bash
open ~.zshrc
```

## modify this line
```bash
ZSH_THEME="agnoster"
```

## themes list
```
Directory: /Users/scoheart/.oh-my-zsh/themes
```
> Github: https://github.com/ohmyzsh/ohmyzsh/wiki/Themes

# Install *powerlevel10k*
## gitee
```bash
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

## configuration file
```bash
open ~.zshrc
```

## modify this line
```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

# p10k configuration
## start config
```bash
p10k configure
```

## install fonts
> Github: https://github.com/romkatv/powerlevel10k#fonts


# Visual Studio Code
## font setting
- search: terminal.integrated.fontFamily
- value: MesloLGS NF

## style setting
- open: setting.json
- property: workbench.colorCustomizations
- value: https://glitchbone.github.io/vscode-base16-term/#/3024

# iTerm2
## font setting
- _iTerm2 → Preferences → Profiles → Text_ and set _Font_ to `MesloLGS NF`.

# Mac Terminal
## font setting
- Open _Terminal → Preferences → Profiles → Text_, click _Change_ under _Font_ and select `MesloLGS NF` family.





/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"