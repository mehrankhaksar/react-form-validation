import React from "react";

import { motion, AnimatePresence } from "framer-motion";

import BasicForm from "./components/BasicForm";
import AdvanceForm from "./components/AdvanceForm";
import { containerVariants, formsContainer } from "./utils/variants";

const tabs = [
  {
    id: "basic",
    label: "Basic",
  },
  {
    id: "advance",
    label: "Advance",
  },
];

export default function App() {
  const [view, setView] = React.useState(tabs[0].id);

  return (
    <section className="w-full min-h-screen flex justify-center items-center overflow-y-auto overflow-x-hidden">
      <motion.div
        className="max-w-sm w-full flex flex-col items-center space-y-2.5 py-5"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="w-64 h-12 flex items-center text-xl font-medium border-2 border-solid border-[#4a5568] rounded-3xl overflow-hidden">
          {tabs.map((item) => (
            <button
              className={`flex-1 w-full h-full ${
                view === item.id && "relative"
              }`}
              type="button"
              onClick={() => setView(item.id)}
              key={item.id}
            >
              {view === item.id && (
                <motion.div
                  className="absolute inset-0 bg-[#4299e1]"
                  layoutId="active-pill"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative mix-blend-lighten">{item.label}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            className="w-full"
            variants={formsContainer}
            exit="exit"
          >
            {view === "basic" && <BasicForm />}
            {view === "advance" && <AdvanceForm />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
