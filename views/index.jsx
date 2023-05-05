const React = require("react");
const Default = require("./layouts/default")

const Index = ({ breads, title }) => {
    return (
        <Default title={title}>
            <h2>Index page</h2>
            <div className="newButton">
                <a className="button" href="/breads/new">
                    Add new bread
                </a>
            </div>
            <ul>
                {breads.map((bread, ) => (
                    <li key={breads.id}>
                        <a href={`/breads/${bread.id}`}>{bread.name}</a>
                    </li>
                ))}
            </ul>
        </Default>
    )
};
module.exports = Index