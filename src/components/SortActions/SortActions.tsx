// Core
import React from 'react';
// Dependencies
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// Styles
import './SortActions.scss';

interface SortActionsProps {
    onOrderChange: any;
    sortButtonTitle: string;
}

function SortActions({ onOrderChange, sortButtonTitle }: SortActionsProps) {
    return (
        <DropdownButton id="dropdown-item-button" title={sortButtonTitle}>
            <Dropdown.Item eventKey="Ακριβότερο" onClick={() => onOrderChange('desc')}>
                Ακριβότερο
            </Dropdown.Item>
            <Dropdown.Item eventKey="Φθηνότερο" onClick={() => onOrderChange('asc')}>
                Φθηνότερο
            </Dropdown.Item>
        </DropdownButton>
    );
}
export default SortActions;
