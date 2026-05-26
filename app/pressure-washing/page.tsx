import {pressureWashingData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const page = () => {
  return <ServicePageTemplate serviceData={pressureWashingData} />;
}

export default page
