import {downpipeCleaningData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

import { serviceMetadata } from "@/components/serviceMetadata";
export const metadata = serviceMetadata.downpipeCleaning;
const page = () => {
  return <ServicePageTemplate serviceData={downpipeCleaningData} />;
}

export default page
