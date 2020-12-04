const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        { id: 'something-important' }, [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "luna", animal: "dog", breed: "havanease"}),
            React.createElement(Pet, { name: "pepper", animal: "bird", breed: "cockatiel"  }),
            React.createElement(Pet, { name: "doink", animal: "cat", breed: "mixed" })
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));