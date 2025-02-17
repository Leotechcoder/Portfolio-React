export class GetServicesUseCase {
    constructor(serviceRepository) {
      this.serviceRepository = serviceRepository
    }
  
    execute() {
      return this.serviceRepository.getServices()
    }
  }
  
  