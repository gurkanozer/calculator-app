class ThemeSwitch {
  constructor(themeSwitches, themes, rootElement) {
    this.switches = themeSwitches;
    this.themes = themes;
    this.root = rootElement;
  }

  changer(selectedTheme) {
    let newTheme;
    for (let [key, value] of Object.entries(this.themes)) {
      if (key === selectedTheme) newTheme = value;
    }
    for (const [key, value] of Object.entries(newTheme)) {
      this.root.style.setProperty(`--color-${key}`, value);
    }
  }
}

export default ThemeSwitch;
