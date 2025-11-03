"use client";

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  return (
    <Card className="w-full min-h-screen bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex h-full max-w-7xl mx-auto">
        {/* Left content - Text */}
        <div className="flex-1 p-12 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            Huzair Ka 3d Robo
          </h1>
          <p className="text-xl text-neutral-300 max-w-lg mb-8">
            Say hello to our virtual 3D robotic companion. Discover innovative
            solutions that make digital worlds feel real with amazing detail.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 border border-neutral-600 text-neutral-300 hover:bg-neutral-800 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Right content - Interactive Robot */}
        <div className="flex-1 p-4 flex items-center justify-center">
          <div className="w-full h-full max-w-lg max-h-[600px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
