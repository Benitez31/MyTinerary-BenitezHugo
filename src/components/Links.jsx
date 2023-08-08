import React from 'react'

const Links = ({title, to}) => {
    return (
        <li className="navItem">
            <a href={to} className="navLink">{title}</a>
        </li>
    )
}

export default Links