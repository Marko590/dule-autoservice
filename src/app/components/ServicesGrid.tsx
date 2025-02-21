import { CircleDollarSign, Cog, Timer, Wrench } from "lucide-react";
import React from "react";
import ServicesItem from "./ServicesItem";

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] md:w-[70%] h-auto sm:p-4">
      <ServicesItem
        icon={<Wrench className="text-secondary w-8 h-8" />}
        content="Comprehensive Auto Repairs – From routine maintenance to major repairs"
      />

      <ServicesItem
        icon={<Cog className="text-secondary w-8 h-8" />}
        content="We specialize in diagnosing, repairing, and maintaining automatic transmissions."
      />
      <ServicesItem
        icon={<Timer className="text-secondary w-8 h-8" />}
        content="Fast & Reliable Service – We value your time! Our efficient repair"
      />
      <ServicesItem
        icon={<CircleDollarSign className="text-secondary w-8 h-8" />}
        content="Affordable Pricing – Get top-notch auto repairs at competitive rates.We offer transparent pricing with no hidden fees."
      />
    </div>
  );
};

export default ServicesGrid;
