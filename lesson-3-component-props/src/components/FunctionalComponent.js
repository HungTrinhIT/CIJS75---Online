import { Fragment } from "react";

const FunctionalComponent = () => {
    // Render JSX ~ HTML (JS in HTML)
    const a = 2;
    const b = 3;
    return (
        <Fragment>
            <div>
                <h1>This is functional component</h1>
                {a} + {b} = {a + b}
            </div>,
            <div>
                <h2>This is h2 tag</h2>
            </div>
        </Fragment>
    )
}

export default FunctionalComponent
