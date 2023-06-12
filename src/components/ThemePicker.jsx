export default function ThemePicker({onThemeChange}) {
    return (

      <div className="flex flex-col">
      <button onClick={() => onThemeChange('')}>🎨</button>
      <button className="m-4" onClick={() => onThemeChange('theme-beach')}>🏖️</button>
      <button onClick={() => onThemeChange('theme-forest')}>🌳</button>
      <button onClick={() => onThemeChange('theme-space')}>🚀</button>
      <button onClick={() => onThemeChange('theme-under_the_sea')}>🐠</button>
      <button onClick={() => onThemeChange('theme-stars')}>⭐</button>

      <div className="flex justify-center color text-skin-muted">
      <button onClick={() => onThemeChange('')}>Clouds</button>
      <button className="m-4" onClick={() => onThemeChange('theme-beach')}>Beach</button>
      <button onClick={() => onThemeChange('theme-forest')}>Forest</button>
      <button onClick={() => onThemeChange('theme-space')}>Space</button>
      <button onClick={() => onThemeChange('theme-under_the_sea')}>SSeapace</button>
      <button onClick={() => onThemeChange('theme-stars')}>Stars</button>

      </div>
      );
  }