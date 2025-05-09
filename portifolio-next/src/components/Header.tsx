"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
        <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
            isScrolled ? "bg-grafite-dark shadow-md py-4" : "bg-transparent py-2"
        }`}
        >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-white font-bold">
            <span className="text-xl">Seu Nome</span>
            <button onClick={() => setMenuOpen(true)} className="md:hidden">
            <Menu className="w-6 h-6" />
            </button>
            <nav className="hidden md:flex gap-6 text-sm">
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#projetos" className="hover:underline">Projetos</a>
            <a href="#contato" className="hover:underline">Contato</a>
            </nav>
        </div>
        </motion.header>

        <AnimatePresence>
            {menuOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-grafite-dark z-40"
                        onClick={() => setMenuOpen(false)}
                    />

                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-64 bg-black-smooth text-white z-50 shadow-lg p-6 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-bold">Menu</span>
                            <button onClick={() => setMenuOpen(false)}>
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-4 text-base">
                            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
                            <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
                            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
                        </nav>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    </>
  );
}
