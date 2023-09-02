import CustomText from "./CustomText";
import { GiEnvelope } from "react-icons/gi";

export default function Newsletter() {
  return (
    <div>
      <CustomText variant="subtitle" weight="medium" className="mb-2">
        Subscribe to our Newsletter
      </CustomText>

      <CustomText variant="body" weight="regular">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </CustomText>

      <form className="flex mt-6">
        <input
          placeholder="Enter email"
          className="rounded-l-md focus:outline-primary flex-1 bg-[#f5f5f5] p-3"
        />
        <button className="rounded-r-md h-12 active:scale-95 w-12 flex-shrink-0 grid place-content-center bg-primary text-white">
          <GiEnvelope size={20} />
        </button>
      </form>
    </div>
  );
}
