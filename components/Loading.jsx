import { Circle } from "better-react-spinkit";

function Loading(props) {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="../../whatsapp-logo.png"
          alt=""
          height={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color="#3cbc28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
