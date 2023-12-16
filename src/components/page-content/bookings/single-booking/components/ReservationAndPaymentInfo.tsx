import "./style.scss";
import BoldEditIcon from "@/components/icons/BoldEditIcon";
import Button from "@/components/button/button-cva";
import ReviewModal from "../modal/ReviewModal";
import { useState } from "react";

interface Props {
  status: string | null;
}
const ReservationAndPaymentInfo = ({ status }: Props) => {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  return (
    <>
      <section className="w-full md:max-w-[21rem]">
        <div className="w-full">
          {status?.toLowerCase() !== "pending" && (
            <div className="w-full flex justify-between gap-[1.5rem]">
              <Button
                className=" px-[1.5rem] text-[1rem] leading-[normal] disabled:bg-[#FFEFEB] disabled:text-orange "
                text="Check In"
                disabled={
                  status?.toLowerCase() === "booked" ||
                  status?.toLowerCase() === "completed"
                }
              />
              <Button
                className="px-[1.5rem] h-[3.5rem] text-[1rem] leading-[normal] disabled:bg-[#FFEFEB] disabled:text-orange"
                text="Check Out"
                onClick={() => setOpenReviewModal(true)}
                disabled={
                  status?.toLowerCase() === "ongoing" ||
                  status?.toLowerCase() === "completed"
                }
              />
            </div>
          )}
        </div>
        {/* reservation and payment  */}
        <div className="mt-[2.5rem] flex flex-col gap-[1.5rem] ">
          <div className="">
            <h3 className="booking-mini-header">Reservation Details</h3>
            <div className="mt-2 w-full flex flex-col gap-3 ">
              {/* date  */}
              <div className="w-full flex items-center justify-between">
                <h4 className="booking-text-light">Dates</h4>
                <div className="booking-text flex items-center gap-2 ">
                  <p>11-13 Nov</p>
                  <button className="text-orange">
                    <BoldEditIcon />
                  </button>
                </div>
              </div>
              {/* guest */}
              <div className="w-full flex items-center justify-between">
                <h4 className="booking-text-light">Guests</h4>
                <div className="booking-text flex items-center gap-2 ">
                  <p>2 Guests</p>
                  <button className="text-orange">
                    <BoldEditIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* payment  */}
          <div className="">
            <h3 className="booking-mini-header">Payment Info</h3>
            <div className="mt-2 w-full flex flex-col gap-3 ">
              {/* date  */}
              <div className="w-full flex items-center justify-between">
                <h4 className="booking-text-light">$200 x 3 nights</h4>
                <h4 className="booking-text flex items-center gap-2 ">$600</h4>
              </div>
              {/* guest */}
              <div className="w-full flex items-center justify-between">
                <h4 className="booking-text-light">Refundable caution fee</h4>
                <h4 className="booking-text flex items-center gap-2 ">$50</h4>
              </div>
            </div>
          </div>
          {/* confirmation  */}
          <div className="">
            <h3 className="booking-mini-header">Confirmation Code</h3>
            <h4 className="mt-2 booking-text-light">HYG76GGH2</h4>
          </div>
          <Button
            text="Get Receipt"
            className="w-full max-w-[13rem]"
            variant="orangeOutline"
          />
        </div>
      </section>
      <ReviewModal
        open={openReviewModal}
        onClose={() => setOpenReviewModal(false)}
      />
    </>
  );
};

export default ReservationAndPaymentInfo;
