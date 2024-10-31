import React, { useEffect } from "react";
import TagCloud from "TagCloud";

function TextAnimation() {

    useEffect(() => {
        return () => {
          const container = ".tagcloud";
          const texts = [
            "HTML",
            "CSS",
            "Tailwind Css",
            "JavaScript",
            "React",
            "Next",
            "Bootstrap",
            "Wordpress",
            "GIT",
            "GITHUB",
          ];
    
          const options = {
            radius: 250,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,

          };
    
          TagCloud(container, texts, options);
        };
      }, []);


  return (
     <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
  )
}

export default TextAnimation