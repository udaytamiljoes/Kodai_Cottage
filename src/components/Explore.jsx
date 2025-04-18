
import React, { useState } from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
export const Card = React.memo(({
    card,
    index,
    hovered,
    setHovered
}) => (
    <div style={{ borderRadius: "20px" }}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
            "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out w-[100%]  px-100",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}>
        <img src={card.src} alt={card.title} className="object-cover absolute inset-0" />
        <div
            className={cn(
                "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
            )}>
            <div
                className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.title}
            </div>
        </div>
    </div>
));

Card.displayName = "Card";

export default function FocusCards({
    cards
}) {
    const [hovered, setHovered] = useState(null);

    return (
        <div style={{ marginTop: "40px", }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-2 sm:px-4 w-full"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                //    transition={{ duration: 0.5, delay: 0.4 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="text-2xl md:text-4xl font-bold mb-8 text-center">
                Explore the best spots
            </motion.div>
            {cards.map((card, index) => (
                <>
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        //    transition={{ duration: 0.5, delay: 0.4 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                    
                    >
                        <Card
                            // key={card.title}
                            card={card}
                            index={index}
                            hovered={hovered}
                            setHovered={setHovered} />
                    </motion.div>

                </>
            ))}
        </div>
    );
}
