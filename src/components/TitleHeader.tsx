type Props = {
    title: string,
    sub: string
}

const TitleHeader = (Props: Props) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{Props.sub}</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          {Props.title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
