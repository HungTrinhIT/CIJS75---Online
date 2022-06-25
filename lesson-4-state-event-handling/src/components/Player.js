const Player = (props) => {

    // Object Desctructering
    const { player } = props;
    const { name, position, age } = player;


    // JSX = Javscirption XML
    return (
        <div className="player__wrapper">
            <h1>{name}</h1>
            <p>{position}</p>
            <p>{age}</p>
        </div>
    )
}

export default Player;