import { logoIconsList } from "../constants";

type Props = {
  imgPath: string
}

const LogoIcon = (props: Props) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={props.imgPath} />
    </div>
  );
};

const LogoSection = () => {
  return (
      <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} imgPath={icon.imgPath} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} imgPath={icon.imgPath} />
        ))}
      </div>
    </div>
  </div>
  );
}

export default LogoSection