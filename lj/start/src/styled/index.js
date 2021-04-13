import styled from 'styled-components';

export const Row = styled.div`
	display: flex;
	height: ${props => props.height ? props.height : 30}px;
`;