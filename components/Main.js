export default function MainContainer(props) {
    return(
        <main>
            <div>{props.children}</div>
            <style jsx>{`
                main {
                    background-color: white;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin: 1em auto;
                    border-radius: .5em;        
                }            
            `}</style>
        </main>
    );
}