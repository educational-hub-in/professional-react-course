"use client";
import React from "react";

// add props to function

export default function Promo({ title, description, discount, image }) {
  return (
    <section
      className="min-h-[90vh] flex justify-center flex-col px-20 bg-[#F3F3F3]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100%",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="space-y-4">
        <h2 className="text-4xl">{title}</h2>
        <p className="text-8xl font-bold">{description}</p>
        <p className="text-3xl">Upto {discount}% OFF</p>
      </div>
    </section>
  );
}

// props: title, description, discount
