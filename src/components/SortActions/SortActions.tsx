// Core
import React, { useState } from 'react';
// Dependencies
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// Styles
import './SortActions.scss';

function SortActions({ onOrderChange }: any) {
    const [sortButtonTitle, setSortButtonTitle] = useState<string>('Ακριβότερο');

    const handleSelect = (e: unknown) => {
        setSortButtonTitle(e as string);
    };

    return (
        <DropdownButton id="dropdown-item-button" title={sortButtonTitle}>
            <Dropdown.Item
                eventKey="Ακριβότερο"
                onClick={() => onOrderChange('desc')}
                onSelect={handleSelect}
            >
                Ακριβότερο
            </Dropdown.Item>
            <Dropdown.Item
                eventKey="Φθηνότερο"
                onClick={() => onOrderChange('asc')}
                onSelect={handleSelect}
            >
                Φθηνότερο
            </Dropdown.Item>
        </DropdownButton>
    );
}
export default SortActions;
