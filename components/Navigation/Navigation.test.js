import { render, screen } from "@testing-library/react";
import Link from "next/link";
import Navigation from "./Navigation";
import { BrowserRouter as Router } from "react-router-dom";

test("renders a navigation link labeled spotilight", () => {
     const { getByRole } = render(
        <Router>
        <Navigation />
        </Router>
     )
     const linkElement = getByRole('link', {
        name: 'Spotlight'
     })
     expect(linkElement).toBeInTheDocument()
     
})