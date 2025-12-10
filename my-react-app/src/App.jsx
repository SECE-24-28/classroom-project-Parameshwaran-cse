import "./App.css";

import { Routes, Route } from "react-router-dom";
import HelloWorldComponent from "./hello-world/hello-world-component";
import OurPromisesComponent from "./our-promises/our-promises";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
//import PropsPractice from "./props-practice/props-practice";
import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-execllence-component";
import FourOFourComponent from "./404-component/404-component";
import UseStateComponent from "./use-state/use-state-component";
import UseStateFormComponent from "./use-state-form/use-state-form-component";
import AptitudeLmsComponent from "./Aptitude-guru-component/AptitudeLmsComponent";
import FetchApiComponent from "./fetch-api/fetch-api-component";
import UseEffectComponent from "./use-effect-practice/use-effect-practice";
import UseEffectPracticeTwo from "./use-effect-practice/use-effect-practice-2";
import AxiosPractice from "./use-effect-practice/use-effect-practice-2";

function App() {
  //  const arr1 = [
  //   { name: "Paramesh", mobile: "8778913938" },
  //   { name: "raghu", mobile: "5678645455" },
  // ];
  const IndexPage = () => {
    return (
      <div
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          minHeight: "400px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>🏠 Home Page</h1>
        <p style={{ fontSize: "1.5rem", opacity: 0.9 }}>
          This is the index route for /leetcode
        </p>
      </div>
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/eshwar" element={<HelloWorldComponent />} />
        <Route path="/our-promise" element={<OurPromisesComponent />} />
        <Route path="/" element={<TrustedbyComponent />} />

        {/* <Route path="/leetcode/*" element={<HelloWorldComponent />}>
          <Route index element={<IndexPage />} />
          <Route path="trusted-by" element={<TrustedbyComponent />} />
          <Route path="our-promise" element={<OurPromisesComponent />} />
        </Route> */}
        <Route path="/leetcode/:id" element={<SymbolOfExcellenceComponent />} />
        <Route path="*" element={<FourOFourComponent />} />
        <Route path="/use-state" element={<UseStateComponent/>}></Route>
        <Route path= "/use-state-form" element = {<UseStateFormComponent/>}/>
        <Route path="/aptitude-lms" element={<AptitudeLmsComponent />} />
        <Route path="fetch-api" elent={<FetchApiComponent/>}/>
        <Route path="use-effect" element={<UseEffectComponent/>}/>
        <Route
          path="/use-effect-practice-2"
          element={<UseEffectPracticeTwo/>}
        />
        <Route path="use-effect" element={<AxiosPractice/>}/>
      </Routes>
    </div>
  );
}

export default App;