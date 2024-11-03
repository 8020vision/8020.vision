import * as React from "react";

import { IconSvgProps } from "@/types";

export const Sigil: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    width="121"
    height="120"
    viewBox="0 0 121 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M120.325 55.4685C120.4 56.4339 120.45 57.3993 120.475 58.373C120.492 58.9389 120.5 59.5048 120.5 60.0791C120.5 93.1687 93.6333 120 60.5 120C27.3667 120 0.5 93.1687 0.5 60.0791V59.9209C0.5 59.4629 0.508048 59.0129 0.516236 58.5552L0.516667 58.5311C1.25833 26.0823 27.825 0 60.4917 0C91.15 0 116.442 22.9697 120.042 52.6056C120.1 53.08 120.15 53.546 120.2 54.0204C120.214 54.1813 120.229 54.3422 120.244 54.5031C120.273 54.8249 120.303 55.1467 120.325 55.4685ZM93.7667 83.4649C103.65 78.3882 112.217 71.1145 118.792 62.2928C119.342 61.5688 119.867 60.8281 120.383 60.0791H96.8083V59.9293C96.8083 50.1755 92.9083 41.3205 86.575 34.8374V35.5947C86.575 52.281 82.05 59.9293 72.8583 59.9293C63.6667 59.9293 59.425 52.2144 59.425 35.5947C59.425 18.975 63.7417 11.3933 73.0667 11.3933C81.8667 11.3933 86.1417 18.2343 86.5417 33.1729C89.0167 34.1216 91.425 35.1952 93.7667 36.3936C103.65 41.462 112.192 48.7274 118.775 57.5407C117.442 26.5899 91.8083 1.8226 60.5 1.8226C29.1917 1.8226 3.55833 26.5816 2.225 57.5324C2.225 57.5158 2.23333 57.4991 2.26667 57.4825C2.49167 57.1579 2.74167 56.8333 3 56.5088C3.15 56.309 3.30833 56.101 3.48333 55.9012C3.89167 55.3603 4.33333 54.8277 4.78333 54.3033C5.56667 53.3546 6.38333 52.4308 7.24167 51.532C7.40833 51.3406 7.575 51.1658 7.75 50.9827C7.75 50.9827 7.74167 50.9744 7.75833 50.9744C8.1 50.6082 8.45 50.242 8.80833 49.8842C8.85 49.8342 8.89167 49.7926 8.94167 49.751C8.98643 49.7063 9.03025 49.6616 9.07376 49.6172C9.15987 49.5294 9.24476 49.4428 9.33333 49.3599L9.3337 49.3595C9.75858 48.9435 10.1835 48.5275 10.625 48.1115C10.8083 47.9367 11 47.762 11.1917 47.5955C11.2564 47.5357 11.3208 47.4759 11.3851 47.4163C11.6518 47.1687 11.9163 46.9231 12.1917 46.6884C12.3833 46.5136 12.575 46.3389 12.775 46.1807C13.1333 45.8562 13.5 45.5482 13.8667 45.2486C13.9417 45.182 14.0083 45.1238 14.0833 45.0655C14.2083 44.9573 14.3417 44.8492 14.475 44.7493C15.3417 44.0336 16.225 43.3428 17.125 42.6853C17.4083 42.469 17.7 42.2526 17.9917 42.0445C18.4083 41.7366 18.825 41.4453 19.2583 41.154L19.2585 41.1539C19.3585 41.0874 19.4584 41.0208 19.55 40.9543C20.0333 40.6214 20.525 40.2968 21.0167 39.9806C21.3 39.7975 21.5833 39.6227 21.8667 39.448C23.05 38.6906 24.2667 37.9832 25.5 37.3091C26.0667 36.9929 26.6417 36.6932 27.225 36.3936C30.4167 34.7541 33.7583 33.3393 37.2083 32.1825C35.9833 30.1519 35.1833 27.5553 35.1833 23.9101C35.1833 15.8458 39.85 11.3933 47.3 11.3933C54.75 11.3933 57.675 16.1204 57.675 21.8212C57.675 28.6372 54.125 32.116 51.125 33.4392C54.8917 36.635 58.65 40.1137 58.65 47.2044C58.65 54.295 55.4417 59.9293 45.7 59.9293C39.0083 59.9293 34.2083 55.2022 34.2083 48.7357C34.2083 41.3621 37.275 38.2329 41.1 36.5684C39.6583 35.3201 38.2833 33.9802 37.2417 32.2325C29.2583 38.8321 24.175 48.794 24.175 59.9293V60.0791H0.608333C1.125 60.8364 1.65833 61.5771 2.20833 62.3095C8.78333 71.1228 17.35 78.3966 27.225 83.4649C30.4667 85.1293 33.8583 86.5608 37.3583 87.7259C29.3417 81.1596 24.225 71.2144 24.175 60.0791H42.6083C40.525 60.3537 38.5083 61.0112 36.7083 62.0847L37.475 63.3331C39.15 62.3677 40.9583 61.8101 42.6333 61.8101C45.625 61.8101 48.1333 63.6826 48.1333 68.4846C48.1333 75.7168 46.0417 83.365 41.725 89.6234C37.2 96.1565 35.6 100.609 35.6 104.645V107.566H57.6V100.75H37.4083C38.45 97.1302 41.3083 94.001 46.7333 89.6234C52.7917 84.6883 57.3917 79.3703 57.3917 72.03C57.3917 64.6896 53.825 60.8447 47.425 60.0791H69.8417C61.975 61.1859 58.3167 68.8259 58.3167 84.1307C58.3167 100.817 62.9333 108.465 71.7583 108.465C80.5833 108.465 84.925 101.724 85.425 87.0934C88.2917 86.0614 91.075 84.8464 93.7667 83.4649ZM96.8083 60.0791C96.7667 70.3405 92.4084 79.595 85.45 86.128C85.475 85.4789 85.475 84.8131 85.475 84.1307C85.475 68.8259 81.875 61.1859 74.075 60.0791L96.8083 60.0791ZM45.7667 58.6809C47.575 58.6809 49.525 57.2162 49.525 50.8912C49.525 43.6643 46.1176 40.8009 42.681 37.9128L42.5667 37.8168V37.8833C42.425 37.6087 41.5167 40.5299 41.5167 48.7357C41.5167 56.4505 43.6083 58.6809 45.7667 58.6809ZM51.0583 21.5466C51.0583 16.7446 50.15 12.6417 47.225 12.6417C44.7917 12.6417 43.675 15.9123 43.8167 21.1305C43.9583 26.6232 46.675 29.6109 49.8083 32.2491C50.7083 30.5181 51.0583 27.6635 51.0583 21.5466ZM72.8583 58.6809C75.5083 58.6809 76.7583 51.5154 76.7583 35.5947C76.7583 19.8072 75.7083 12.6417 73.0667 12.6417C70.425 12.6417 69.175 19.674 69.175 35.5947C69.175 51.5154 70.3583 58.6809 72.8583 58.6809ZM71.9666 61.1776C69.3166 61.1776 68.0666 68.3432 68.0666 84.1307C68.0666 99.9182 69.25 107.217 71.7583 107.217C74.4 107.217 75.6583 100.051 75.6583 84.1307C75.6583 68.21 74.475 61.1776 71.9666 61.1776Z"
      fill="#E8E8E8"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const BrainIconDark: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.5 16.6667C40.5039 15.3334 40.2412 14.0129 39.7273 12.7827C39.2134 11.5525 38.4587 10.4374 37.5076 9.50316C36.5564 8.56889 35.4281 7.83425 34.1888 7.34244C32.9496 6.85064 31.6246 6.6116 30.2916 6.63938C28.9587 6.66716 27.6448 6.96121 26.4271 7.50423C25.2095 8.04724 24.1127 8.82826 23.2013 9.80135C22.29 10.7744 21.5824 11.92 21.1202 13.1705C20.658 14.4211 20.4505 15.7514 20.51 17.0833C18.5507 17.5871 16.7317 18.5302 15.1908 19.841C13.6499 21.1519 12.4275 22.7962 11.6161 24.6495C10.8048 26.5027 10.4259 28.5163 10.508 30.5377C10.5901 32.5591 11.1311 34.5353 12.09 36.3167C10.4039 37.6864 9.07808 39.4474 8.22779 41.4465C7.3775 43.4455 7.02852 45.622 7.21121 47.7866C7.39389 49.9513 8.10272 52.0385 9.27601 53.8667C10.4493 55.695 12.0515 57.2089 13.9433 58.2767C13.7097 60.0841 13.8491 61.9203 14.353 63.6717C14.8568 65.4232 15.7143 67.0528 16.8726 68.4599C18.0309 69.8669 19.4654 71.0216 21.0874 71.8525C22.7094 72.6835 24.4846 73.1731 26.3032 73.2911C28.1219 73.4091 29.9455 73.1531 31.6613 72.5387C33.3771 71.9244 34.9488 70.9648 36.2792 69.7192C37.6096 68.4736 38.6706 66.9686 39.3965 65.2969C40.1225 63.6252 40.498 61.8225 40.5 60V16.6667Z"
        stroke="url(#paint0_linear_208_183)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.5 16.6667C40.4961 15.3334 40.7588 14.0129 41.2727 12.7827C41.7866 11.5525 42.5413 10.4374 43.4924 9.50316C44.4436 8.56889 45.5719 7.83425 46.8111 7.34244C48.0504 6.85064 49.3754 6.6116 50.7083 6.63938C52.0413 6.66716 53.3552 6.96121 54.5729 7.50423C55.7905 8.04724 56.8873 8.82826 57.7987 9.80135C58.71 10.7744 59.4176 11.92 59.8798 13.1705C60.342 14.4211 60.5495 15.7514 60.49 17.0833C62.4493 17.5871 64.2683 18.5302 65.8092 19.841C67.3501 21.1519 68.5725 22.7962 69.3839 24.6495C70.1952 26.5027 70.5741 28.5163 70.492 30.5377C70.4099 32.5591 69.8689 34.5353 68.91 36.3167C70.5961 37.6864 71.9219 39.4474 72.7722 41.4465C73.6225 43.4455 73.9715 45.622 73.7888 47.7866C73.6061 49.9513 72.8973 52.0385 71.724 53.8667C70.5507 55.695 68.9485 57.2089 67.0567 58.2767C67.2903 60.0841 67.1509 61.9203 66.647 63.6717C66.1432 65.4232 65.2857 67.0528 64.1274 68.4599C62.9691 69.8669 61.5346 71.0216 59.9126 71.8525C58.2906 72.6835 56.5154 73.1731 54.6967 73.2911C52.8781 73.4091 51.0545 73.1531 49.3387 72.5387C47.6229 71.9244 46.0512 70.9648 44.7208 69.7192C43.3904 68.4736 42.3294 66.9686 41.6035 65.2969C40.8775 63.6252 40.5019 61.8225 40.5 60V16.6667Z"
        stroke="url(#paint1_linear_208_183)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.5 43.3333C47.7015 42.3489 45.2577 40.5567 43.4778 38.1834C41.6978 35.81 40.6615 32.9622 40.5 30C40.3385 32.9622 39.3022 35.81 37.5222 38.1834C35.7423 40.5567 33.2985 42.3489 30.5 43.3333"
        stroke="url(#paint2_linear_208_183)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59.1633 21.6666C59.9701 20.2685 60.4264 18.696 60.4933 17.0833"
        stroke="url(#paint3_linear_208_183)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.51 17.0833C20.5759 18.6957 21.0311 20.2682 21.8367 21.6666"
        stroke="url(#paint4_linear_208_183)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.09 36.32C12.6998 35.8234 13.3523 35.3816 14.04 35"
        stroke="url(#paint5_linear_208_183)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.96 35C67.6477 35.3816 68.3002 35.8234 68.91 36.32"
        stroke="url(#paint6_linear_208_183)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 60C18.2028 60.0011 15.9442 59.4086 13.9433 58.28"
        stroke="url(#paint7_linear_208_183)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M67.0567 58.28C65.0558 59.4086 62.7972 60.0011 60.5 60"
        stroke="url(#paint8_linear_208_183)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_183"
          x1="37.3039"
          y1="6.63721"
          x2="10.5273"
          y2="6.63721"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_183"
          x1="70.6399"
          y1="6.63721"
          x2="43.8633"
          y2="6.63721"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_208_183"
          x1="48.5825"
          y1="30"
          x2="32.5178"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_208_183"
          x1="60.3658"
          y1="17.0833"
          x2="59.2975"
          y2="17.0833"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_208_183"
          x1="21.7095"
          y1="17.0833"
          x2="20.6438"
          y2="17.0833"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_208_183"
          x1="13.853"
          y1="35"
          x2="12.2867"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_208_183"
          x1="68.723"
          y1="35"
          x2="67.1567"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_208_183"
          x1="19.8714"
          y1="58.28"
          x2="14.6048"
          y2="58.28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_208_183"
          x1="66.428"
          y1="58.28"
          x2="61.1615"
          y2="58.28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const FlexIconDark: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="81"
      height="80"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.8633 43.3901C43.3827 39.8681 46.0705 36.978 49.4731 35.2074C52.8757 33.4367 56.7849 32.8939 60.5412 33.6706C64.2975 34.4472 67.671 36.4957 70.0925 39.4705C72.5139 42.4453 73.8352 46.1643 73.8333 50.0001C73.8333 62.8868 60.5 73.3334 43.8333 73.3334C30.2433 73.3334 16.6567 70.6001 9.26333 65.1268C7.84333 64.0734 7.16 62.3534 7.19667 60.5868C7.56 42.4101 9.25667 6.66675 33.8333 6.66675C36.4855 6.66675 39.029 7.72032 40.9044 9.59568C42.7798 11.471 43.8333 14.0146 43.8333 16.6667C43.8333 18.4349 43.131 20.1306 41.8807 21.3808C40.6305 22.631 38.9348 23.3334 37.1667 23.3334C33.4833 23.3334 31.7 21.8534 30.5 20.0001"
        stroke="url(#paint0_linear_208_174)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.5 46.6666C48.4883 45.157 46.161 44.1222 43.6926 43.6399C41.2241 43.1576 38.6785 43.2402 36.2465 43.8815C33.8145 44.5229 31.5592 45.7063 29.6496 47.3432C27.74 48.9801 26.2257 51.0279 25.22 53.3333"
        stroke="url(#paint1_linear_208_174)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.7133 22.75C27.23 26.59 32.1667 43.3333 27.1667 50"
        stroke="url(#paint2_linear_208_174)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_174"
          x1="67.4444"
          y1="6.66675"
          x2="13.9185"
          y2="6.66675"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_174"
          x1="48.0763"
          y1="43.3306"
          x2="27.7705"
          y2="43.3306"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_208_174"
          x1="33.0857"
          y1="22.75"
          x2="27.8272"
          y2="22.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const FocusEyeIconDark: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="81"
      height="80"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M70.5 23.3333V16.6667C70.5 14.8986 69.7976 13.2029 68.5474 11.9526C67.2971 10.7024 65.6014 10 63.8333 10H17.1667C15.3986 10 13.7029 10.7024 12.4526 11.9526C11.2024 13.2029 10.5 14.8986 10.5 16.6667V23.3333"
        stroke="url(#paint0_linear_208_105)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M63.6467 41.087C63.8956 40.3748 63.8956 39.5992 63.6467 38.887C61.77 34.2884 58.566 30.3531 54.4435 27.5829C50.321 24.8127 45.4668 23.3333 40.5 23.3333C35.5332 23.3333 30.679 24.8127 26.5565 27.5829C22.434 30.3531 19.23 34.2884 17.3533 38.887C17.1044 39.5992 17.1044 40.3748 17.3533 41.087C19.23 45.6856 22.434 49.6209 26.5565 52.3911C30.679 55.1613 35.5332 56.6407 40.5 56.6407C45.4668 56.6407 50.321 55.1613 54.4435 52.3911C58.566 49.6209 61.77 45.6856 63.6467 41.087Z"
        stroke="url(#paint1_linear_208_105)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70.5 56.6409V63.3075C70.5 65.0756 69.7976 66.7713 68.5474 68.0216C67.2971 69.2718 65.6014 69.9742 63.8333 69.9742H17.1667C15.3986 69.9742 13.7029 69.2718 12.4526 68.0216C11.2024 66.7713 10.5 65.0756 10.5 63.3075V56.6409"
        stroke="url(#paint2_linear_208_105)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.5 43.3073C42.341 43.3073 43.8333 41.8149 43.8333 39.974C43.8333 38.133 42.341 36.6406 40.5 36.6406C38.6591 36.6406 37.1667 38.133 37.1667 39.974C37.1667 41.8149 38.6591 43.3073 40.5 43.3073Z"
        stroke="url(#paint3_linear_208_105)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_105"
          x1="64.7475"
          y1="10"
          x2="16.5535"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_105"
          x1="59.3592"
          y1="23.3333"
          x2="21.8749"
          y2="23.3333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_208_105"
          x1="64.7475"
          y1="56.6409"
          x2="16.5535"
          y2="56.6409"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_208_105"
          x1="43.1942"
          y1="36.6406"
          x2="37.8393"
          y2="36.6406"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const FocusIconDark: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="81"
      height="80"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.5 50C46.0228 50 50.5 45.5228 50.5 40C50.5 34.4772 46.0228 30 40.5 30C34.9772 30 30.5 34.4772 30.5 40C30.5 45.5228 34.9772 50 40.5 50Z"
        stroke="url(#paint0_linear_208_62)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 23.3333V16.6667C10.5 14.8986 11.2024 13.2029 12.4526 11.9526C13.7029 10.7024 15.3986 10 17.1667 10H23.8333"
        stroke="url(#paint1_linear_208_62)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M57.1667 10H63.8333C65.6014 10 67.2971 10.7024 68.5474 11.9526C69.7976 13.2029 70.5 14.8986 70.5 16.6667V23.3333"
        stroke="url(#paint2_linear_208_62)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70.5 56.6667V63.3334C70.5 65.1015 69.7976 66.7972 68.5474 68.0475C67.2971 69.2977 65.6014 70.0001 63.8333 70.0001H57.1667"
        stroke="url(#paint3_linear_208_62)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8333 70.0001H17.1667C15.3986 70.0001 13.7029 69.2977 12.4526 68.0475C11.2024 66.7972 10.5 65.1015 10.5 63.3334V56.6667"
        stroke="url(#paint4_linear_208_62)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_62"
          x1="48.5825"
          y1="30"
          x2="32.5178"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_62"
          x1="22.555"
          y1="10"
          x2="11.8452"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_208_62"
          x1="69.2217"
          y1="10"
          x2="58.5119"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_208_62"
          x1="69.2217"
          y1="56.6667"
          x2="58.5119"
          y2="56.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_208_62"
          x1="22.555"
          y1="56.6667"
          x2="11.8452"
          y2="56.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const PeopleIconDark: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="81"
      height="80"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60.5 70.0002C60.5 62.9277 57.6905 56.145 52.6895 51.144C47.6885 46.143 40.9058 43.3335 33.8333 43.3335C26.7609 43.3335 19.9781 46.143 14.9772 51.144C9.97619 56.145 7.16667 62.9277 7.16667 70.0002"
        stroke="url(#paint0_linear_208_198)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.8333 43.3333C43.0381 43.3333 50.5 35.8714 50.5 26.6667C50.5 17.4619 43.0381 10 33.8333 10C24.6286 10 17.1667 17.4619 17.1667 26.6667C17.1667 35.8714 24.6286 43.3333 33.8333 43.3333Z"
        stroke="url(#paint1_linear_208_198)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M73.8333 66.6668C73.8333 55.4335 67.1667 45.0002 60.5 40.0002C62.6914 38.3561 64.4437 36.1971 65.6019 33.7144C66.7601 31.2317 67.2884 28.5017 67.1401 25.7662C66.9918 23.0306 66.1714 20.3738 64.7516 18.0308C63.3318 15.6879 61.3563 13.731 59 12.3335"
        stroke="url(#paint2_linear_208_198)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_198"
          x1="55.3867"
          y1="43.3335"
          x2="12.5476"
          y2="43.3335"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_198"
          x1="47.3042"
          y1="10"
          x2="20.5297"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_208_198"
          x1="72.4112"
          y1="12.3335"
          x2="60.4966"
          y2="12.3335"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const PyramidIconDark: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="81"
      height="80"
      viewBox="0 0 81 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.83333 56.2667C8.43743 56.0356 8.09345 55.7253 7.8229 55.3552C7.55235 54.9851 7.36104 54.5632 7.26093 54.1159C7.16082 53.6685 7.15407 53.2053 7.24108 52.7552C7.3281 52.3051 7.50703 51.8778 7.76667 51.5L37.7667 8.10002C38.0739 7.65992 38.4828 7.30051 38.9587 7.05233C39.4345 6.80416 39.9633 6.67456 40.5 6.67456C41.0367 6.67456 41.5655 6.80416 42.0414 7.05233C42.5172 7.30051 42.9261 7.65992 43.2333 8.10002L73.2333 51.4667C73.4986 51.8455 73.6821 52.2754 73.7721 52.729C73.8622 53.1826 73.857 53.65 73.7566 54.1015C73.6563 54.5529 73.4631 54.9786 73.1894 55.3513C72.9157 55.7241 72.5674 56.0358 72.1667 56.2667L43.8 72.4667C42.7945 73.0395 41.6572 73.3407 40.5 73.3407C39.3428 73.3407 38.2055 73.0395 37.2 72.4667L8.83333 56.2667Z"
        stroke="url(#paint0_linear_208_75)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.5 6.66675V73.3334"
        stroke="url(#paint1_linear_208_75)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_75"
          x1="67.4454"
          y1="6.67456"
          x2="13.9055"
          y2="6.67456"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_75"
          x1="41.4041"
          y1="6.66675"
          x2="40.6009"
          y2="6.66675"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#919EB6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const BrainIconLight: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.0001 16.6667C40.004 15.3334 39.7413 14.0129 39.2274 12.7827C38.7135 11.5525 37.9588 10.4374 37.0076 9.50316C36.0565 8.56889 34.9282 7.83425 33.6889 7.34244C32.4497 6.85064 31.1247 6.6116 29.7917 6.63938C28.4588 6.66716 27.1449 6.96121 25.9272 7.50423C24.7096 8.04724 23.6128 8.82826 22.7014 9.80135C21.79 10.7744 21.0824 11.92 20.6203 13.1705C20.1581 14.4211 19.9506 15.7514 20.0101 17.0833C18.0508 17.5871 16.2318 18.5302 14.6909 19.841C13.15 21.1519 11.9275 22.7962 11.1162 24.6495C10.3049 26.5027 9.92595 28.5163 10.008 30.5377C10.0901 32.5591 10.6311 34.5353 11.5901 36.3167C9.90402 37.6864 8.57817 39.4474 7.72788 41.4465C6.87759 43.4455 6.52861 45.622 6.7113 47.7866C6.89399 49.9513 7.60281 52.0385 8.7761 53.8667C9.9494 55.695 11.5516 57.2089 13.4434 58.2767C13.2098 60.0841 13.3492 61.9203 13.853 63.6717C14.3569 65.4232 15.2144 67.0528 16.3727 68.4599C17.531 69.8669 18.9655 71.0216 20.5875 71.8525C22.2095 72.6835 23.9847 73.1731 25.8033 73.2911C27.622 73.4091 29.4456 73.1531 31.1614 72.5387C32.8772 71.9244 34.4489 70.9648 35.7793 69.7192C37.1097 68.4736 38.1707 66.9686 38.8966 65.2969C39.6226 63.6252 39.9981 61.8225 40.0001 60V16.6667Z"
        stroke="url(#paint0_linear_208_250)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40 16.6667C39.9961 15.3334 40.2588 14.0129 40.7727 12.7827C41.2866 11.5525 42.0413 10.4374 42.9925 9.50316C43.9436 8.56889 45.072 7.83425 46.3112 7.34244C47.5504 6.85064 48.8754 6.6116 50.2084 6.63938C51.5413 6.66716 52.8553 6.96121 54.0729 7.50423C55.2906 8.04724 56.3873 8.82826 57.2987 9.80135C58.2101 10.7744 58.9177 11.92 59.3799 13.1705C59.8421 14.4211 60.0495 15.7514 59.99 17.0833C61.9494 17.5871 63.7684 18.5302 65.3093 19.841C66.8502 21.1519 68.0726 22.7962 68.8839 24.6495C69.6952 26.5027 70.0742 28.5163 69.9921 30.5377C69.91 32.5591 69.369 34.5353 68.4101 36.3167C70.0961 37.6864 71.422 39.4474 72.2723 41.4465C73.1225 43.4455 73.4715 45.622 73.2888 47.7866C73.1062 49.9513 72.3973 52.0385 71.224 53.8667C70.0507 55.695 68.4485 57.2089 66.5567 58.2767C66.7903 60.0841 66.6509 61.9203 66.1471 63.6717C65.6433 65.4232 64.7857 67.0528 63.6274 68.4599C62.4691 69.8669 61.0347 71.0216 59.4126 71.8525C57.7906 72.6835 56.0155 73.1731 54.1968 73.2911C52.3781 73.4091 50.5546 73.1531 48.8388 72.5387C47.1229 71.9244 45.5513 70.9648 44.2208 69.7192C42.8904 68.4736 41.8295 66.9686 41.1035 65.2969C40.3775 63.6252 40.002 61.8225 40 60V16.6667Z"
        stroke="url(#paint1_linear_208_250)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M50 43.3333C47.2015 42.3489 44.7577 40.5567 42.9778 38.1834C41.1978 35.81 40.1615 32.9622 40 30C39.8385 32.9622 38.8022 35.81 37.0222 38.1834C35.2423 40.5567 32.7985 42.3489 30 43.3333"
        stroke="url(#paint2_linear_208_250)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M58.6633 21.6666C59.4701 20.2685 59.9264 18.696 59.9933 17.0833"
        stroke="url(#paint3_linear_208_250)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.01 17.0833C20.0759 18.6957 20.5311 20.2682 21.3367 21.6666"
        stroke="url(#paint4_linear_208_250)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5901 36.32C12.1999 35.8234 12.8524 35.3816 13.5401 35"
        stroke="url(#paint5_linear_208_250)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M66.46 35C67.1476 35.3816 67.8002 35.8234 68.41 36.32"
        stroke="url(#paint6_linear_208_250)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 60C17.7028 60.0011 15.4442 59.4086 13.4434 58.28"
        stroke="url(#paint7_linear_208_250)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M66.5567 58.28C64.5558 59.4086 62.2972 60.0011 60 60"
        stroke="url(#paint8_linear_208_250)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_250"
          x1="40.0001"
          y1="39.9782"
          x2="6.66406"
          y2="39.9782"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_250"
          x1="73.3361"
          y1="39.9782"
          x2="40"
          y2="39.9782"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_208_250"
          x1="50"
          y1="36.6667"
          x2="30"
          y2="36.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_208_250"
          x1="59.9933"
          y1="19.3749"
          x2="58.6633"
          y2="19.3749"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_208_250"
          x1="21.3367"
          y1="19.3749"
          x2="20.01"
          y2="19.3749"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_208_250"
          x1="13.5401"
          y1="35.66"
          x2="11.5901"
          y2="35.66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_208_250"
          x1="68.41"
          y1="35.66"
          x2="66.46"
          y2="35.66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_208_250"
          x1="20"
          y1="59.14"
          x2="13.4434"
          y2="59.14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_208_250"
          x1="66.5567"
          y1="59.14"
          x2="60"
          y2="59.14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const FlexIconLight: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.3634 43.3901C42.8828 39.8681 45.5705 36.978 48.9731 35.2074C52.3758 33.4367 56.285 32.8939 60.0413 33.6706C63.7976 34.4472 67.171 36.4957 69.5925 39.4705C72.014 42.4453 73.3352 46.1643 73.3334 50.0001C73.3334 62.8868 60 73.3334 43.3334 73.3334C29.7434 73.3334 16.1567 70.6001 8.76338 65.1268C7.34338 64.0734 6.66005 62.3534 6.69671 60.5868C7.06005 42.4101 8.75671 6.66675 33.3334 6.66675C35.9855 6.66675 38.5291 7.72032 40.4044 9.59568C42.2798 11.471 43.3334 14.0146 43.3334 16.6667C43.3334 18.4349 42.631 20.1306 41.3808 21.3808C40.1305 22.631 38.4348 23.3334 36.6667 23.3334C32.9834 23.3334 31.2 21.8534 30 20.0001"
        stroke="url(#paint0_linear_208_240)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M50 46.6666C47.9883 45.157 45.661 44.1222 43.1925 43.6399C40.7241 43.1576 38.1785 43.2402 35.7465 43.8815C33.3145 44.5229 31.0592 45.7063 29.1496 47.3432C27.24 48.9801 25.7256 51.0279 24.72 53.3333"
        stroke="url(#paint1_linear_208_240)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.2134 22.75C26.7301 26.59 31.6667 43.3333 26.6667 50"
        stroke="url(#paint2_linear_208_240)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_240"
          x1="73.3334"
          y1="40.0001"
          x2="6.69531"
          y2="40.0001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_240"
          x1="50"
          y1="48.3319"
          x2="24.72"
          y2="48.3319"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_208_240"
          x1="33.2134"
          y1="36.375"
          x2="26.6667"
          y2="36.375"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const FocusEyeIconLight: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M70 23.3333V16.6667C70 14.8986 69.2976 13.2029 68.0474 11.9526C66.7971 10.7024 65.1014 10 63.3333 10H16.6667C14.8986 10 13.2029 10.7024 11.9526 11.9526C10.7024 13.2029 10 14.8986 10 16.6667V23.3333"
        stroke="url(#paint0_linear_208_229)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M63.1466 41.087C63.3955 40.3748 63.3955 39.5992 63.1466 38.887C61.2699 34.2884 58.0659 30.3531 53.9434 27.5829C49.8209 24.8127 44.9667 23.3333 39.9999 23.3333C35.0331 23.3333 30.1789 24.8127 26.0564 27.5829C21.9339 30.3531 18.7299 34.2884 16.8532 38.887C16.6043 39.5992 16.6043 40.3748 16.8532 41.087C18.7299 45.6856 21.9339 49.6209 26.0564 52.3911C30.1789 55.1613 35.0331 56.6407 39.9999 56.6407C44.9667 56.6407 49.8209 55.1613 53.9434 52.3911C58.0659 49.6209 61.2699 45.6856 63.1466 41.087Z"
        stroke="url(#paint1_linear_208_229)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M70 56.6409V63.3075C70 65.0756 69.2976 66.7713 68.0474 68.0216C66.7971 69.2718 65.1014 69.9742 63.3333 69.9742H16.6667C14.8986 69.9742 13.2029 69.2718 11.9526 68.0216C10.7024 66.7713 10 65.0756 10 63.3075V56.6409"
        stroke="url(#paint2_linear_208_229)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.0001 43.3073C41.841 43.3073 43.3334 41.8149 43.3334 39.974C43.3334 38.133 41.841 36.6406 40.0001 36.6406C38.1591 36.6406 36.6667 38.133 36.6667 39.974C36.6667 41.8149 38.1591 43.3073 40.0001 43.3073Z"
        stroke="url(#paint3_linear_208_229)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_229"
          x1="70"
          y1="16.6667"
          x2="10"
          y2="16.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_229"
          x1="63.3333"
          y1="39.987"
          x2="16.6665"
          y2="39.987"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_208_229"
          x1="70"
          y1="63.3075"
          x2="10"
          y2="63.3075"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_208_229"
          x1="43.3334"
          y1="39.974"
          x2="36.6667"
          y2="39.974"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const FocusIconLight: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 50C45.5228 50 50 45.5228 50 40C50 34.4772 45.5228 30 40 30C34.4772 30 30 34.4772 30 40C30 45.5228 34.4772 50 40 50Z"
        stroke="url(#paint0_linear_208_208)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 23.3333V16.6667C10 14.8986 10.7024 13.2029 11.9526 11.9526C13.2029 10.7024 14.8986 10 16.6667 10H23.3333"
        stroke="url(#paint1_linear_208_208)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M56.6667 10H63.3334C65.1015 10 66.7972 10.7024 68.0475 11.9526C69.2977 13.2029 70.0001 14.8986 70.0001 16.6667V23.3333"
        stroke="url(#paint2_linear_208_208)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M70.0001 56.6667V63.3334C70.0001 65.1015 69.2977 66.7972 68.0475 68.0475C66.7972 69.2977 65.1015 70.0001 63.3334 70.0001H56.6667"
        stroke="url(#paint3_linear_208_208)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.3333 70.0001H16.6667C14.8986 70.0001 13.2029 69.2977 11.9526 68.0475C10.7024 66.7972 10 65.1015 10 63.3334V56.6667"
        stroke="url(#paint4_linear_208_208)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_208"
          x1="50"
          y1="40"
          x2="30"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_208"
          x1="23.3333"
          y1="16.6667"
          x2="10"
          y2="16.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_208_208"
          x1="70.0001"
          y1="16.6667"
          x2="56.6667"
          y2="16.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_208_208"
          x1="70.0001"
          y1="63.3334"
          x2="56.6667"
          y2="63.3334"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_208_208"
          x1="23.3333"
          y1="63.3334"
          x2="10"
          y2="63.3334"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const PeopleIconLight: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60.0001 70.0002C60.0001 62.9277 57.1906 56.145 52.1896 51.144C47.1886 46.143 40.4059 43.3335 33.3334 43.3335C26.261 43.3335 19.4782 46.143 14.4772 51.144C9.47626 56.145 6.66675 62.9277 6.66675 70.0002"
        stroke="url(#paint0_linear_208_266)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.3334 43.3333C42.5382 43.3333 50.0001 35.8714 50.0001 26.6667C50.0001 17.4619 42.5382 10 33.3334 10C24.1287 10 16.6667 17.4619 16.6667 26.6667C16.6667 35.8714 24.1287 43.3333 33.3334 43.3333Z"
        stroke="url(#paint1_linear_208_266)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M73.3333 66.6668C73.3333 55.4335 66.6667 45.0002 60 40.0002C62.1914 38.3561 63.9437 36.1971 65.1019 33.7144C66.2601 31.2317 66.7884 28.5017 66.6401 25.7662C66.4918 23.0306 65.6714 20.3738 64.2516 18.0308C62.8318 15.6879 60.8563 13.731 58.5 12.3335"
        stroke="url(#paint2_linear_208_266)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_266"
          x1="60.0001"
          y1="56.6668"
          x2="6.66675"
          y2="56.6668"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_266"
          x1="50.0001"
          y1="26.6667"
          x2="16.6667"
          y2="26.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_208_266"
          x1="73.3333"
          y1="39.5002"
          x2="58.5"
          y2="39.5002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const PyramidIconLight: React.FC<IconSvgProps> = ({ ...props }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33327 56.2667C7.93737 56.0356 7.59339 55.7253 7.32284 55.3552C7.05229 54.9851 6.86098 54.5632 6.76087 54.1159C6.66076 53.6685 6.65401 53.2053 6.74102 52.7552C6.82804 52.3051 7.00696 51.8778 7.26661 51.5L37.2666 8.10002C37.5738 7.65992 37.9827 7.30051 38.4586 7.05233C38.9345 6.80416 39.4632 6.67456 39.9999 6.67456C40.5366 6.67456 41.0654 6.80416 41.5413 7.05233C42.0172 7.30051 42.4261 7.65992 42.7333 8.10002L72.7333 51.4667C72.9985 51.8455 73.182 52.2754 73.2721 52.729C73.3622 53.1826 73.3569 53.65 73.2566 54.1015C73.1562 54.5529 72.9631 54.9786 72.6893 55.3513C72.4156 55.7241 72.0673 56.0358 71.6666 56.2667L43.2999 72.4667C42.2944 73.0395 41.1572 73.3407 39.9999 73.3407C38.8427 73.3407 37.7054 73.0395 36.6999 72.4667L8.33327 56.2667Z"
        stroke="url(#paint0_linear_208_220)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40 6.66675V73.3334"
        stroke="url(#paint1_linear_208_220)"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_208_220"
          x1="73.3359"
          y1="40.0076"
          x2="6.68042"
          y2="40.0076"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_208_220"
          x1="41"
          y1="40.0001"
          x2="40"
          y2="40.0001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A6B5C8" />
          <stop offset="1" stop-color="#1A1E2E" />
        </linearGradient>
      </defs>
    </svg>
  );
};
