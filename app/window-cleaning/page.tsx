import {windowCleaningData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { serviceMetadata } from "@/components/serviceMetadata";
export const metadata = serviceMetadata.windowCleaning;
const page = () => {
  return <ServicePageTemplate serviceData={windowCleaningData} />;
}

export default page
