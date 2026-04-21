"use client";

import { useEffect, useState } from "react";

const FORM_ID = "X4j0pD0U3hPp3S4PZedh";
const BASE_SRC = `https://link.skillhunter.jp/widget/form/${FORM_ID}`;

export default function SignupForm() {
  const [src, setSrc] = useState(BASE_SRC);
  const [hotelHex, setHotelHex] = useState<string | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const h = params.get("h");
      if (h && /^[a-f0-9]{32}$/i.test(h)) {
        try {
          sessionStorage.setItem("sh_hotel_h", h);
        } catch {}
        setSrc(`${BASE_SRC}?hotel_id=${encodeURIComponent(h)}`);
        setHotelHex(h);
      }
    } catch {}
  }, []);

  return (
    <>
    {hotelHex && (
      <img
        src={`https://vps.skillhunter.jp/track/hotel-click?h=${encodeURIComponent(hotelHex)}&t=${Date.now()}`}
        alt=""
        width={1}
        height={1}
        style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
        aria-hidden="true"
      />
    )}
    <iframe
      src={src}
      style={{ width: "100%", border: "none", borderRadius: "3px", display: "block" }}
      id={`inline-${FORM_ID}`}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Free 30 day trial (Lewis)"
      data-height="1156"
      data-layout-iframe-id={`inline-${FORM_ID}`}
      data-form-id={FORM_ID}
      title="Free 30 day trial (Lewis)"
      height={1156}
    />
    </>
  );
}
