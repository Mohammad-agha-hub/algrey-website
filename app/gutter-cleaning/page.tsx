import {gutterCleaningData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { serviceMetadata } from "@/components/serviceMetadata";
export const metadata = serviceMetadata.gutterCleaning;
const page = () => {
  return <ServicePageTemplate serviceData={gutterCleaningData} />;
}

export default page
