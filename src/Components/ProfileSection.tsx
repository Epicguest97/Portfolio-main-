import React from "react";

export default function ProfileSection() {
  return (
    <div className="flex flex-row items-start gap-8">
      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
        <img 
          src="../public/mehul.jpeg" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Hi, I am Mehul Kaushik,</h1>
        <p className="text-base text-white/80">
          I build full-stack web applications and experiment with Machine Learning to create smarter, more efficient solutions.
        </p>
        <p className="text-white/80">Noida, India</p>
      </div>
    </div>
  );
}
