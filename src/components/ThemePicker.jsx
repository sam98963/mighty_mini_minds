export default function ThemePicker({onThemeChange}) {
  return (
    <div className="flex flex-col justify-around bg-skin-secondary rounded-full w-10 h-68" >
      <button className="text-2xl transition-colors duration-300 ease-in-out transform hover:scale-150" onClick={() => onThemeChange('')}>☁️</button>
      <button className="text-2xl transition-colors duration-300 ease-in-out transform hover:scale-150" onClick={() => onThemeChange('theme-beach')}>🏖️</button>
      <button className="text-2xl transition-colors duration-300 ease-in-out transform hover:scale-150" onClick={() => onThemeChange('theme-forest')}>🌳</button>
      <button className="text-2xl transition-colors duration-300 ease-in-out transform hover:scale-150" onClick={() => onThemeChange('theme-space')}>🚀</button>
      <button className="text-2xl transition-colors duration-300 ease-in-out transform hover:scale-150" onClick={() => onThemeChange('theme-under_the_sea')}>🐠</button>
      <button className="text-2xl transition-colors duration-300 ease-in-out transform hover:scale-150" onClick={() => onThemeChange('theme-stars')}>⭐</button>
    </div>
      );
}