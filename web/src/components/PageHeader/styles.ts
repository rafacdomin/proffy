import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  margin: 0;
  width: 100vw;
  height: 40vh;
  max-height: 340px;
  overflow: hidden;

  @media (min-width: 700px) {
    height: 340px;
  }

  .top-bar-container {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-in-primary);
    padding: 1.6rem 0;

    @media (min-width: 700px) {
      max-width: 1100px;
    }

    a {
      height: 3.2rem;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }

    img {
      height: 1.6rem;
    }
  }

  .header-content {
    width: 90vw;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;

    @media (min-width: 700px) {
      flex: 1;
      max-width: 740px;
      margin: 0 auto;
      padding-bottom: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    strong {
      font: 700 3.6rem Archivo;
      line-height: 4.2rem;
      color: var(--color-title-in-primary);

      @media (min-width: 700px) {
        max-width: 350px;
      }
    }

    p {
      max-width: 30rem;
      font-size: 1.6rem;
      line-height: 2.6rem;
      color: var(--color-text-in-primary);
      margin-top: 2.4rem;
    }
  }
`;
