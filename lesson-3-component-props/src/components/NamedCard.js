const NamedCard = (props) => {

    const people = [
        { name: "Hung Trinh", role: "admin" },
        { name: "Nam Nguyen", role: "Customer" },
        { name: "Toi di code dao", role: 'Technical Lead' }
    ]

    const cardList = people.map((person, index) => {
        return <div style={{
            border: "1px solid black",
            padding: "24px",
            marginBottom: "16px",
            textAlign: "center",
            width: "300px"
        }}>
            <h1>{person.name}</h1>
            <p>{person.role.toUpperCase()}</p>
        </div>
    }

    return (
        <div style={{
            border: "1px solid black",
            padding: "24px",
            marginBottom: "16px",
            textAlign: "center",
            width: "300px"
        }}>
            <h1>{name}</h1>
            <p>{role.toUpperCase()}</p>
            <NamedCard />
        /div
    )
}

export default NamedCard;
