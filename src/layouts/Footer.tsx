import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-white text-center">
      <div className="container mx-auto">
        <p>
          This app is powered by{" "}
          <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="underline">
            PokeAPI
          </a>
        </p>
        <p className="mt-2 text-sm">© {new Date().getFullYear()} Mike's Pokedex. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
