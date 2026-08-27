import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

// Same Andalusian tower/horseshoe-arch mark as components/Logo.tsx, on the
// site's actual brand gradient (charcoal green -> terracotta) — was
// previously a dancer emoji on a red/gold gradient, a leftover from the
// Barcelona Flamenco Shows project this repo was copied from.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #263D2A 0%, #C8643F 100%)",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(38, 61, 42, 0.4)",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 20V12H13V14H18V12H23V14H28V12H33V14H38V12H43V14H48V20"
            stroke="#F8F3E9"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="10" y="20" width="36" height="28" rx="1" fill="#F8F3E9" />
          <path d="M24 48V37C24 34 25.5 32 28 32C30.5 32 32 34 32 37V48H24Z" fill="#263D2A" />
          <path d="M28 4L30 8L34 10L30 12L28 16L26 12L22 10L26 8L28 4Z" fill="#F8F3E9" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
