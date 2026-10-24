"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TreatmentHero() {
  const initialTreatments = [
    { name: "Painless & Laser Dentistry", image_src: "/images/laser_dentistry.jpg", alt: "Dentist using a dental curing light while the patient wears protective glasses" },
    { name: "Cosmetic Dentistry", image_src: "/images/cosmetic.jpg", alt: "Smiling woman checking her teeth in a hand mirror after cosmetic dental care" },
    { name: "Braces & Aligners", image_src: "/images/braces.jpg", alt: "Dentist adjusting metal braces with orthodontic pliers" },
    { name: "Smile Makeover", image_src: "/images/smile.jpeg", alt: "Smile design guide lines drawn over a woman's smile" },
    { name: "Root Canal Treatment", image_src: "/images/root_canal.jpg", alt: "Dentist treating a patient's tooth with a dental handpiece" },
  ];

  const [treatments, setTreatments] = useState(initialTreatments);
  const intervalRef = useRef(null);

  const rotate = () => {
    setTreatments((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first]; // LIFO rotation
    });
  };

  // ✅ Auto Play
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      rotate();
    }, 4000); // 4 seconds
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleClick = (clickedItem) => {
    const reordered = [
      clickedItem,
      ...treatments.filter((t) => t.image_src !== clickedItem.image_src),
    ];
    setTreatments(reordered);
    startAutoPlay(); // restart autoplay after manual click
  };

  const active = treatments[0];

  return (
    <div
      className="relative lg:w-[468px] mx-auto lg:mt-14"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* MAIN IMAGE */}
      <div className="relative w-[100%] mx-auto overflow-hidden rounded-2xl shadow-xl">

        <AnimatePresence mode="wait">
          <motion.img
            key={active.image_src}
            src={active.image_src}
            alt={active.alt}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="w-full h-60 object-cover rounded-2xl"
          />
        </AnimatePresence>

        <motion.div
          key={active.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 right-6 glassy-dark px-4 py-2 rounded-full"
        >
          <p className="text-white text-sm font-semibold">
            {active.name}
          </p>
        </motion.div>
      </div>

      {/* THUMBNAILS */}
      <div className="absolute -bottom-6 left-6 flex gap-3">
        {treatments.slice(1).map((t) => (
          <motion.img
            key={t.image_src}
            layout
            src={t.image_src}
            alt={t.alt}
            onClick={() => handleClick(t)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-14 h-14 object-cover rounded-xl border-2 border-white shadow-md cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}