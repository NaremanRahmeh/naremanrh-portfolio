import About from "./About";
import Header from "./Components/Header";
import Skills from "./Skills";
import Work from "./Work";

function App() {
  return (
   <>
   <Header/>
    <main className=" mx-auto xl:max-w-7xl md:pt-6">
     <About/>
     <Skills/>
     <Work/>
    </main>
   </>
  );
}

export default App;
