export default function ThemePicker({onThemeChange}) {
    return (
      <div className="flex flex-col">
      <button onClick={() => onThemeChange('')}></button>
      <button className="m-4" onClick={() => onThemeChange('theme-beach')}>🏖️</button>
      <button onClick={() => onThemeChange('theme-forest')}>🌳</button>
      <button onClick={() => onThemeChange('theme-space')}>🚀</button>
      <button onClick={() => onThemeChange('theme-under_the_sea')}>🐠</button>
      <button onClick={() => onThemeChange('theme-stars')}>⭐</button>
      </div>
      );
  }