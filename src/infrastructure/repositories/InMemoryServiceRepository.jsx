import { ServiceRepository } from "../../application/ports/ServiceRepository"
import { Service } from "../../domain/Service"
import { Palette, Code, PenTool } from "lucide-react"

export class InMemoryServiceRepository extends ServiceRepository {
  getServices() {
    return [
      new Service(1, "UI/UX Design", "Create intuitive and visually appealing user interfaces.", Palette),
      new Service(2, "Web Development", "Build responsive and performant web applications.", Code),
      new Service(3, "Branding", "Develop unique and memorable brand identities.", PenTool),
    ]
  }
}

