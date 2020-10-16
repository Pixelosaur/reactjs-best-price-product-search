import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SortActions({ onOrderChange }: any) {
    const [sortButtonTitle, setSortButtonTitle] = useState<string>('Ακριβότερο');

    const handleSelect = (e: any) => {
        setSortButtonTitle(e);
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
