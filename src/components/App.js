import React from "react";
import Table from "./Table";
import Form from "../Forms/Form";


class App extends React.Component {
    state = {
        characters: [
            {
                name: 'D-Dog',
                job: 'Ju Jitsu Man',
            },
            {
                name: 'B-Dog',
                job: 'Meme Lord',
            },
            {
                name: 'Z-Dog',
                job: 'Big Boi',
            },
            {
                name: 'M-Dog',
                job: 'Teacher/Da Man',
            },
        ],
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        });
    }

    editCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                character.set()
            }),
        });
    }


    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
    }


    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App