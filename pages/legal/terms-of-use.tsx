import Container from '../../src/components/ui-components/Container';
import LegalSection from '../../src/components/legal/LegalSection';
import ContactData from '../../src/components/legal/ContactData';
import Spacer from '../../src/components/ui-components/Spacer';
import Link from '../../src/components/ui-components/Link';
import Heading from '../../src/components/ui-components/Heading';
import { NextSeo } from 'next-seo';

const TermsOfUse = (): JSX.Element => {
  return (
    <>
      <NextSeo title="Terms of use" />
      <Container className="gap-10">
        <Heading>Terms of use</Heading>
        <LegalSection
          heading="Agreement to terms"
          content={
            <>
              <p>
                These Terms of Use constitute a legally binding agreement made
                between you, whether personally or on behalf of an entity
                (&quot;you&quot;) and {process.env.NEXT_PUBLIC_WEBSITE_OWNER}{' '}
                (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot; or
                &quot;our&quot;), concerning your access to and use of the{' '}
                {process.env.NEXT_PUBLIC_URL} website as well as any other media
                form, media channel, mobile website or mobile application
                related, linked, or otherwise connected thereto (collectively,
                the &quot;Site&quot;). You agree that by accessing the Site, you
                have read, understood, and agreed to be bound by all of these
                Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF
                USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND
                YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
              <p>
                Supplemental terms and conditions or documents that may be
                posted on the Site from time to time are hereby expressly
                incorporated herein by reference. We reserve the right, in our
                sole discretion, to make changes or modifications to these Terms
                of Use from time to time. We will alert you about any changes by
                updating the &quot;Last updated&quot; date of these Terms of
                Use, and you waive any right to receive specific notice of each
                such change. Please ensure that you check the applicable Terms
                every time you use our Site so that you understand which Terms
                apply. You will be subject to, and will be deemed to have been
                made aware of and to have accepted, the changes in any revised
                Terms of Use by your continued use of the Site after the date
                such revised Terms of Use are posted.
              </p>
              <p>
                The information provided on the Site is not intended for
                distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
                Accordingly, those persons who choose to access the Site from
                other locations do so on their own initiative and are solely
                responsible for compliance with local laws, if and to the extent
                local laws are applicable.
              </p>
              <p>
                The information provided on the Site is not intended for
                distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
                Accordingly, those persons who choose to access the Site from
                other locations do so on their own initiative and are solely
                responsible for compliance with local laws, if and to the extent
                local laws are applicable.
              </p>
              <p>
                The Site is intended for users who are at least 18 years old.
                Persons under the age of 18 are not permitted to use or register
                for the Site.
              </p>
            </>
          }
        />
        <LegalSection
          heading="Intellectual Property Rights"
          content={
            <>
              Unless otherwise indicated, the Site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the &quot;Content&quot;) and the trademarks,
              service marks, and logos contained therein (the &quot;Marks&quot;)
              are owned or controlled by us or licensed to us, and are protected
              by copyright and trademark laws and various other intellectual
              property rights and unfair competition laws of the United States,
              international copyright laws, and international conventions. The
              Content and the Marks are provided on the Site &quot;AS IS&quot;
              for your information and personal use only. Except as expressly
              provided in these Terms of Use, no part of the Site and no Content
              or Marks may be copied, reproduced, aggregated, republished,
              uploaded, posted, publicly displayed, encoded, translated,
              transmitted, distributed, sold, licensed, or otherwise exploited
              for any commercial purpose whatsoever, without our express prior
              written permission.
            </>
          }
        />
        <LegalSection
          heading="User representations"
          content={
            <>
              <p>
                By using the Site, you represent and warrant that: (1) all
                registration information you submit will be true, accurate,
                current, and complete; (2) you will maintain the accuracy of
                such information and promptly update such registration
                information as necessary; (3) you have the legal capacity and
                you agree to comply with these Terms of Use; (4) you are not a
                minor in the jurisdiction in which you reside; (5) you will not
                access the Site through automated or non-human means, whether
                through a bot, script, or otherwise; (6) you will not use the
                Site for any illegal or unauthorized purpose; and (7) your use
                of the Site will not violate any applicable law or regulation.
              </p>
              <p>
                If you provide any information that is untrue, inaccurate, not
                current, or incomplete, we have the right to suspend or
                terminate your account and refuse any and all current or future
                use of the Site (or any portion thereof).
              </p>
            </>
          }
        />
        <LegalSection
          heading="User registration"
          content={
            <>
              You may be required to register with the Site. You agree to keep
              your password confidential and will be responsible for all use of
              your account and password. We reserve the right to remove,
              reclaim, or change a username you select if we determine, in our
              sole discretion, that such username is inappropriate, obscene, or
              otherwise objectionable.
            </>
          }
        />
        <LegalSection
          heading="Prohibited activities"
          content={
            <>
              <p>
                You may not access or use the Site for any purpose other than
                that for which we make the Site available. The Site may not be
                used in connection with any commercial endeavors except those
                that are specifically endorsed or approved by us.
              </p>
              <p>As a user of the Site, you agree not to:</p>
              <ul className="list-decimal">
                <li>
                  Systematically retrieve data or other content from the Site to
                  create or compile, directly or indirectly, a collection,
                  compilation, database, or directory without written permission
                  from us.
                </li>
                <li>
                  Trick, defraud, or mislead us and other users, especially in
                  any attempt to learn sensitive account information such as
                  user passwords.
                </li>
                <li>
                  Circumvent, disable, or otherwise interfere with
                  security-related features of the Site, including features that
                  prevent or restrict the use or copying of any Content or
                  enforce limitations on the use of the Site and/or the Content
                  contained therein.
                </li>
                <li>
                  Disparage, tarnish, or otherwise harm, in our opinion, us
                  and/or the Site.
                </li>
                <li>
                  Use any information obtained from the Site in order to harass,
                  abuse, or harm another person.
                </li>
                <li>
                  Make improper use of our support services or submit false
                  reports of abuse or misconduct.
                </li>
                <li>
                  Use the Site in a manner inconsistent with any applicable laws
                  or regulations.
                </li>
                <li>
                  Engage in unauthorized framing of or linking to the Site.
                </li>
                <li>
                  Upload or transmit (or attempt to upload or to transmit)
                  viruses, Trojan horses, or other material, including excessive
                  use of capital letters and spamming (continuous posting of
                  repetitive text), that interferes with any party’s
                  uninterrupted use and enjoyment of the Site or modifies,
                  impairs, disrupts, alters, or interferes with the use,
                  features, functions, operation, or maintenance of the Site.
                </li>
                <li>
                  Engage in any automated use of the system, such as using
                  scripts to send comments or messages, or using any data
                  mining, robots, or similar data gathering and extraction
                  tools.
                </li>
                <li>
                  Delete the copyright or other proprietary rights notice from
                  any Content.
                </li>
                <li>
                  Attempt to impersonate another user or person or use the
                  username of another user.
                </li>
                <li>
                  Upload or transmit (or attempt to upload or to transmit) any
                  material that acts as a passive or active information
                  collection or transmission mechanism, including without
                  limitation, clear graphics interchange formats
                  (&quot;gifs&quot;), 1×1 pixels, web bugs, cookies, or other
                  similar devices (sometimes referred to as &quot;spyware&quot;
                  or &quot;passive collection mechanisms&quot; or
                  &quot;pcms&quot;).
                </li>
                <li>
                  Interfere with, disrupt, or create an undue burden on the Site
                  or the networks or services connected to the Site.
                </li>
                <li>
                  Harass, annoy, intimidate, or threaten any of our employees or
                  agents engaged in providing any portion of the Site to you.
                </li>
                <li>
                  Attempt to bypass any measures of the Site designed to prevent
                  or restrict access to the Site, or any portion of the Site.
                </li>
                <li>
                  Copy or adapt the Site’s software, including but not limited
                  to Flash, PHP, HTML, JavaScript, or other code.
                </li>
                <li>
                  Except as permitted by applicable law, decipher, decompile,
                  disassemble, or reverse engineer any of the software
                  comprising or in any way making up a part of the Site.
                </li>
                <li>
                  Except as may be the result of standard search engine or
                  Internet browser usage, use, launch, develop, or distribute
                  any automated system, including without limitation, any
                  spider, robot, cheat utility, scraper, or offline reader that
                  accesses the Site, or using or launching any unauthorized
                  script or other software.
                </li>
                <li>
                  Use a buying agent or purchasing agent to make purchases on
                  the Site.
                </li>
                <li>
                  Make any unauthorized use of the Site, including collecting
                  usernames and/or email addresses of users by electronic or
                  other means for the purpose of sending unsolicited email, or
                  creating user accounts by automated means or under false
                  pretenses.
                </li>
                <li>
                  Use the Site as part of any effort to compete with us or
                  otherwise use the Site and/or the Content for any
                  revenue-generating endeavor or commercial enterprise.
                </li>
                <li>
                  Use the Site to advertise or offer to sell goods and services.
                </li>
                <li>Sell or otherwise transfer your profile.</li>
              </ul>
            </>
          }
        />
        <LegalSection
          heading="User generated distributions"
          content={
            <>
              <p>
                The Site may invite you to chat, contribute to, or participate
                in blogs, message boards, online forums, and other
                functionality, and may provide you with the opportunity to
                create, submit, post, display, transmit, perform, publish,
                distribute, or broadcast content and materials to us or on the
                Site, including but not limited to text, writings, video, audio,
                photographs, graphics, comments, suggestions, or personal
                information or other material (collectively,
                &quot;Contributions&quot;). Contributions may be viewable by
                other users of the Site and through third-party websites. As
                such, any Contributions you transmit may be treated as
                non-confidential and non-proprietary. When you create or make
                available any Contributions, you thereby represent and warrant
                that:
              </p>
              <ul className="list-decimal">
                <li>
                  The creation, distribution, transmission, public display, or
                  performance, and the accessing, downloading, or copying of
                  your Contributions do not and will not infringe the
                  proprietary rights, including but not limited to the
                  copyright, patent, trademark, trade secret, or moral rights of
                  any third party.
                </li>
                <li>
                  You are the creator and owner of or have the necessary
                  licenses, rights, consents, releases, and permissions to use
                  and to authorize us, the Site, and other users of the Site to
                  use your Contributions in any manner contemplated by the Site
                  and these Terms of Use.
                </li>
                <li>
                  You have the written consent, release, and/or permission of
                  each and every identifiable individual person in your
                  Contributions to use the name or likeness of each and every
                  such identifiable individual person to enable inclusion and
                  use of your Contributions in any manner contemplated by the
                  Site and these Terms of Use.
                </li>
                <li>
                  Your Contributions are not false, inaccurate, or misleading.
                </li>
                <li>
                  Your Contributions are not unsolicited or unauthorized
                  advertising, promotional materials, pyramid schemes, chain
                  letters, spam, mass mailings, or other forms of solicitation.
                </li>
                <li>
                  Your Contributions are not obscene, lewd, lascivious, filthy,
                  violent, harassing, libelous, slanderous, or otherwise
                  objectionable (as determined by us).
                </li>
                <li>
                  Your Contributions do not ridicule, mock, disparage,
                  intimidate, or abuse anyone.
                </li>
                <li>
                  Your Contributions are not used to harass or threaten (in the
                  legal sense of those terms) any other person and to promote
                  violence against a specific person or class of people.
                </li>
                <li>
                  Your Contributions do not violate any applicable law,
                  regulation, or rule.
                </li>
                <li>
                  Your Contributions do not violate the privacy or publicity
                  rights of any third party.
                </li>
                <li>
                  Your Contributions do not violate any applicable law
                  concerning child pornography, or otherwise intended to protect
                  the health or well-being of minors.
                </li>
                <li>
                  Your Contributions do not include any offensive comments that
                  are connected to race, national origin, gender, sexual
                  preference, or physical handicap.
                </li>
                <li>
                  Your Contributions do not otherwise violate, or link to
                  material that violates, any provision of these Terms of Use,
                  or any applicable law or regulation.
                </li>
              </ul>
              <p>
                Any use of the Site in violation of the foregoing violates these
                Terms of Use and may result in, among other things, termination
                or suspension of your rights to use the Site.
              </p>
            </>
          }
        />
        <LegalSection
          heading="Contribution license"
          content={
            <>
              <p>
                By posting your Contributions to any part of the Site, or making
                Contributions accessible to the Site by linking your account
                from the Site to any of your social networking accounts, you
                automatically grant, and you represent and warrant that you have
                the right to grant, to us an unrestricted, unlimited,
                irrevocable, perpetual, non-exclusive, transferable,
                royalty-free, fully-paid, worldwide right, and license to host,
                use, copy, reproduce, disclose, sell, resell, publish,
                broadcast, retitle, archive, store, cache, publicly perform,
                publicly display, reformat, translate, transmit, excerpt (in
                whole or in part), and distribute such Contributions (including,
                without limitation, your image and voice) for any purpose,
                commercial, advertising, or otherwise, and to prepare derivative
                works of, or incorporate into other works, such Contributions,
                and grant and authorize sublicenses of the foregoing. The use
                and distribution may occur in any media formats and through any
                media channels.
              </p>
              <p>
                This license will apply to any form, media, or technology now
                known or hereafter developed, and includes our use of your name,
                company name, and franchise name, as applicable, and any of the
                trademarks, service marks, trade names, logos, and personal and
                commercial images you provide. You waive all moral rights in
                your Contributions, and you warrant that moral rights have not
                otherwise been asserted in your Contributions.
              </p>
              <p>
                We do not assert any ownership over your Contributions. You
                retain full ownership of all of your Contributions and any
                intellectual property rights or other proprietary rights
                associated with your Contributions. We are not liable for any
                statements or representations in your Contributions provided by
                you in any area on the Site. You are solely responsible for your
                Contributions to the Site and you expressly agree to exonerate
                us from any and all responsibility and to refrain from any legal
                action against us regarding your Contributions.
              </p>
              <p>
                We have the right, in our sole and absolute discretion, (1) to
                edit, redact, or otherwise change any Contributions; (2) to
                re-categorize any Contributions to place them in more
                appropriate locations on the Site; and (3) to pre-screen or
                delete any Contributions at any time and for any reason, without
                notice. We have no obligation to monitor your Contributions.
              </p>
            </>
          }
        />
        <LegalSection
          heading="Social media"
          content={
            <p>
              As part of the functionality of the Site, you may link your
              account with online accounts you have with third-party service
              providers (each such account, a &quot;Third-Party Account&quot;)
              by either: (1) providing your Third-Party Account login
              information through the Site; or (2) allowing us to access your
              Third-Party Account, as is permitted under the applicable terms
              and conditions that govern your use of each Third-Party Account.
              You represent and warrant that you are entitled to disclose your
              Third-Party Account login information to us and/or grant us access
              to your Third-Party Account, without breach by you of any of the
              terms and conditions that govern your use of the applicable
              Third-Party Account, and without obligating us to pay any fees or
              making us subject to any usage limitations imposed by the
              third-party service provider of the Third-Party Account. By
              granting us access to any Third-Party Accounts, you understand
              that (1) we may access, make available, and store (if applicable)
              any content that you have provided to and stored in your
              Third-Party Account (the &quot;Social Network Content&quot;) so
              that it is available on and through the Site via your account,
              including without limitation any friend lists and (2) we may
              submit to and receive from your Third-Party Account additional
              information to the extent you are notified when you link your
              account with the Third-Party Account. Depending on the Third-Party
              Accounts you choose and subject to the privacy settings that you
              have set in such Third-Party Accounts, personally identifiable
              information that you post to your Third-Party Accounts may be
              available on and through your account on the Site. Please note
              that if a Third-Party Account or associated service becomes
              unavailable or our access to such Third Party Account is
              terminated by the third-party service provider, then Social
              Network Content may no longer be available on and through the
              Site. You will have the ability to disable the connection between
              your account on the Site and your Third-Party Accounts at any
              time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY
              SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS
              GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE
              PROVIDERS. We make no effort to review any Social Network Content
              for any purpose, including but not limited to, for accuracy,
              legality, or non-infringement, and we are not responsible for any
              Social Network Content. You acknowledge and agree that we may
              access your email address book associated with a Third-Party
              Account and your contacts list stored on your mobile device or
              tablet computer solely for purposes of identifying and informing
              you of those contacts who have also registered to use the Site.
              You can deactivate the connection between the Site and your
              Third-Party Account by contacting us using the contact information
              below or through your account settings (if applicable). We will
              attempt to delete any information stored on our servers that was
              obtained through such Third-Party Account, except the username and
              profile picture that become associated with your account.
            </p>
          }
        />
        <LegalSection
          heading="Submissions"
          content={
            <p>
              You acknowledge and agree that any questions, comments,
              suggestions, ideas, feedback, or other information regarding the
              Site (&quot;Submissions&quot;) provided by you to us are
              non-confidential and shall become our sole property. We shall own
              exclusive rights, including all intellectual property rights, and
              shall be entitled to the unrestricted use and dissemination of
              these Submissions for any lawful purpose, commercial or otherwise,
              without acknowledgment or compensation to you. You hereby waive
              all moral rights to any such Submissions, and you hereby warrant
              that any such Submissions are original with you or that you have
              the right to submit such Submissions. You agree there shall be no
              recourse against us for any alleged or actual infringement or
              misappropriation of any proprietary right in your Submissions.
            </p>
          }
        />
        <LegalSection
          heading="Third party websites and content"
          content={
            <p>
              The Site may contain (or you may be sent via the Site) links to
              other websites (&quot;Third-Party Websites&quot;) as well as
              articles, photographs, text, graphics, pictures, designs, music,
              sound, video, information, applications, software, and other
              content or items belonging to or originating from third parties
              (&quot;Third-Party Content&quot;). Such Third-Party Websites and
              Third-Party Content are not investigated, monitored, or checked
              for accuracy, appropriateness, or completeness by us, and we are
              not responsible for any Third-Party Websites accessed through the
              Site or any Third-Party Content posted on, available through, or
              installed from the Site, including the content, accuracy,
              offensiveness, opinions, reliability, privacy practices, or other
              policies of or contained in the Third-Party Websites or the
              Third-Party Content. Inclusion of, linking to, or permitting the
              use or installation of any Third-Party Websites or any Third-Party
              Content does not imply approval or endorsement thereof by us. If
              you decide to leave the Site and access the Third-Party Websites
              or to use or install any Third-Party Content, you do so at your
              own risk, and you should be aware these Terms of Use no longer
              govern. You should review the applicable terms and policies,
              including privacy and data gathering practices, of any website to
              which you navigate from the Site or relating to any applications
              you use or install from the Site. Any purchases you make through
              Third-Party Websites will be through other websites and from other
              companies, and we take no responsibility whatsoever in relation to
              such purchases which are exclusively between you and the
              applicable third party. You agree and acknowledge that we do not
              endorse the products or services offered on Third-Party Websites
              and you shall hold us harmless from any harm caused by your
              purchase of such products or services. Additionally, you shall
              hold us harmless from any losses sustained by you or harm caused
              to you relating to or resulting in any way from any Third-Party
              Content or any contact with Third-Party Websites.
            </p>
          }
        />
        <LegalSection
          heading="Site management"
          content={
            <p>
              We reserve the right, but not the obligation, to: (1) monitor the
              Site for violations of these Terms of Use; (2) take appropriate
              legal action against anyone who, in our sole discretion, violates
              the law or these Terms of Use, including without limitation,
              reporting such user to law enforcement authorities; (3) in our
              sole discretion and without limitation, refuse, restrict access
              to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof; (4) in our sole discretion and without limitation,
              notice, or liability, to remove from the Site or otherwise disable
              all files and content that are excessive in size or are in any way
              burdensome to our systems; and (5) otherwise manage the Site in a
              manner designed to protect our rights and property and to
              facilitate the proper functioning of the Site.
            </p>
          }
        />
        <LegalSection
          heading="Privacy policy"
          content={
            <p>
              We care about data privacy and security. Please review our{' '}
              <Link action="/legal/privacy-policy" inNewTab>
                Privacy Policy
              </Link>
              . By using the Site, you agree to be bound by our Privacy Policy,
              which is incorporated into these Terms of Use. Please be advised
              the Site is hosted in {process.env.NEXT_PUBLIC_HOSTING_COUNTRY}.
              If you access the Site from any other region of the world with
              laws or other requirements governing personal data collection,
              use, or disclosure that differ from applicable laws in{' '}
              {process.env.NEXT_PUBLIC_HOSTING_COUNTRY}, then through your
              continued use of the Site, you are transferring your data to{' '}
              {process.env.NEXT_PUBLIC_HOSTING_COUNTRY}, and you agree to have
              your data transferred to and processed in{' '}
              {process.env.NEXT_PUBLIC_HOSTING_COUNTRY}.
            </p>
          }
        />
        <LegalSection
          heading="Copyright infringements"
          content={
            <p>
              We respect the intellectual property rights of others. If you
              believe that any material available on or through the Site
              infringes upon any copyright you own or control, please
              immediately notify us using the contact information provided below
              (a &quot;Notification&quot;). A copy of your Notification will be
              sent to the person who posted or stored the material addressed in
              the Notification. Please be advised that pursuant to applicable
              law you may be held liable for damages if you make material
              misrepresentations in a Notification. Thus, if you are not sure
              that material located on or linked to by the Site infringes your
              copyright, you should consider first contacting an attorney.
            </p>
          }
        />
        <LegalSection
          heading="Term and termination"
          content={
            <>
              <p>
                These Terms of Use shall remain in full force and effect while
                you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
                TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION
                AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE
                SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON
                FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION
                FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
                CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR
                REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE
                SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT
                YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
              </p>
              <p>
                If we terminate or suspend your account for any reason, you are
                prohibited from registering and creating a new account under
                your name, a fake or borrowed name, or the name of any third
                party, even if you may be acting on behalf of the third party.
                In addition to terminating or suspending your account, we
                reserve the right to take appropriate legal action, including
                without limitation pursuing civil, criminal, and injunctive
                redress.
              </p>
            </>
          }
        />
        <LegalSection
          heading="Modifications and interruptions"
          content={
            <>
              <p>
                We reserve the right to change, modify, or remove the contents
                of the Site at any time or for any reason at our sole discretion
                without notice. However, we have no obligation to update any
                information on our Site. We also reserve the right to modify or
                discontinue all or part of the Site without notice at any time.
                We will not be liable to you or any third party for any
                modification, price change, suspension, or discontinuance of the
                Site.
              </p>
              <p>
                We cannot guarantee the Site will be available at all times. We
                may experience hardware, software, or other problems or need to
                perform maintenance related to the Site, resulting in
                interruptions, delays, or errors. We reserve the right to
                change, revise, update, suspend, discontinue, or otherwise
                modify the Site at any time or for any reason without notice to
                you. You agree that we have no liability whatsoever for any
                loss, damage, or inconvenience caused by your inability to
                access or use the Site during any downtime or discontinuance of
                the Site. Nothing in these Terms of Use will be construed to
                obligate us to maintain and support the Site or to supply any
                corrections, updates, or releases in connection therewith.
              </p>
            </>
          }
        />
        <LegalSection
          heading="Governing Law"
          content={
            <p>
              These conditions are governed by and interpreted following the
              laws of {process.env.NEXT_PUBLIC_HOSTING_COUNTRY}, and the use of
              the United Nations Convention of Contracts for the International
              Sale of Goods is expressly excluded. If your habitual residence is
              in the EU, and you are a consumer, you additionally possess the
              protection provided to you by obligatory provisions of the law of
              your country of residence. {process.env.NEXT_PUBLIC_WEBSITE_OWNER}{' '}
              and yourself both agree to submit to the non-exclusive
              jurisdiction of the courts of{' '}
              {process.env.NEXT_PUBLIC_COURT_LOCATION}, which means that you may
              make a claim to defend your consumer protection rights in regards
              to these Conditions of Use in{' '}
              {process.env.NEXT_PUBLIC_HOSTING_COUNTRY}, or in the EU country in
              which you reside.
            </p>
          }
        />
        <LegalSection
          heading="Dispute resolution"
          content={
            <>
              <div>
                <h3>Informal Negotiations</h3>
                <p>
                  To expedite resolution and control the cost of any dispute,
                  controversy, or claim related to these Terms of Use (each
                  &quot;Dispute&quot; and collectively, the
                  &quot;Disputes&quot;) brought by either you or us
                  (individually, a &quot;Party&quot; and collectively, the
                  &quot;Parties&quot;), the Parties agree to first attempt to
                  negotiate any Dispute (except those Disputes expressly
                  provided below) informally for at least thirty (30) days
                  before initiating arbitration. Such informal negotiations
                  commence upon written notice from one Party to the other
                  Party.
                </p>
              </div>
              <Spacer />
              <div>
                <h3>Binding Arbitration</h3>
                <p>
                  Any dispute arising from the relationships between the Parties
                  to this contract shall be determined by one arbitrator who
                  will be chosen in accordance with the Arbitration and Internal
                  Rules of the European Court of Arbitration being part of the
                  European Centre of Arbitration having its seat in Strasbourg,
                  and which are in force at the time the application for
                  arbitration is filed, and of which adoption of this clause
                  constitutes acceptance. The seat of arbitration shall be{' '}
                  {process.env.NEXT_PUBLIC_COURT_LOCATION},{' '}
                  {process.env.NEXT_PUBLIC_HOSTING_COUNTRY}. The language of the
                  proceedings shall be {process.env.NEXT_PUBLIC_COURT_LANGUAGE}.
                  Applicable rules of substantive law shall be the law of{' '}
                  {process.env.NEXT_PUBLIC_HOSTING_COUNTRY}.
                </p>
              </div>
              <Spacer />
              <div>
                <h3>Restrictions</h3>
                <p>
                  The Parties agree that any arbitration shall be limited to the
                  Dispute between the Parties individually. To the full extent
                  permitted by law, (a) no arbitration shall be joined with any
                  other proceeding; (b) there is no right or authority for any
                  Dispute to be arbitrated on a class-action basis or to utilize
                  class action procedures; and (c) there is no right or
                  authority for any Dispute to be brought in a purported
                  representative capacity on behalf of the general public or any
                  other persons.
                </p>
              </div>
              <Spacer />
              <div>
                <h3>Exceptions to Informal Negotiations and Arbitration</h3>
                <p>
                  The Parties agree that the following Disputes are not subject
                  to the above provisions concerning informal negotiations and
                  binding arbitration: (a) any Disputes seeking to enforce or
                  protect, or concerning the validity of, any of the
                  intellectual property rights of a Party; (b) any Dispute
                  related to, or arising from, allegations of theft, piracy,
                  invasion of privacy, or unauthorized use; and (c) any claim
                  for injunctive relief. If this provision is found to be
                  illegal or unenforceable, then neither Party will elect to
                  arbitrate any Dispute falling within that portion of this
                  provision found to be illegal or unenforceable and such
                  Dispute shall be decided by a court of competent jurisdiction
                  within the courts listed for jurisdiction above, and the
                  Parties agree to submit to the personal jurisdiction of that
                  court.
                </p>
              </div>
            </>
          }
        />
        <LegalSection
          heading="Corrections"
          content={
            <p>
              There may be information on the Site that contains typographical
              errors, inaccuracies, or omissions, including descriptions,
              pricing, availability, and various other information. We reserve
              the right to correct any errors, inaccuracies, or omissions and to
              change or update the information on the Site at any time, without
              prior notice.
            </p>
          }
        />
        <LegalSection
          heading="Disclaimer"
          content={
            <p>
              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
              THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE
              RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
              WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND
              YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS
              ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE
              CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO
              LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
              INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR
              PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
              ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR
              USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
              AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION
              OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS,
              VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
              THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
              OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE
              OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
              TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT
              WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY
              PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH
              THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
              APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE
              WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING
              ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF
              PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE
              THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST
              JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
            </p>
          }
        />
        <LegalSection
          heading="Limitations of Liability"
          content={
            <p>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE
              BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          }
        />
        <LegalSection
          heading="Indemnification"
          content={
            <p>
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys’ fees and expenses, made by any third party due to or
              arising out of: (1) your Contributions; (2) use of the Site; (3)
              breach of these Terms of Use; (4) any breach of your
              representations and warranties set forth in these Terms of Use;
              (5) your violation of the rights of a third party, including but
              not limited to intellectual property rights; or (6) any overt
              harmful act toward any other user of the Site with whom you
              connected via the Site. Notwithstanding the foregoing, we reserve
              the right, at your expense, to assume the exclusive defense and
              control of any matter for which you are required to indemnify us,
              and you agree to cooperate, at your expense, with our defense of
              such claims. We will use reasonable efforts to notify you of any
              such claim, action, or proceeding which is subject to this
              indemnification upon becoming aware of it.
            </p>
          }
        />
        <LegalSection
          heading="User data"
          content={
            <p>
              We will maintain certain data that you transmit to the Site for
              the purpose of managing the performance of the Site, as well as
              data relating to your use of the Site. Although we perform regular
              routine backups of data, you are solely responsible for all data
              that you transmit or that relates to any activity you have
              undertaken using the Site. You agree that we shall have no
              liability to you for any loss or corruption of any such data, and
              you hereby waive any right of action against us arising from any
              such loss or corruption of such data.
            </p>
          }
        />
        <LegalSection
          heading="Electronic communications, Transactions and Signatures"
          content={
            <p>
              Visiting the Site, sending us emails, and completing online forms
              constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically, via email and on the Site, satisfy any legal
              requirement that such communication be in writing. YOU HEREBY
              AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND
              OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
              AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA
              THE SITE. You hereby waive any rights or requirements under any
              statutes, regulations, rules, ordinances, or other laws in any
              jurisdiction which require an original signature or delivery or
              retention of non-electronic records, or to payments or the
              granting of credits by any means other than electronic means.{' '}
            </p>
          }
        />
        <LegalSection
          heading="California users and residents"
          content={
            <p>
              If any complaint with us is not satisfactorily resolved, you can
              contact the Complaint Assistance Unit of the Division of Consumer
              Services of the California Department of Consumer Affairs in
              writing at 1625 North Market Blvd., Suite N 112, Sacramento,
              California 95834 or by telephone at (800) 952-5210 or (916)
              445-1254.
            </p>
          }
        />
        <LegalSection
          heading="Miscellaneous"
          content={
            <p>
              These Terms of Use and any policies or operating rules posted by
              us on the Site or in respect to the Site constitute the entire
              agreement and understanding between you and us. Our failure to
              exercise or enforce any right or provision of these Terms of Use
              shall not operate as a waiver of such right or provision. These
              Terms of Use operate to the fullest extent permissible by law. We
              may assign any or all of our rights and obligations to others at
              any time. We shall not be responsible or liable for any loss,
              damage, delay, or failure to act caused by any cause beyond our
              reasonable control. If any provision or part of a provision of
              these Terms of Use is determined to be unlawful, void, or
              unenforceable, that provision or part of the provision is deemed
              severable from these Terms of Use and does not affect the validity
              and enforceability of any remaining provisions. There is no joint
              venture, partnership, employment or agency relationship created
              between you and us as a result of these Terms of Use or use of the
              Site. You agree that these Terms of Use will not be construed
              against us by virtue of having drafted them. You hereby waive any
              and all defenses you may have based on the electronic form of
              these Terms of Use and the lack of signing by the parties hereto
              to execute these Terms of Use.
            </p>
          }
        />
        <LegalSection
          heading="Contact us"
          content={
            <>
              <p>
                In order to resolve a complaint regarding the Site or to receive
                further information regarding use of the Site, please contact us
                at:
              </p>
              <ContactData />
            </>
          }
        />
      </Container>
    </>
  );
};

export default TermsOfUse;
