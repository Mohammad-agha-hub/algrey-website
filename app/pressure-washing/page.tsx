import {pressureWashingData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { serviceMetadata } from "@/components/serviceMetadata";
export const metadata = serviceMetadata.pressureWashing;
const page = () => {
  return <ServicePageTemplate serviceData={pressureWashingData} />;
}

export default page
