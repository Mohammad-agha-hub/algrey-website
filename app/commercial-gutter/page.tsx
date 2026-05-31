import {commercialGutterData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

import { serviceMetadata } from "@/components/serviceMetadata";
export const metadata = serviceMetadata.commercialGutterCleaning;
const page = () => {
  return <ServicePageTemplate serviceData={commercialGutterData} />;
}

export default page
