import Container from '../../src/components/ui-components/Container';
import LegalSection from '../../src/components/legal/LegalSection';
import Separator from '../../src/components/ui-components/Separator';
import Link from '../../src/components/ui-components/Link';
import { DELETE_ACCOUNT_ACTION } from '../../src/components/auth/profile/DeleteAccount';
import ContactData from '../../src/components/legal/ContactData';
import Heading from '../../src/components/ui-components/Heading';
import { NextSeo } from 'next-seo';

const PrivacyPolicy = (): JSX.Element => {
  return (
    <>
      <NextSeo title="Privacy Policy" />
      <Container className="gap-10">
        <Heading>Privacy Policy</Heading>
        <LegalSection
          heading={`Thank you for using ${process.env.NEXT_PUBLIC_SERVICE_NAME}`}
          content={
            <>
              <p>
                This is the official website of{' '}
                {process.env.NEXT_PUBLIC_WEBSITE_OWNER}. To create the
                experience you deserve, we and third-parties collect specific
                data from you. We only use that information where we have a
                proper legal basis for doing so.
              </p>
              <p>
                We wrote this policy to help you understand what information we
                collect, how we use it and what choices you have about it. At
                some points it may become technical, however we try our best to
                explain things in a simple and clear way
              </p>
            </>
          }
        />
        <LegalSection
          heading="What data we collect"
          content={
            <>
              <div>
                <h3>
                  1. Data you give us or grant us the permission to retrieve
                  them
                </h3>
                <p>
                  When you sign in to our service, you voluntarily share certain
                  information with us. Something you must provide us upon
                  signing in is your <strong>email address</strong>.
                </p>
                <p>
                  When you use social login services like Google and Facebook
                  login, more than your email address is sent to our system,
                  including but not limited to your profile picture and your
                  name. This is dependent on the privacy policies or settings
                  for those accounts. We would like to note that we do not use
                  your profile picture in our application and thus don&apos;t
                  save it in our database.
                </p>
                <p>
                  When you contact us via phone or email, you share your phone
                  number and/or email address with us. We will use these data
                  solely to solve your inquiry.
                </p>
              </div>
              <Separator text="and" />
              <div>
                <h3>2. Technical information we retrieve from you</h3>
                <p>
                  When you use a website, mobile application or other internet
                  service, certain internet and electronic network activity
                  information gets created and logged automatically. This is
                  also true when you use {process.env.NEXT_PUBLIC_SERVICE_NAME}.
                  Here are some of the types of information we collect:
                </p>
                <ul className="list-disc">
                  <li>
                    <strong>Log data:</strong> When you use{' '}
                    {process.env.NEXT_PUBLIC_SERVICE_NAME}, our servers record
                    information (&quot;log data&quot;), including information
                    that your browser automatically sends whenever you visit a
                    website, or that your mobile app automatically sends when
                    you’re using it. The log data includes your anonymized IP
                    address, request headers, timestamp, status code,
                    information about your device (&quot;user agent&quot;) and
                    the referrer url.
                  </li>
                  <li>
                    <strong>Cookie data:</strong> This website uses cookies.
                    Cookies are not dangerous, they are small text files that
                    store user-specific information, for example your preferred
                    language or your consent to third-party services like
                    Analytics. We use session cookies (that last until you close
                    your browser) or persistent cookies (that last until you or
                    your browser delete them). For more information about how we
                    use cookies, please review our{' '}
                    <Link action="/legal/cookie-policy">cookie policy</Link>.
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <LegalSection
          heading="What we do with the info you provide us"
          content={
            <>
              <p>
                In general, we use the information that we collect to ensure
                that you have the most secure and enjoyable experience as
                possible when using our site.
              </p>
              <p>
                Part of your information is used to securely log you in and
                ensure a bug-free experience. Especially the so called
                &quot;session cookies&quot; are exclusively used for this
                purpose.
              </p>
              <p>
                The analytics data we collect help us identifying and analyzing
                the traffic of our website and the interests of its visitors. We
                have a legitimate interest to collect them in order to improve
                our services. Of course we will only collect analytic data after
                your consent (&quot;Opt-in&quot; consent).
              </p>
            </>
          }
        />
        <LegalSection
          heading="Transferring your data"
          content={
            <>
              <p>
                By using our products or services, you authorize us to transfer
                and store your information outside your home country, including
                in the United States, for the purposes described in this policy.
                The privacy protections and the rights of authorities to access
                your personal information in such countries may not be
                equivalent to those of your home country.
              </p>
            </>
          }
        />
        <LegalSection
          heading="Choices you have"
          content={
            <>
              <p>
                Our goal is to give you simple and meaningful choices regarding
                your information. This is why we provide you with a profile
                page, where you can alter your information. For example you can:
              </p>
              <ul className="list-disc">
                <li>
                  <Link action="/profile">
                    Edit information in your profile
                  </Link>
                  : Everything related to your profile, such as your nickname or
                  bio can be changed.
                </li>
                <li>
                  <Link action={`/profile?action=${DELETE_ACCOUNT_ACTION}`}>
                    Delete your account
                  </Link>
                  : You can permanently delete your account and all information
                  associated with it.
                </li>
                <li>
                  Unlink your social login: Over the settings of the respective
                  login provider you can revoke access to our website at any
                  time.
                </li>
              </ul>
              <p>
                You also have choices available to you through the device or
                software you use to access{' '}
                {process.env.NEXT_PUBLIC_SERVICE_NAME}. For example the browser
                you use lets you control cookies or other types of local data
                storage.
              </p>
            </>
          }
        />
        <LegalSection
          heading="How and when we share information"
          content={
            <>
              <p>We share your information with:</p>
              <ul className="list-disc">
                <li>
                  Other services, at your direction, to enable you to sign up
                  for or log in to {process.env.NEXT_PUBLIC_SERVICE_NAME}{' '}
                  (social logins like Google and Facebook).
                </li>
                <li>
                  Online advertisers and third-party companies that we or they
                  use to audit or improve the delivery and performance of ads or
                  content on websites and apps (for example, through Google
                  Analytics).
                </li>
                <li>
                  Law enforcement agencies or government agencies. We only share
                  information if we believe that disclosure is reasonably
                  necessary to comply with a law, regulation or legal request;
                  to protect the safety, rights, or property of the public, any
                  person, or {process.env.NEXT_PUBLIC_WEBSITE_OWNER}; or to
                  detect, prevent, or otherwise address fraud, security or
                  technical issues.
                </li>
              </ul>
            </>
          }
        />
        <LegalSection
          heading="How long we keep your information"
          content={
            <p>
              We keep your information only so long as we need it to provide our
              service to you and fulfill the purposes described in this policy.
              This is also the case for anyone that we share your information
              with and who carries out services on our behalf. When we no longer
              need to use your information and there is no need for us to keep
              it to comply with our legal or regulatory obligations, we’ll
              remove it from our systems.
            </p>
          }
        />
        <LegalSection
          heading="Your options"
          content={
            <>
              <p>
                You have options in relation to the information that we have
                about you. These include:
              </p>
              <ul className="list-disc">
                <li>
                  Request access to the information we collect and hold about
                  you. We&apos;ll usually share this with you within 30 days of
                  you asking us for it through our{' '}
                  <Link action="/contact" inNewTab>
                    contact page
                  </Link>
                  .
                </li>
                <li>
                  Have your information corrected or deleted. You can update
                  your information in your{' '}
                  <Link action="/profile">profile</Link> or delete your data by{' '}
                  <Link action={`/profile?action=${DELETE_ACCOUNT_ACTION}`}>
                    closing your account
                  </Link>
                  .
                </li>
                <li>
                  Object to us processing your information. You can ask us to
                  stop using your information.
                </li>
                <li>
                  Have the information you provided to us sent to another
                  organization, where we hold this information with your consent
                  or for the performance of a contract with you, and, where
                  it&apos;s technically feasible for us to do so.
                </li>
                <li>
                  Request more details about the information we collect and how
                  and why we use and share it.
                </li>
              </ul>
            </>
          }
        />
        <LegalSection
          heading="How we make changes to this policy"
          content={
            <p>
              We may change this policy from time to time and if we do, we’ll
              post any changes on this page. If you continue to use{' '}
              {process.env.NEXT_PUBLIC_SERVICE_NAME} after those changes are in
              effect, you agree to the new policy. If the changes are
              significant, we may provide a more prominent notice or get your
              consent, as required by law.
            </p>
          }
        />
        <LegalSection
          heading="Contact us"
          content={
            <>
              <p>
                For further questions or inquiries of any kind, feel free to
                contact us at:
              </p>
              <ContactData />
            </>
          }
        />
      </Container>
    </>
  );
};

export default PrivacyPolicy;
