import * as React from "react";


const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Actions</th>
        </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row,index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                    <button onClick={() => props.removeCharacter(index)}>Edit</button>
                </td>
            </tr>
        );
    })

    return <tbody>{rows}</tbody>
}


class Table extends React.Component{
    render() {
        const { characterData, removeCharacter } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
    }
}

export default Table