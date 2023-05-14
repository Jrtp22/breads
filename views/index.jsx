const React = require("react");
const Default = require("./layouts/default")

const Index = ({ breads, bakers, title }) => {
    return (
        <Default title={title}>
            <h2>Index page</h2>
            <h3>Baker</h3>
            <ul>
                {bakers.map((baker) => {
                    return (
                        <li key={baker._id}>
                            <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                        </li>
                )})}
            </ul>
            <h3>Breads</h3>
            <ul>
                {breads.map((bread) => (
                    <li key={breads._id}>
                        <a href={`/breads/${bread._id}`}>{bread.name}</a>
                    </li>
                ))}
            </ul>
            <div className="newButton">
                <a className="button" href="/breads/new">
                    Add new bread
                </a>
            </div>
        </Default>
    );
};
module.exports = Index;