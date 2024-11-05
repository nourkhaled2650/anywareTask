import i18n from "../utils/i18n";

export const Navbar = () => {
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>Arabic</button>
    </div>
  );
};
