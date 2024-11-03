import About from "./About";
import Header from "./Components/Header";
import Contact from "./Contact";
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
     <Contact/>
    </main>
   </>
  );
}

export default App;
