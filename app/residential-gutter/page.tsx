import {residentialGutterCleaningData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { serviceMetadata } from "@/components/serviceMetadata";
export const metadata = serviceMetadata.residentialGutterCleaning;
const page = () => {
  return <ServicePageTemplate serviceData={residentialGutterCleaningData} />;
}

export default page
