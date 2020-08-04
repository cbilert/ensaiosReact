import styled from 'styled-components';

const Table = styled.table`
    padding-top: 50px;
    overflow: visible;
    border-collapse: collapse;
    width: 100%;

    td, th {
        border: 1px solid var(--white);
        text-align: left;
        padding: 8px;
    }
    th,tr:nth-child(even) {
        background-color: var(--grayHalf);
    }
    tr:hover {
        background-color: var(--blackLighter);
    }
`;

export default Table;
