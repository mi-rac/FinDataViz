import en from './en.json';
import fr from './fr.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: { en, fr }
}))
