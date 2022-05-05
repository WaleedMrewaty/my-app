import HeadNext from "next/head";

type headProps = {
  title: string;
  description?: string;
  hrefIcon?: string;
};

const Head = ({ title, description, hrefIcon }: headProps) => {
  return (
    <HeadNext>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {hrefIcon && <link rel="icon" href={hrefIcon} />}
    </HeadNext>
  );
};

export default Head;
