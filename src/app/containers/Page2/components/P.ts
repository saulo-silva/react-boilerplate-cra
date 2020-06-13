import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const P = styled.p`
  ${tw`bg-blue-200 text-center text-xl rounded py-8 px-5 shadow max-w-lg`}
  line-height: 1.5;
  color: ${p => p.theme.textSecondary};
  margin: 0.625rem 0 1.5rem 0;
`;
