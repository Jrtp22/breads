const  React = require("react");
const Default = require("./layouts/default")

const Show = ({ bread, index }) => {
    //console.log(bread.name);
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
            <a href={`/breads/${index}/edit`}>
                <button>Edit</button>
            </a>
            <form action={`/breads/${index}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
        </Default>
    )
}
module.exports = Show;