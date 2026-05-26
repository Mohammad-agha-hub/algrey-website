import {patioCleaningData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const page = () => {
  return <ServicePageTemplate serviceData={patioCleaningData} />;
}

export default page
