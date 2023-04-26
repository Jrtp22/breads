const  React = require("react");
const Default = require("./layouts/default")

const Show = ({ bread }) => {
    console.log(bread.name);
    return(
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                And it
                {
                    bread.hasGluten 
                    ? <span> does </span>
                    : <span> does NOT</span>
                }
            </p>
            <img width="480" src={bread.image} alt={bread.name}/>
            <li>
                <a href="/breads">Go Home</a>
            </li>
        </Default>
    )
}
module.exports = Show;