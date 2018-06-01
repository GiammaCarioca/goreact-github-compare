import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 320px auto;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'search header'
    'repoview main';
`;

export const Sidebar = styled.div``;

export const Search = styled.div`
  grid-area: search;
  background: #b286d1;
`;

export const Form = styled.form`
  display: flex;
  justify-items: center;
  align-items: center;
  max-width: 320px;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 10px;
  padding-bottom: 20px;

  input {
    width: 200px;
    height: 50px;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    background: #eee;
    font-family: Helvetica, sans-serif;
    font-size: 15px;
    color: #999999;
    border-radius: 3px;

    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }

  button {
    width: 50px;
    height: 50px;
    margin-left: 10px;
    background: #59ea9a;
    color: #fff;
    border: 0;
    font-size: 20px;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }
`;

export const RepoView = styled.div`
  grid-area: repoview;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  height: 100vh;
  background: #fff;
`;

export const IssuesView = styled.div``;

export const Board = styled.div`
  grid-area: main;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background: #f5f5f5;
  margin: 20px;
`;
