import Link from '../ui-components/Link';

const ContactData = (): JSX.Element => {
  return (
    <div>
      <p>{process.env.NEXT_PUBLIC_WEBSITE_OWNER}</p>
      <p>
        {process.env.NEXT_PUBLIC_WEBSITE_OWNER_STREET} <br />
        {process.env.NEXT_PUBLIC_WEBSITE_OWNER_TOWN} <br />
        {process.env.NEXT_PUBLIC_WEBSITE_OWNER_COUNTRY}
      </p>
      <p>
        Phone: {process.env.NEXT_PUBLIC_WEBSITE_OWNER_PHONE} <br />
        Email:{' '}
        <Link action={`mailto:${process.env.NEXT_PUBLIC_WEBSITE_OWNER_EMAIL}`}>
          {process.env.NEXT_PUBLIC_WEBSITE_OWNER_EMAIL}
        </Link>
      </p>
    </div>
  );
};

export default ContactData;
