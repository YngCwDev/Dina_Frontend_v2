import { CircleCheckBig, HardHat, Layers } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Qualities() {
  const qualities = [
    {
      icon: CircleCheckBig,
      title: "Reliability",
      description: "Consistently delivering high-quality products that meet industry standards, ensuring dependable performance in every operation."
    },
    {
      icon: Layers,
      title: "Versatility",
      description: "Offering a wide range of industrial solutions, from heavy equipment to safety gear, catering to diverse needs across multiple sectors."
    },
    {
      icon: HardHat,
      title: "Safety-focused",
      description: "Prioritizing products that enhance workplace safety, providing top-quality personal protective equipment and risk-reducing solutions."
    }
  ]

  return (
    <section className="bg-zinc-950 text-zinc-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="sr-only">Our Qualities</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((quality, index) => (
            <Card key={index} className="bg-transparent border-none">
              <CardHeader>
                <quality.icon className="w-12 h-12 text-red-700 mx-auto" aria-hidden="true" />
                <CardTitle className="text-center text-lg font-semibold text-white">{quality.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-zinc-300">{quality.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}