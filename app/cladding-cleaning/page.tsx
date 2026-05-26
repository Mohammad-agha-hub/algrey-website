import {claddingCleaningData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const page = () => {
  return <ServicePageTemplate serviceData={claddingCleaningData} />;
}

export default page
