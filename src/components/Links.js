import React from "react";

function Links({links}){
    return (
        <div>
            <h3>Links</h3>
            <ul>
                <li>
                    <a href={links.github}>{links.github}</a>
                </li>
                <li>
                    <a href={links.linkedin}>{links.linkedin}</a>
                </li>
            </ul>
        </div>
    )
}

export default Links;
