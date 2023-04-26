const React = require("react");
const Default = require("./layouts/default")

const Index = ({ breads }) => {
    return (
        <Default>
            <h2>Index page</h2>
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