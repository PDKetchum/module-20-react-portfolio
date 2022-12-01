import React, { useState } from "react";
import ResponsiveAppBar from "./NavTabs";
// import AboutMe from "./pages/AboutMe";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  // const [currentPage, setCurrentPage] = useState("Home");

  // // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   if (currentPage === "AboutMe") {
  //     return <AboutMe />;
  //   }
  //   if (currentPage === "Portfolio") {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === "Contact") {
  //     return <Contact />;
  //   }
  //   if (currentPage === "Resume") {
  //     return <Resume />;
  //   }
  //   return <AboutMe />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <ResponsiveAppBar />
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* {renderPage()} */}
    </div>
  );
}
