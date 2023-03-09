export default function Layout({ children, locale, locales, defaultLocale }) {
  console.log(`locale is ${locale}`);
  console.log(`locales are ${locales}`);
  console.log(`defaultLocale is ${defaultLocale}`);

  return (
    <div className="">
      {children}
      <p>{locale}</p>
    </div>
  );
}
