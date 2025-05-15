import React from 'react';
import './Footer.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="app-footer">
            <p>Allyson Hammerlund <span>{currentYear}</span> | CC A SA</p>
        </footer>
    )
}