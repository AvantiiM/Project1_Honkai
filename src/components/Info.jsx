import React from "react";

const Info = (props) => {
    return (
        <td className={'Info ' + props.color}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button>
                <h5>{props.info}</h5>
                </button>
            </a>
        </td>
    );
}

export default Info;
