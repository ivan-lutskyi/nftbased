import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import en from '../translations/en.json';
import fr from '../translations/fr.json';

const languages = { en, fr };

export const useTranslation = () => {
  const currentLanguage = useSelector((state: IRootState) => state.core.language.value);

  // @ts-ignore
  const translations = languages[currentLanguage];

  const translate = (translationKey: string) => translations[translationKey] || translationKey;

  return translate;
};
