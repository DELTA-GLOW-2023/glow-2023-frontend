export const Marguee = () => {
  const textContainerStyle = {
    display: "flex",
    animation: "marquee 20s linear infinite",
    padding: "12px",
    animationPlayState: "running",
  };

  return (
    <div
      style={{
        bottom: "40px",
        position: "absolute",
        overflowX: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div style={textContainerStyle}>
        <span className={"text-3xl text-white mx-4"}>
          Craft your unique GLOW artwork at the Stationsplein Tourist
          Information.
        </span>
      </div>
    </div>
  );
};
