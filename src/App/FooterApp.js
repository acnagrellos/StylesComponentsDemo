import React from 'react';

const FooterApp = ({ links, copyright }) => {
    return (
        <div>
            <a href='/'>{copyright}</a>
            <ul>
                { links.map(link => <li><a href={link.link}>{link.text}</a></li>) }
            </ul>
        </div>
    );
};

export { FooterApp };