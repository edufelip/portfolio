import styled from 'styled-components';

export const PrivacyPolicyBody = styled.div`
  display: flex;
  justify-content: top;
  margin: 40px 200px;
  align-items: center;
  flex-direction: column;

  p {
    width: 100%;
    text-align: left;
  }

  h2 {
    width: 100%;
    text-align: left;
    padding-left: 20px;
  }

  .bulletContainer {
    width: 100%;
    display: flex;
    justify-content: top;
    flex-direction: column;
  }

  @media(max-width: 1110px) {
    margin: 40px 40px;
  }
`