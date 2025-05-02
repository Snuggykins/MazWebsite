"use client";

export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading font-bold mb-8">Test Heading Font</h1>
      <p className="text-2xl font-body mb-6">Test Body Font</p>
      
      <div className="grid grid-cols-2 gap-8 mt-12">
        <div>
          <h2 className="text-3xl font-heading font-semibold mb-4">Space Grotesk Test</h2>
          <p className="font-heading text-xl">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p className="font-heading text-xl">abcdefghijklmnopqrstuvwxyz</p>
          <p className="font-heading text-xl">0123456789</p>
        </div>
        
        <div>
          <h2 className="text-3xl font-body font-semibold mb-4">Inter Test</h2>
          <p className="font-body text-xl">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p className="font-body text-xl">abcdefghijklmnopqrstuvwxyz</p>
          <p className="font-body text-xl">0123456789</p>
        </div>
      </div>
    </div>
  );
}
