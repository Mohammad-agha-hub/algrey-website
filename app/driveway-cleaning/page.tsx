import {drivewayCleaningData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const page = () => {
  return <ServicePageTemplate serviceData={drivewayCleaningData} />;
}

export default page
