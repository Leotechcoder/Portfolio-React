"use client"

import { useEffect, useState } from "react"
import { GetServicesUseCase } from "../../application/useCases/GetServicesUseCase"
import { InMemoryServiceRepository } from "../../infrastructure/repositories/InMemoryServiceRepository"

export const useServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    const serviceRepository = new InMemoryServiceRepository()
    const getServicesUseCase = new GetServicesUseCase(serviceRepository)
    const fetchedServices = getServicesUseCase.execute()
    setServices(fetchedServices)
  }, [])

  return services
}

