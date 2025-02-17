import { ServiceRepository } from "../../application/ports/ServiceRepository"
import { Service } from "../../domain/Service"
import { Palette, Code, PenTool } from "lucide-react"

export class InMemoryServiceRepository extends ServiceRepository {
  getServices() {
    return [
      new Service(1, "UI/UX Design", "Interfaces de usuario intuitivas y visualmente atractivas.", Palette),
      new Service(2, "Web Development", "Aplicaciones web responsivas y de alto rendimiento.", Code),
      new Service(3, "Branding", "Identidad de marca única y memorable.", PenTool),
    ]
  }
}

