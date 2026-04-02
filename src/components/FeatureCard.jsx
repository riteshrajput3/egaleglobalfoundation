export default function FeatureCard({ title, desc }) {
  return (
    <div className="p-8 border rounded-xl hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>
      <p className="text-gray-600">
        {desc}
      </p>
    </div>
  )
}
