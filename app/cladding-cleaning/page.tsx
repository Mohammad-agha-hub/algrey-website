import {claddingCleaningData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

import { serviceMetadata } from "@/components/serviceMetadata";
export const metadata = serviceMetadata.claddingCleaning;
const page = () => {
  return <ServicePageTemplate serviceData={claddingCleaningData} />;
}

export default page
