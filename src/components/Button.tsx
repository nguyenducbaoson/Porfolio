type Props = {
    text: string,
    className: string,
    id: string
}

const Button = (props: Props) => {
 return (
    <a
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById("counter");
        if (target && props.id) {
          const offset = window.innerHeight * 0.15;

          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${props.className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{props.text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
}

export default Button