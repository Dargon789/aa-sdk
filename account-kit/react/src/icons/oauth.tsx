import type { KnownAuthProvider } from "@account-kit/signer";
import type { SVGProps } from "react";
import { Spinner } from "./spinner.js";

interface ContinueWithOAuthProps {
  provider: KnownAuthProvider;
}

interface OAuthConnectionFailedWithProps {
  provider: KnownAuthProvider;
}

// TO DO: extend for BYO auth provider
export function ContinueWithOAuth({ provider }: ContinueWithOAuthProps) {
  return (
    <div className="relative flex flex-col items-center justify-center h-12 w-12">
      <Spinner className="absolute top-0 left-0 right-0 bottom-0" />
      {(provider === "google" && <GoogleIcon />) ||
        (provider === "facebook" && <FacebookIcon />)}
    </div>
  );
}

// TO DO: extend for BYO auth provider
export function OAuthConnectionFailed({
  provider,
}: OAuthConnectionFailedWithProps) {
  return (
    <div className="relative flex flex-col items-center justify-center h-12 w-12">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="22" stroke="#FECACA" strokeWidth="2.5" />
          <rect x="32" y="32" width="18" height="18" rx="9" fill="#DC2626" />
          <path
            d="M43 39L39 43M43 43L39 39"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {(provider === "google" && <GoogleIcon />) ||
        (provider === "facebook" && <FacebookIcon />)}
    </div>
  );
}

// eslint-disable-next-line jsdoc/require-jsdoc
export const GoogleIcon = ({
  className,
  ...props
}: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={20}
      fill="none"
      {...props}
    >
      <path
        fill="#3E82F1"
        fillRule="evenodd"
        d="M18.801 10.21c0-.63-.055-1.257-.166-1.876H10v3.546h4.934a4.212 4.212 0 0 1-1.83 2.767v2.3h2.963C17.8 15.351 18.8 13.001 18.8 10.21h.001Z"
        clipRule="evenodd"
      />
      <path
        fill="#32A753"
        fillRule="evenodd"
        d="M10 19.167c2.475 0 4.55-.821 6.067-2.22l-2.963-2.301c-.82.55-1.87.875-3.104.875-2.388 0-4.409-1.612-5.13-3.78H1.809v2.379A9.167 9.167 0 0 0 10 19.167Z"
        clipRule="evenodd"
      />
      <path
        fill="#F9BB00"
        fillRule="evenodd"
        d="M4.871 11.742a5.412 5.412 0 0 1 0-3.483V5.884H1.808a9.181 9.181 0 0 0 0 8.234l3.063-2.376Z"
        clipRule="evenodd"
      />
      <path
        fill="#E74133"
        d="m1.808 5.884 3.063 2.375c.721-2.167 2.742-3.78 5.13-3.78 1.346 0 2.554.464 3.504 1.371l2.63-2.63C14.546 1.743 12.471.834 10 .834a9.164 9.164 0 0 0-8.192 5.05Z"
      />
    </svg>
  );
};

export const FacebookIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          d="M8.85 19.9C4.1 19.05 0.5 14.95 0.5 10C0.5 4.5 5 0 10.5 0C16 0 20.5 4.5 20.5 10C20.5 14.95 16.9 19.05 12.15 19.9L11.6 19.45H9.4L8.85 19.9Z"
          fill="#0062E0"
        />
        <path
          d="M14.4004 12.7999L14.8504 9.9999H12.2004V8.0499C12.2004 7.2499 12.5004 6.6499 13.7004 6.6499H15.0004V4.0999C14.3004 3.9999 13.5004 3.8999 12.8004 3.8999C10.5004 3.8999 8.90039 5.2999 8.90039 7.7999V9.9999H6.40039V12.7999H8.90039V19.8499C9.45039 19.9499 10.0004 19.9999 10.5504 19.9999C11.1004 19.9999 11.6504 19.9499 12.2004 19.8499V12.7999H14.4004Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export const AppleIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fill="#000"
        d="M22.192 18.703c-.363.839-.793 1.61-1.29 2.32-.679.968-1.234 1.637-1.663 2.009-.663.61-1.374.923-2.136.94-.546 0-1.206-.155-1.973-.47-.77-.314-1.477-.47-2.124-.47-.679 0-1.406.156-2.185.47-.78.315-1.407.48-1.888.496-.73.031-1.458-.29-2.184-.966-.464-.404-1.044-1.098-1.739-2.08-.745-1.049-1.358-2.265-1.838-3.652-.514-1.497-.772-2.948-.772-4.352 0-1.608.348-2.995 1.044-4.158A6.122 6.122 0 0 1 5.63 6.58a5.88 5.88 0 0 1 2.955-.835c.58 0 1.34.18 2.285.532.943.354 1.548.533 1.813.533.199 0 .871-.21 2.01-.628 1.079-.388 1.988-.548 2.733-.485 2.02.163 3.536.96 4.545 2.393-1.806 1.094-2.699 2.627-2.681 4.593.016 1.531.572 2.806 1.663 3.817.495.47 1.048.833 1.663 1.09-.134.387-.274.758-.424 1.113ZM17.561.48c0 1.2-.439 2.321-1.313 3.358-1.054 1.234-2.33 1.946-3.714 1.834a3.742 3.742 0 0 1-.027-.455c0-1.152.501-2.386 1.392-3.394.445-.51 1.01-.935 1.696-1.273.685-.334 1.332-.518 1.94-.55.019.16.026.32.026.48Z"
      />
    </svg>
  );
};
