import React from 'react';

import { cn } from '@/lib/utils';

function CreditIcon({ className = '' }) {
  return (
    <React.Fragment>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('h-12 w-12', className)}
      >
        <g clip-path="url(#clip0_271_2323)">
          <g filter="url(#filter0_dd_271_2323)">
            <path
              d="M5.95316 21.1705C5.48624 19.0664 5.55793 16.8784 6.1616 14.8095C6.76527 12.7405 7.88136 10.8575 9.4064 9.335C10.9314 7.81256 12.816 6.69997 14.8855 6.1004C16.9549 5.50083 19.1422 5.43368 21.2445 5.9052C22.4016 4.09481 23.9956 2.60494 25.8797 1.57294C27.7637 0.540934 29.8772 0 32.0251 0C34.1731 0 36.2866 0.540934 38.1706 1.57294C40.0547 2.60494 41.6487 4.09481 42.8058 5.9052C44.9113 5.43163 47.1023 5.49847 49.1751 6.0995C51.2478 6.70053 53.1349 7.81621 54.6609 9.34279C56.1869 10.8694 57.3021 12.7572 57.9029 14.8308C58.5037 16.9043 58.5705 19.0962 58.0971 21.2025C59.9068 22.3601 61.3961 23.9548 62.4277 25.8396C63.4593 27.7244 64 29.8386 64 31.9875C64 34.1363 63.4593 36.2505 62.4277 38.1353C61.3961 40.0201 59.9068 41.6148 58.0971 42.7724C58.5685 44.8755 58.5013 47.0636 57.902 49.1339C57.3027 51.2041 56.1905 53.0895 54.6687 54.6151C53.1468 56.1408 51.2646 57.2573 49.1964 57.8612C47.1282 58.4651 44.9411 58.5368 42.8378 58.0697C41.6822 59.887 40.0869 61.3833 38.1996 62.4199C36.3124 63.4565 34.1942 64 32.0411 64C29.8881 64 27.7699 63.4565 25.8826 62.4199C23.9954 61.3833 22.4001 59.887 21.2445 58.0697C19.1422 58.5412 16.9549 58.4741 14.8855 57.8745C12.816 57.2749 10.9314 56.1624 9.4064 54.6399C7.88136 53.1175 6.76527 51.2344 6.1616 49.1655C5.55793 47.0965 5.48624 44.9085 5.95316 42.8044C4.12958 41.6499 2.62751 40.0527 1.58666 38.1615C0.54581 36.2702 0 34.1464 0 31.9875C0 29.8285 0.54581 27.7047 1.58666 25.8134C2.62751 23.9222 4.12958 22.325 5.95316 21.1705Z"
              fill="#1570EF"
              fill-opacity="0.85"
            />
          </g>
          <path
            d="M40 25.5C38.7166 23.9466 37.0041 22.8377 35.0933 22.3226C33.1825 21.8076 31.1651 21.9111 29.3129 22.6193C27.4606 23.3276 25.8625 24.6064 24.7338 26.2836C23.6051 27.9608 23 29.9559 23 32C23 34.0441 23.6051 36.0392 24.7338 37.7164C25.8625 39.3936 27.4606 40.6724 29.3129 41.3807C31.1651 42.0889 33.1825 42.1924 35.0933 41.6774C37.0041 41.1623 38.7166 40.0534 40 38.5"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_271_2323"
            x="0"
            y="-2.66667"
            width="64"
            height="69.3333"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.66667" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_271_2323"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2.66667" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_271_2323"
              result="effect2_dropShadow_271_2323"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_271_2323"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_271_2323">
            <rect width="64" height="64" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </React.Fragment>
  );
}

export default CreditIcon;
