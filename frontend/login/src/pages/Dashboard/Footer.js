import React from "react";

export default function Footer(){
    return (
        <footer className="p-2 text-center text-white bg-dark position-absolute bottom-0 vw-100">
            Copyright &copy; {new Date().getFullYear()} Bulawayo General Hospital
        </footer>
    );
}