import LegalSection from '../../src/components/legal/LegalSection';
import Link from '../../src/components/ui-components/Link';
import Container from '../../src/components/ui-components/Container';
import { useSetRecoilState } from 'recoil';
import { sIsCookieWindowOpen } from '../../src/store';
import Heading from '../../src/components/ui-components/Heading';
import { NextSeo } from 'next-seo';

interface IProps {}

const CookiePolicy = (): JSX.Element => {
  const setIsCookieWindowOpen = useSetRecoilState(sIsCookieWindowOpen);

  return (
    <>
      <NextSeo title="Cookie Policy" />
      <Container className="gap-10">
        <Heading>Cookie Policy</Heading>
        <LegalSection
          heading={`Cookies on ${process.env.NEXT_PUBLIC_SERVICE_NAME}`}
          content={
            <p>
              Our{' '}
              <Link action="/legal/privacy-policy" inNewTab>
                privacy policy
              </Link>{' '}
              describes how we collect and use information, and what choices you
              have. One way we collect information is through the use of a
              technology called &quot;cookies&quot;, and similar technologies,
              such as pixels, local storage and software development kits
              (SDKs). We use cookies on our website.
            </p>
          }
        />
        <LegalSection
          heading="What is a cookie?"
          content={
            <>
              <p>
                When you go online, you use a program called a
                &quot;browser&quot; (like Apple&apos;s Safari or Google&apos;s
                Chrome). Most websites store a small amount of text in the
                browser — that text is called a &quot;cookie.&quot;
              </p>
              <p>
                We use session cookies (that last until you close your browser)
                or persistent cookies (that last until you or your browser
                delete them). For example, we use persistent cookies to store
                your language preferences or other settings so you don‘t have to
                set them up every time you visit{' '}
                {process.env.NEXT_PUBLIC_SERVICE_NAME}.
              </p>
              <p>
                Some of the cookies we use are associated with your{' '}
                {process.env.NEXT_PUBLIC_SERVICE_NAME} account (including
                information about you, such as the email address you gave us)
                and other cookies are not.
              </p>
            </>
          }
        />
        <LegalSection
          heading="How we use cookies"
          content={
            <>
              <p>There are 2 types of cookies we may use:</p>
              <ul className="list-disc">
                <li>
                  <strong>Essential cookies</strong> are required so{' '}
                  {process.env.NEXT_PUBLIC_SERVICE_NAME}
                  works in the way you expect. Examples of these types of
                  cookies are login cookies which keep you logged in as you
                  browse the website.
                </li>
                <li>
                  <strong>Analytics cookies</strong>, which are used for
                  internal analytics and include cookies from providers like{' '}
                  <Link action="https://policies.google.com/privacy?hl=en-US">
                    Google Analytics
                  </Link>
                  .
                </li>
                {/*<li>
                <strong>Functional cookies</strong> help us remembering your
                preferences, e.g. your preferred language or theme.
              </li>*/}
              </ul>
            </>
          }
        />
        <LegalSection
          heading="What we do with the cookies in each category"
          content={
            <>
              <h3>Essential cookies</h3>
              <p>
                Essential cookies are solely used to provide you with a bug-free
                and secure experience. That includes cookies that are related to
                logging you in and keeping you logged in.
              </p>
              <h3>Analytics cookies</h3>
              <p>
                We use analytics cookies to make{' '}
                {process.env.NEXT_PUBLIC_SERVICE_NAME} better. For example,
                these cookies tell us how many people use a certain feature/page
                and how popular it is.
              </p>
              {/*<h3>Functional cookies</h3>
            <p>
              We use functional cookies to enhance your experience. For example,
              by storing your preferred language in a cookie, you don&apos;t
              have to set it every time you visit our site.
            </p>*/}
            </>
          }
        />
        <LegalSection
          heading="Your options"
          content={
            <>
              <p>
                First of all, all cookies that are not essential are so called
                &quot;Opt-in&quot; cookies. That means you actively have to give
                us your consent to set analytics cookies before we set them.
              </p>
              <p>
                In case you made a cookie decision in our cookie window and wish
                to revoke or edit your choices, you can do so anytime by{' '}
                <Link action={() => setIsCookieWindowOpen(true)}>
                  reopening the cookie window
                </Link>{' '}
                and changing your preferences.
              </p>
              <p>
                Your browser also gives you cookie choices. For example, most
                browsers let you block &quot;third-party cookies&quot;, which
                are cookies from sites other than the one you’re visiting. Those
                options vary from browser to browser, so check your browser
                settings for more info.
              </p>
            </>
          }
        />
      </Container>
    </>
  );
};

export default CookiePolicy;
