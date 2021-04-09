export default function Button (props) {
    function subscribe(){
        alert("Subscribed!")}
    return (
    <button onClick={subscribe} className={props.className}>
      {props.label}
      <style jsx>{`
        button {
          background-color: orange;
          padding: 1em;
          border: none;
          text-transform: uppercase;
        }
      `}</style>
    </button>
  );
}
