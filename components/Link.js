export default function Link (props) {
    return (<a href={props.url} className={props.className}>
      {props.label}
      <style jsx>{`
        a {
          background-color: #644aac;
          padding: 1em;
          border: none;
          text-transform: uppercase;
          text-align: center;
          text-decoration: none;
          color: white;
          margin-bottom: 1rem;
          opacity: 1;
          transition: .5s;
        }
        a:hover {
            transition: .5s;
            opacity: .8;
        }
      `}</style>
    </a>
  );
}
