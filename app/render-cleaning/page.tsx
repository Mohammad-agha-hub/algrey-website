import {renderCleaningData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { serviceMetadata } from "@/components/serviceMetadata";
export const metadata = serviceMetadata.renderCleaning;
const page = () => {
  return <ServicePageTemplate serviceData={renderCleaningData} />;
}

export default page
