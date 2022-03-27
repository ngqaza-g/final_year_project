import React from "react";

export default function Footer(){
    return (
        <footer className="p-2 text-center text-white bg-dark">
            Copyright &copy; {new Date().getFullYear()} Bulawayo General Hospital
        </footer>
    );
}