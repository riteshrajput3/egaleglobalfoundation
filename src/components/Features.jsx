import FeatureCard from "./FeatureCard.jsx"

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-10 py-24">
      <h2 className="text-4xl font-bold mb-12 text-center">
        What We Do
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Community Support"
          desc="Empowering communities through education and support programs."
        />
        <FeatureCard
          title="Global Awareness"
          desc="Spreading awareness on equality and human rights."
        />
        <FeatureCard
          title="Sustainable Impact"
          desc="Creating long-term solutions for social change."
        />
      </div>
    </section>
  )
}
