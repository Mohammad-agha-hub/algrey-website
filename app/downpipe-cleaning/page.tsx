import {downpipeCleaningData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const page = () => {
  return <ServicePageTemplate serviceData={downpipeCleaningData} />;
}

export default page
