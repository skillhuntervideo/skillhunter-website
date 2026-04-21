"use client";

import { useEffect, useState } from "react";

export default function AndrewTracker() {
  const [hotelHex, setHotelHex] = useState<string | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const h = params.get("h");
      if (h && /^[a-f0-9]{32}$/i.test(h)) {
        try {
          sessionStorage.setItem("sh_hotel_h", h);
        } catch {}
        setHotelHex(h);
      }
    } catch {}
  }, []);

  if (!hotelHex) return null;

  return (
    <img
      src={`https://vps.skillhunter.jp/track/hotel-click?h=${encodeURIComponent(hotelHex)}&t=${Date.now()}`}
      alt=""
      width={1}
      height={1}
      style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
