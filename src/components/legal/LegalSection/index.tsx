import { ReactNode } from 'react';

interface IProps {
  content: ReactNode;
  heading: string;
}

const LegalSection = ({ content, heading }: IProps): JSX.Element => {
  return (
    <>
      <section className="legal-section flex flex-col md:flex-row w-full bg-base-100 p-4 sm:p-6 md:py-10 rounded border">
        <header className="flex-1">
          <h2 className="pr-10">{heading}</h2>
        </header>
        <div className="flex-1">{content}</div>
      </section>
    </>
  );
};

export default LegalSection;
