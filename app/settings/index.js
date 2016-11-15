import settings from 'electron-settings';
console.log(settings.getSettingsFilePath());

settings.defaults({
});

export default settings;
