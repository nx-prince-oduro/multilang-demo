export default function Layout({ children, locale, locales, defaultLocale }) {
  return (
    <div className="">
      {children}
      <p>{locale}</p>
    </div>
  );
}
