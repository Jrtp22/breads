const React = require("react");
const Default = require("./layouts/default")

const Index = ({ breads }) => {
    return (
        <Default>
            <h2>Index page</h2>
            <div className="newButton">
                <a className="button" href="/breads/new">
                    Add new bread
                </a>
            </div>
           <ul>
                {breads.map((bread, index) => (
                    <li key={index}>
                        <a href={`/breads/${index}`}>{bread.name}</a>
                    </li>
                ))}
           </ul>
        </Default>
    )
};
module.exports = Index