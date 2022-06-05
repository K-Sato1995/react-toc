import './styles/App.css';
import React from "react";
import Top from './components/Top'
import Toc from "react-toc";

const Example = () => {
  const yourMarkdownText = "# test \n your markdown Content # test2\n";
  return <Toc markdownText={yourMarkdownText} />;
};

function App() {
  return (
    <div className="App">
        <Top />
        <Example />
    </div>
  );
}

export default App;
