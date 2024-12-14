const setupData = {
  hardware: [
    { name: "Mac Mini M1 16GB", description: "Main computer" },
    {
      name: "Keychron K2 Pro",
      description: "Keyboard",
      link: "https://www.keychron.com/products/keychron-k2-pro-qmk-via-wireless-mechanical-keyboard?_pos=1&_psq=k2&_ss=e&_v=1.0",
    },
    {
      name: "LG DualUp Ergo 28 Inch",
      description: "Monitor",
      link: "https://www.lg.com/us/monitors/lg-28mq780-b-dualup-monitor",
    },
    {
      name: "Logitech MX Ergo",
      description: "Mouse",
      link: "https://www.logitech.com/en-us/products/mice/mx-ergo-wireless-trackball-mouse.html",
    },
  ],
  apps: {
    general: [
      { name: "Arc", description: "Browsing", link: "https://arc.net/" },
      {
        name: "Obsidian",
        description: "Taking notes",
        link: "https://obsidian.md/",
      },
      { name: "Spotify", description: "Music" },
    ],
    development: [
      {
        name: "Neovim",
        description: "Coding",
        link: "https://github.com/neovim/neovim",
      },
      {
        name: "Kitty",
        description: "Terminal",
        link: "https://github.com/kovidgoyal/kitty",
      },
    ],
    browserExtensions: [
      {
        name: "Font Ninja",
        description: "Check website fonts",
        link: "https://www.fonts.ninja/",
      },
      {
        name: "ChatGPT Writer",
        description: "Quick email responses",
        link: "https://chatgptwriter.ai/",
      },
      {
        name: "Huntr",
        description: "Job search tracker",
        link: "https://huntr.co/",
      },
    ],
  },
  developerTools: {
    packageManagement: [
      {
        name: "fnm",
        description: "Node version management",
        link: "https://github.com/Schniz/fnm",
      },
      {
        name: "pyenv",
        description: "Python version management",
        link: "https://github.com/pyenv/pyenv",
      },
      {
        name: "homebrew",
        description: "macOS package management",
        link: "https://brew.sh/",
      },
    ],
    shell: [
      { name: "zsh", description: "Shell", link: "https://www.zsh.org/" },
      {
        name: "oh-my-zsh",
        description: "Shell improvement",
        link: "https://ohmyz.sh/",
      },
      {
        name: "exa",
        description: "ls replacement",
        link: "https://github.com/ogham/exa",
      },
      {
        name: "zellij",
        description: "Terminal workspace",
        link: "https://zellij.dev/",
      },
    ],
    desktopEnvironment: [
      {
        name: "Yabai",
        description: "i3 style for macOS",
        link: "https://github.com/koekeishiya/yabai",
      },
      {
        name: "Sketchybar",
        description: "Enhancing macOS",
        link: "https://github.com/FelixKratz/SketchyBar",
      },
      {
        name: "Catppuccin",
        description: "Theme for everything",
        link: "https://github.com/catppuccin/catppuccin",
      },
    ],
  },
  gaming: [
    {
      name: "OpenEmu",
      description: "Retro gaming",
      link: "https://openemu.org/",
    },
    {
      name: "AetherSX2",
      description: "PS2 emulation",
      link: "https://aethersx2.net/",
    },
  ],
};

export default setupData;
